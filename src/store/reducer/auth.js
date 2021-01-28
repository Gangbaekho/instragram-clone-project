import { SIGNIN, SIGNUP } from "../action/auth";

const initialState = {
  userId: null,
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        userId: action.email,
        token: "dummy-token",
      };
    case SIGNUP:
      return {
        userId: action.email,
        token: "dummy-token",
      };
  }
  return state;
};
