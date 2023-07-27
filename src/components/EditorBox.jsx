import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

import '@toast-ui/editor/dist/toastui-editor-viewer.css';

import { useState, useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';

function ContentsViewer({ data }) {
    return (
      <div>
        <h2>Viewer</h2>
        <div dangerouslySetInnerHTML={{ __html: data }} />
      </div>
    );
  }


  
function EditorBox() {
    const [title, setTitle] = useState("");
    const editorRef = useRef();
    const [content, setContent] = useState("");
    const onChange = () => {
        const data = editorRef.current.getInstance().getHTML()
        console.log(data)
        setContent(data); 
    }
  const onChangeTitle = (event)=>{
    setTitle(event.target.value)
  }
  return (
<>
<input type="text" value={title} onChange={onChangeTitle}/>
<ContentsViewer data={content} />   
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
  
</>
 
)
}

export default EditorBox


