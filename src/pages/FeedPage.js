import React from "react";
import { useSelector } from "react-redux";

const FeedPage = (props) => {
  const { userId, token } = useSelector((state) => state.auth);

  return (
    <div>
      <div>This is feed page</div>
      <div>
        userId : {userId}, token : {token}
      </div>
    </div>
  );
};

export default FeedPage;
