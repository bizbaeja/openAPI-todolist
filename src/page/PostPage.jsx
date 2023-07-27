import React from 'react';

function PostPage(props) {
  // props.location.state가 존재하지 않을 경우 빈 객체로 초기화
  const { title, content } = props?.location?.state || {};

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default PostPage;
