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
        token: action.token,
      };
    case SIGNUP:
      return {
        userId: action.email,
        token: action.token,
      };
  }
  return state;
};
