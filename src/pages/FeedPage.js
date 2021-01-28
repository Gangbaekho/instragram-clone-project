import React from "react";
import { useSelector } from "react-redux";

// DUMMY DATA
import dummyUser from "../data/dummyUserData";
import dummyFeedData from "../data/dummyFeedData";

const FeedPage = (props) => {
  const { userId, token } = useSelector((state) => state.auth);

  return (
    <div>
      <div>This is feed page</div>
      <div>
        login information ::: userId : {userId}, token : {token}
      </div>
      <div>
        <div>user information</div>
        <div>profile url :{dummyUser.profileUrl}</div>
        <div>username :{dummyUser.userName}</div>
        <div>userlocation :{dummyUser.userLocation}</div>
      </div>
      <div>
        <div>user's feed</div>
        <div>owner:{dummyFeedData.owner}</div>
        <div>media url : {dummyFeedData.mediaUrl}</div>
        <div>content : {dummyFeedData.content}</div>
        <div>likeCount : {dummyFeedData.likeCount}</div>
        <div>
          comments
          {/* {dummyFeedData.comments.map((comment) => (
            <div key={comment.owner}>
              <div>{comment.owner}</div>
              <div>{comment.content}</div>
              <div>{comment.replies[0]}</div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
