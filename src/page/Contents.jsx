import React, { useState, useEffect, useRef } from "react";
import { db } from "../api/firebase";
import { getDatabase, ref, push, child, update, onValue, remove } from "firebase/database";
import { uploadBytesResumable, getDownloadURL } from "firebase/storage";
import classes from "./Content.module.css";
import { set } from "store";

function Content() {
    
    const titleRef = useRef();
    const bodyRef = useRef();
    const fileUrlRef = useRef();
    const [posts, setPosts] = useState([]);
    const [editPostId, setEditPostId] = useState(null);
    const [files, setFileList] = useState([]); 
    const [isUploading, setUploading] = useState(false); 
    const [fileUrl, setPhotosURL] = useState([]); 
    const [progress, setProgress] = useState(0); 


  useEffect(() => {
    fetchPosts();
  }, []);

    const fetchPosts = () => {
    const database = getDatabase();
    const postsRef = ref(database, 'posts');

    onValue(postsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const postsArray = Object.entries(data).map(([key, value]) => ({ key, ...value }));
        setPosts(postsArray);
      } else {
        console.log("No data available");
      }
    });
     };
     const handleImageChange = (e) => {
      for (const image of e.target.files) {
        setFileList((prevState) => [...prevState, image]);
      }
    };
    const handleImageUpload = async (e, fileList) => {
        e.preventDefault();
        try{
          setUploading(true);
          const urls = await Promise.all(
            fileList?.map((file)=>{
                const storageRef = ref(db, `images/${file.name}`);
                const task = uploadBytesResumable(storageRef, file);
                task.on(
                    "state_changed", (snapshot)=>{
                        setProgress(
                            Math.round(
                                (snapshot.bytestTransferred / snapshot.totalBytes) * 100
                            )
                        );
                    });
                return getDownloadURL(storageRef);
            })
            )
            setPhotosURL(urls);
            alert("업로드 완료");
            }
         
            catch(err){
                console.log(err);
        }
        setProgress(0);
    setUploading(false)
    };
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const bodyUrl = bodyRef.current.value;
    const fileUrl = fileUrlRef.current.value;
    
    if (editPostId) {
        updatePost(editPostId, title, bodyUrl, fileUrl);
    } else {
        writeNewPost("user_id", title, bodyUrl, fileUrl);
    }
    titleRef.current.value = "";
    bodyRef.current.value = "";
    fileUrlRef.current.value = "";
    setEditPostId(null);
  };

    const writeNewPost = (userId, title, bodyUrl, fileUrl) => {
    const database = getDatabase();

    // 새 포스트 키 생성
    const newPostKey = push(child(ref(database), 'posts')).key;

    const postData = {
      title,
      body: bodyUrl,
      fileUrl,
    };

    const updates = {};
    updates['/posts/' + newPostKey] = postData;

    update(ref(database), updates);
  };

    const updatePost = (postId, title, bodyUrl, fileUrl) => {
    const database = getDatabase();
    const postRef = ref(database, `posts/${postId}`);

    const postData = {
      title,
      body: bodyUrl,
      fileUrl,
    };
    update(postRef, postData);
  };

    const handleDelete = (postId) => {
    const database = getDatabase();
    const postRef = ref(database, `posts/${postId}`);
    
    remove(postRef);
  };

    const handleEdit = (postId) => {

    const postToEdit = posts.find((post) => post.key === postId);
    if (postToEdit) {
        titleRef.current.value = postToEdit.title;
        bodyRef.current.value = "";
        fileUrlRef.current.value = "";
        setEditPostId(postId);
        }
    };

  return (
    <div>
         <main className={classes.auth}>
    <div className={classes.wrapper}> 
      <form  className={classes.form}onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">제목</label>
          <input className={classes.title} id="title" ref={titleRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="body">본문</label>
          <input id="text" className={classes.image}ref={bodyRef}></input>
        </div>
      
        <div className={classes.control}>
          {/* 여기서부터 */}
          <div>
            <form onSubmit={(e) => handleImageUpload(e, files)}>
              <label>
                파일:
                <input
                  multiple
                  accept="image/*"
                  type="file"
                  onChange={handleImageChange}
                  ref={fileUrlRef}
                />
              </label>
            </form>
            {fileUrl?.length > 0 && (
              <ul>
                {fileUrl.map((url, index) => (
                  <li key={index}>
                    <img
                      src={url}
                      alt="사용자 첨부 이미지"
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* 여기까지 */}
          
        </div>
        <button className={classes.button}type="submit">{editPostId ? "수정" : "제출"}</button>
      </form>
  
     

    </div>
   </main>
    <figure className={classes.figure}>
      <section className={classes.posts}>
        <div className={classes.control}>
            <ul>
              {posts.map((post) => (
                <li key={post.key}>
                  <h3>{post.title}</h3>
                  <img src={post.picture} alt={post.title} />
                 
                  <button onClick={() => handleDelete(post.key)}>삭제</button>
                  <button onClick={() => handleEdit(post.key)}>수정</button>
                </li>
              ))}
            </ul>
          </div>
          </section>
      </figure>
    </div>

    
  );
}

export default Content;
