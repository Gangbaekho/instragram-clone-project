import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ActivityPage from "./pages/ActivityPage";
import DirectMessagePage from "./pages/DirectMessagePage";
import ExplorePage from "./pages/ExplorePage";
import FeedPage from "./pages/FeedPage";
import IndividualPage from "./pages/IndividualPage";
import NotFoundPage from "./pages/NotFoundPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={FeedPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/direct" component={DirectMessagePage} exact />
        <Route path="/explore" component={ExplorePage} exact />
        <Route path="/activity" component={ActivityPage} exact />
        <Route path="/:username" component={IndividualPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
