import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as authActions from "../store/action/auth";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const singInHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.signin(email, password));
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.signup(email, password));
  };

  return (
    <div className="container mx-auto text-center">
      <form className="mt-10">
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            className="border-2 border-solid border-black"
            onChange={(e) => console.log(setEmail(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            className="border-2 border-solid border-black"
            onChange={(e) => console.log(setPassword(e.target.value))}
          />
        </div>
        <div className="mt-10">
          <button
            className="border-2 border-solid border-black rounded bg-blue-500"
            onClick={singInHandler}
          >
            Sign In
          </button>
          <button
            className="border-2 border-solid border-black rounded bg-blue-500"
            onClick={signUpHandler}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
