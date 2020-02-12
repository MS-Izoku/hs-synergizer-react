import React from "react";
import { createMarkup } from "../../services/helperScripts";

const ForumPostHeader = props => {
  const renderPostHTML = () => {
    return <div dangerouslySetInnerHTML={createMarkup(props.post.body)} />;
  };

  return (
    <div className="forum-post-header">
      <div className="avatar-area">
        <img className="forum-avatar" src={props.post.user.avatar} alt={"user-avatar"} />
        <h2>{props.post.user.username}</h2>
      </div>
      <div className="content-area">
        <header>
          <h2>{props.post.title}</h2>
        </header>
        <div className="post-content">{renderPostHTML()}</div>
        <hr className="break"/>
        <div className="tagline">{props.post.user.tagLine}</div>
      </div>
    </div>
  );
};

export default ForumPostHeader;
