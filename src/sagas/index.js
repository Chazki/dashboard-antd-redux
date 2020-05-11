import { all, fork } from "redux-saga/effects";
import loginUserSaga from "./loginUser";
import allShipmentsSaga from "./shipments";

export default function* rootSaga() {
  yield all([fork(loginUserSaga), fork(allShipmentsSaga)]);
}
