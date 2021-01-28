export const SIGNIN = "SIGNIN";
export const SIGNUP = "SIGNUP";

export const signin = (email, password) => {
  return {
    type: SIGNIN,
    email,
    password,
  };
};

export const signup = (email, password, text) => {
  return {
    type: SIGNUP,
    email,
    password,
  };
};
