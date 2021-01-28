import { API_KEY } from "../../config";

export const SIGNIN = "SIGNIN";
export const SIGNUP = "SIGNUP";

export const signin = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.okay) {
      throw new Error("something went wrong");
    }

    const resData = await response.json();
    console.log(resData);

    dispatch({
      type: SIGNIN,
      email,
      password,
    });
  };
};

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      console.log(response);
      throw new Error("something went wrong");
    }

    const resData = await response.json();
    console.log(resData);

    dispatch({
      type: SIGNUP,
      email: resData.email,
      token: resData.idToken,
    });
  };
};
