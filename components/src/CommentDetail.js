/* eslint-disable */

import React from "react";
import faker from "faker";

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.image()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Himanshu
        </a>
        <div className="metadata">
          <span className="date">Today at 11 AM </span>
        </div>
        <div className="text">This is my First Post!</div>
      </div>
    </div>
  );
};

export default CommentDetail;
