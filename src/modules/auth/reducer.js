import { IS_LOGIN, UPDATE_NAME } from "./constants";

const initialState = {
  isLogin: false,
  name:""
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case IS_LOGIN:
      return { ...state, isLogin: !state.isLogin };
    case UPDATE_NAME:
      return { ...state, name: action.name };
    default:
      return state;
  }
}
