/* eslint-disable */

import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Himanshu"
          timeAgo="Today at 11 AM"
          text="This is my first blog!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jordan"
          timeAgo="Yesterday at 6 PM"
          text="I love React library"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
