import { takeLatest, call, put } from "redux-saga/effects";
import { SHIPMENTS } from "../constants";
import {
  shipmentsSuccess,
  shipmentsFail,
  // addNewShipmentSuccess,
  // addNewShipmentFail,
  // openDrawerNewShipment,
} from "../actions";
import { Get } from "../lib/Request";

let lastFilter;
let lastResponse;

const checkLastFilter = (currentFilter) => {
  if (lastFilter === currentFilter) return false;
  else return true;
};

function* getAllShipments({
  filterShipmentState,
  apiKey,
  roleKey,
  popupMessage,
}) {
  try {
    let response = {};
    if (checkLastFilter(filterShipmentState)) {
      const route = "/shipment/enterprise/get-list";
      response = yield call(
        Get,
        `${route}/${apiKey}/${roleKey}`,
        filterShipmentState !== "all" ? { filterShipmentState } : {}
      );
      lastFilter = filterShipmentState;
      lastResponse = response;
      popupMessage(response.status, response.message);
    }
    response = lastResponse;
    const { status, message, data } = response;
    yield put(shipmentsSuccess(status, message, data));
  } catch (error) {
    const { status, message, data } = error.response.data;
    yield put(shipmentsFail(status, message, data));
    popupMessage(status, message);
  }
}

// function* allShipmentsWatcher() {
//   yield takeLatest(SHIPMENTS.ADD, getAllShipments);
// }

// function* addShipment({ payload: newShipment }) {
//   try {
//     const message = yield call(Post, "/shipments/save", newShipment);
//     yield getAllShipments();
//     yield put(addNewShipmentSuccess(message));
//     yield put(openDrawerNewShipment());
//   } catch (error) {
//     yield put(addNewShipmentFail(error.message));
//     yield put(openDrawerNewShipment());
//   }
// }

function* allShipmentsSaga() {
  yield takeLatest(SHIPMENTS.REQUEST, getAllShipments);
}

export default allShipmentsSaga;
