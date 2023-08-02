import { db } from "../api/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import React from "react";
import { Line } from "rc-progress";
function FileUpload() {
    const [files, setFileList] = useState([]); // 파일 리스트
    const [isUploading, setUploading] = useState(false); // 업로드 상태
    const [photoURL, setPhotosURL] = useState([]); // 업로드 완료된 사진 링크들
    const [progress, setProgress] = useState(0); // 업로드 진행상태

    // 파일 선택시 파일리스트 상태 변경해주는 함수
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
  return (
    <div>
    <form onSubmit={(e) => handleImageUpload(e, files)}>
      {/* rc-progress의 Line 컴포넌트로 파일 업로드 상태 표시 */}
      <Line percent={progress} strokeWidth={4} strokeColor="#ff567a" />
      <label>
        파일:
        <input
          multiple
          accept="image/*"
          type="file"
          onChange={handleImageChange}
        />
      </label>
      <button type="submit">{isUploading ? "업로드중..." : "업로드"}</button>
    </form>
    {photoURL?.length > 0 && (
      <ul>
        {photoURL.map((url, index) => (
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
  )
}

export default FileUpload;
