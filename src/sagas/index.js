import { all, fork } from "redux-saga/effects";
import loginUserSaga from "./loginUser";
import allShipmentsSaga from "./shipments";
import getOneShipmentSaga from "./getOneShipment";

export default function* rootSaga() {
  yield all([
    fork(loginUserSaga),
    fork(allShipmentsSaga),
    fork(getOneShipmentSaga),
  ]);
}
