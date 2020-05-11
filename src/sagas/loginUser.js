import { takeLatest, call, put } from "redux-saga/effects";
import { Post } from "../lib/Request";
import {
  // loginUserRequest,
  loginUserSuccess,
  loginUserFail,
  // getUserInfoSuccess,
  // getUserInfoFail,
} from "../actions";
import { LOGIN_USER } from "../constants";

// function* accessConfirmed(token, history) {
//   yield put(getUserInfoRequest(token));
//   localStorage.setItem("authToken", token);
//   history.push("/dashboard");
// }

function* loginUser({ credentials, history, popupMessage }) {
  try {
    const { status, message, data } = yield call(
      Post,
      "/enterprise/login-user",
      credentials
    );
    yield put(loginUserSuccess(data));
    localStorage.setItem("apiKey", data.accessCredentials.apiKey);
    localStorage.setItem("roleKey", data.accessCredentials.roleKey);
    localStorage.setItem("testUserInfo", JSON.stringify(data.enterpriseUser));
    localStorage.setItem("authToken", data.accessCredentials.jwtToken);
    popupMessage(status, message);
    history.push("/dashboard");
  } catch (error) {
    const { status, message, data } = error.response.data;
    yield put(loginUserFail(data));
    popupMessage(status, message);
  }
}

// function* getUser({ payload: token }) {
//   try {
//     const userInfo = yield call(Get, "/users/whoami", {
//       Authorization: token,
//     });
//     yield put(getUserInfoSuccess(userInfo));
//   } catch (error) {
//     yield put(getUserInfoFail(error.message));
//   }
// }

// export function* getUserWatcher() {
//   yield takeLatest(LOGIN_USER.GET_INFO_REQUEST, getUser);
// }

function* loginUserSaga() {
  yield takeLatest(LOGIN_USER.REQUEST, loginUser);
}

export default loginUserSaga;
