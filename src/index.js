import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// REDUX
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

// REDUCERS
import AuthReducer from "./store/reducer/auth";
import FeedReducer from "./store/reducer/feed";

// PAGES
import HomePage from "./pages/HomePage";
import ActivityPage from "./pages/ActivityPage";
import DirectMessagePage from "./pages/DirectMessagePage";
import ExplorePage from "./pages/ExplorePage";
import IndividualPage from "./pages/IndividualPage";
import NotFoundPage from "./pages/NotFoundPage";

// CSS
import "./tailwind.output.css";

const rootReducer = combineReducers({
  auth: AuthReducer,
  feed: FeedReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/direct" component={DirectMessagePage} exact />
          <Route path="/explore" component={ExplorePage} exact />
          <Route path="/activity" component={ActivityPage} exact />
          <Route path="/:username" component={IndividualPage} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
