import { LOGIN_USER } from "../constants";

export const loginUserRequest = (credentials, history, popupMessage) => {
  return {
    type: LOGIN_USER.REQUEST,
    credentials,
    history,
    popupMessage,
  };
};

export const loginUserSuccess = (data) => {
  return {
    type: LOGIN_USER.SUCCESS,
    data,
  };
};

export const loginUserFail = (data) => {
  return {
    type: LOGIN_USER.FAIL,
    data,
  };
};
