import { LOGIN_USER } from "../constants";

const initialState = {
  loading: false,
  data: {},
};

const loginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER.REQUEST:
      return { ...state, loading: true };
    case LOGIN_USER.SUCCESS:
    case LOGIN_USER.FAIL:
      return { ...state, data: action.data, loading: false };
    // case LOGIN_USER.GET_INFO_REQUEST:
    //   return { ...state, loading: true };
    // case LOGIN_USER.GET_INFO_SUCCESS:
    //   return { ...state, userInfo: action.payload };
    // case LOGIN_USER.GET_INFO_FAIL:
    //   return { ...state, error: action.payload };
    // case LOGIN_USER.CLEAN:
    //   return initialState;
    default:
      return state;
  }
};

export default loginUserReducer;
