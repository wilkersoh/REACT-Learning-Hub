import React from 'react';
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprocalCard";

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          timeAgo="Today at 4:45pm"
          content="HElllo React"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}

// export default App;
