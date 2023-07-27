// EditorBox.js
import React, { useState, useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import { useNavigate } from 'react-router-dom';
import Title from '../ui/Title';
import Button from '../ui/Button';
import classes from '../ui/Button.module.css'
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import PostPage from '../page/PostPage';
function ContentsViewer({ title, data }) {
  return (
    <div>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
}

function EditorBox(props) {
  const editorRef = useRef();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    console.log(data);
    setContent(data);
  };

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const handlePost = () => {
    // 게시물 생성 페이지로 이동하고 데이터 전달
    navigate('/post', { state: { title, content } });
  };

  return (
    <>
      <Title type="text" value={title} onChange={titleHandler} />
      <ContentsViewer title={title} data={content} />
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        ref={editorRef}
        initialEditType="markdown"
        useCommandShortcut={true}
        onChange={onChange}
        language="ko-KR"
      />
      <Button  onClick className={classes.button}/>
    </>
  );
}

export default EditorBox;
