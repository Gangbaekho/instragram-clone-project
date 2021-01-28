import React from "react";
import { useSelector } from "react-redux";

import LoginPage from "./LoginPage";
import FeedPage from "./FeedPage";

const HomePage = (props) => {
  const { userId, token } = useSelector((state) => state.auth);
  const isLoggedIn = userId && token;

  return isLoggedIn ? <FeedPage /> : <LoginPage />;
};

export default HomePage;
