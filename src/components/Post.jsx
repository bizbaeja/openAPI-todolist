import React, {useRef } from "react";
import { getDatabase, ref, set , update} from "firebase/database";
import { collection, getDocs } from "firebase/firestore";
import { db } from 'api/firebase';

function Post() {
  const titleRef = useRef();
  const imageRef = useRef();
  const fileUrlRef = useRef();

  // 제출 버튼을 눌렀을 때 호출되는 함수
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const imageUrl = imageRef.current.value;
    const fileUrl = fileUrlRef.current.value;

    writeUserData('user_id', title, imageUrl, fileUrl);
  };

  const writeUserData = (userId, title, imageUrl, fileUrl) => {
    const usersCollectionRef = collection(db, 'users');
    // 비동기로 데이터 받을 준비
    const getUsers = async () => {
      // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(usersCollectionRef);
      console.log(data);
    };

    getUsers();

    const database = getDatabase();
    set(ref(database, 'post/' + userId), {
      title,
      picture: imageUrl,
      fileUrl,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="title" ref={titleRef}></input>
        <input id="image" ref={imageRef}></input>
        <input type="file" ref={fileUrlRef}></input>
        <button type="submit">제출</button>
      </form>
    </div>
  );
}

export default Post;
