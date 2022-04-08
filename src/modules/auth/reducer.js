import { IS_LOGIN } from "./constants";

const initialState = {
  isLogin: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case IS_LOGIN:
      return { ...state, isLogin: !state.isLogin };
    default:
      return state;
  }
}
