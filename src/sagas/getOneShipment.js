import { takeLatest, call, put } from "redux-saga/effects";
import { GET_ONE_SHIPMENT } from "../constants";
import { Get } from "../lib/Request";
import { getOneShipmentSuccess, getOneShipmentFail } from "../actions";

function* getShipment({ id, apiKey, roleKey }) {
  try {
    const {
      data: { driver, shipment },
    } = yield call(
      Get,
      `/shipment/enterprise/get-details/${id}/${apiKey}/${roleKey}`
    );
    yield put(
      getOneShipmentSuccess({
        driver,
        travelPolyline: shipment.travelPolyline,
        pickupInfo: shipment.pickupInfo,
        packages: shipment.packages,
        price: shipment.price,
      })
    );
  } catch (error) {
    yield put(getOneShipmentFail(error.response.data.message));
  }
}

export default function* getOneShipmentSaga() {
  yield takeLatest(GET_ONE_SHIPMENT.REQUEST, getShipment);
}
