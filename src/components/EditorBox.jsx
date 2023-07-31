// EditorBox.js
import React, { useState, useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Title from '../ui/Title';
import Button from '../ui/Button';
import classes from '../ui/Button.module.css'
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

const EditorBox = () => {
  function ContentsViewer({ title, data }) {
    return (
      <div>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: data }} />
      </div>
    );
  }
  
  const editorRef = useRef();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    console.log(data);
    setContent(data);
  };


  const handlePost = () => {
    if (title.trim().length === 0 || content.trim().length === 0) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }
    // 게시물 생성 페이지로 이동하고 데이터 전달
    // navigate('/post', { state: { title, content } });
    const enterdBody = editorRef.current?.getInstance().getMarkdown();
    axios(`${process.env.REACT_APP_URL}/api/posts`, {
      method: 'POST',
      headers: {
        access_hh: sessionStorage.getItem('AccessToken'),
      },
      data:{
        title,
        body: enterdBody,
      }
    })
    .then((res)=>{
      if(res.headers.access_hh){
        sessionStorage.setItem('AccessToken', res.headers.access_hh);
      }
      navigate(`/post/${res.data.postId}`);
    })
    console.log('handlePost function called');
  };

  return (
    <>
      <Title type="text" value={title}  onChange={(e) => setTitle(e.target.value)}/>
      <ContentsViewer title={title} data={content} />
      <Editor
         placeholder="10글자 이상 작성해주세요."
         required
         ref={editorRef}
         previewStyle="vertical" // 미리보기 스타일 지정
         height="300px" // 에디터 창 높이
         initialEditType="markdown" // 초기 입력모드 설정(디폴트 markdown)
         hideModeSwitch={true}
         language="ko-KR"
         onChange={onChange}
         toolbarItems={[
           // 툴바 옵션 설정
           ["heading", "bold", "italic", "strike"],
           ["hr", "quote"],
           ["ul", "ol", "task", "indent", "outdent"],
           ["table", "image", "link"],
           ["code", "codeblock"],
         ]}
         hooks={{
           addImageBlobHook: (blob, callback) => {
             const formData = new FormData();
             formData.append("image", blob);
             axios(`${process.env.REACT_APP_URL}/api/images/upload`, {
               method: "POST",
               headers: {
                 "Content-Type": "multipart/form-data",
                 access_hh: sessionStorage.getItem("AccessToken"),
               },
               data: formData,
             })
               .then((res) => {
                 callback(res.data.imageUrl);
               })
               .catch((err) => {
                 if (err.response.status === 400) {
                   if (err.response.data.fieldErrors) {
                     alert(err.response.data.fieldErrors[0].reason);
                   } else if (
                     err.response.data.fieldErrors === null &&
                     err.response.data.violationErrors
                   ) {
                     alert(err.response.data.violationErrors[0].reason);
                   } else {
                     alert(
                       "우리도 무슨 오류인지 모르겠어요... 새로고침하고 다시 시도해주세요.... 미안합니다.....ㅠ"
                     );
                   }
                 } else if (err.response.status === 0)
                   alert(
                     "서버 오류로 인해 불러올 수 없습니다. 조금 뒤에 다시 시도해주세요"
                   );
                 else {
                   if (
                     err.response.data.korMessage ===
                     "만료된 토큰입니다. 다시 로그인 해주세요."
                   ) {
                     sessionStorage.clear();
                     navigate(`/`);
                     window.location.reload();
                   } else if (err.response.data.korMessage) {
                     alert(err.response.data.korMessage);
                   } else {
                     alert(
                       "우리도 무슨 오류인지 모르겠어요... 새로고침하고 다시 시도해주세요.... 미안합니다.....ㅠ"
                     );
                   }
                 }
               });
           },
         }}
      
      />
      <Button  onClick={()=>{handlePost()}} className={classes.button}/>
    </>
  );
}

export default EditorBox;
