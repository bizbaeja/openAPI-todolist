import React, { useState, useEffect, useRef } from "react";
import { getDatabase, ref, push, child, update, onValue, remove } from "firebase/database";
import classes from "./Post.module.css";
function Content() {

    const titleRef = useRef();
    const imageRef = useRef();
    const fileUrlRef = useRef();
    const [posts, setPosts] = useState([]);
    const [editPostId, setEditPostId] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const imageUrl = imageRef.current.value;
    const fileUrl = fileUrlRef.current.value;
    
    if (editPostId) {
        updatePost(editPostId, title, imageUrl, fileUrl);
    } else {
        writeNewPost("user_id", title, imageUrl, fileUrl);
    }
    titleRef.current.value = "";
    imageRef.current.value = "";
    fileUrlRef.current.value = "";
    setEditPostId(null);
  };

    const writeNewPost = (userId, title, imageUrl, fileUrl) => {
    const database = getDatabase();

    // 새 포스트 키 생성
    const newPostKey = push(child(ref(database), 'posts')).key;

    const postData = {
      title,
      picture: imageUrl,
      fileUrl,
    };

    const updates = {};
    updates['/posts/' + newPostKey] = postData;

    update(ref(database), updates);
  };

    const updatePost = (postId, title, imageUrl, fileUrl) => {
    const database = getDatabase();
    const postRef = ref(database, `posts/${postId}`);

    const postData = {
      title,
      picture: imageUrl,
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
        imageRef.current.value = "";
        fileUrlRef.current.value = "";
        setEditPostId(postId);
        }
    };

  return (
    <div > 
      <form className={classes.hidden} onSubmit={handleSubmit}>
        <input id="title" ref={titleRef}></input>
        <input id="image" ref={imageRef}></input>
        <input type="file" ref={fileUrlRef}></input>
        <button type="submit">{editPostId ? "수정" : "제출"}</button>
      </form>
      
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
  );
}

export default Content;
