import { GET_ONE_SHIPMENT } from "../constants";

export const getOneShipmentRequest = (id, apiKey, roleKey) => {
  return {
    type: GET_ONE_SHIPMENT.REQUEST,
    id,
    apiKey,
    roleKey,
  };
};

export const getOneShipmentSuccess = (data) => {
  return {
    type: GET_ONE_SHIPMENT.SUCCESS,
    data,
  };
};

export const getOneShipmentFail = (error) => {
  return {
    type: GET_ONE_SHIPMENT.FAIL,
    error,
  };
};

export const getOneShipmentRemovePackage = (packagesSelected) => {
  return {
    type: GET_ONE_SHIPMENT.REMOVE_PACKAGE,
    packagesSelected,
  };
};

export const getOneShipmentAddPackage = (packagesSelected) => {
  return {
    type: GET_ONE_SHIPMENT.ADD_PACKAGE,
    packagesSelected,
  };
};

export const getOneShipmentUpdatePackages = (packagesSelected, allPackages) => {
  return {
    type: GET_ONE_SHIPMENT.UPDATE_PACKAGE,
    packagesSelected,
    allPackages,
  };
};
