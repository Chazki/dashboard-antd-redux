import { SHIPMENTS } from "../constants";

export const shipmentsRequest = (
  filterShipmentState,
  apiKey,
  roleKey,
  popupMessage
) => {
  return {
    type: SHIPMENTS.REQUEST,
    filterShipmentState,
    apiKey,
    roleKey,
    popupMessage,
  };
};

export const shipmentsSuccess = (status, message, data) => {
  return {
    type: SHIPMENTS.SUCCESS,
    status,
    message,
    data,
  };
};

export const shipmentsFail = (status, message, data) => {
  return {
    type: SHIPMENTS.FAIL,
    status,
    message,
    data,
  };
};
