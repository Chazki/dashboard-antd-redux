import { PICKUP_OPTIONS } from "../constants";

export const handleDrawerPickupOption = () => {
  return {
    type: PICKUP_OPTIONS.HANDLE_DRAWER,
  };
};

export const selectPickupOption = (id) => {
  return {
    type: PICKUP_OPTIONS.SELECT,
    id,
  };
};

export const addPickupOption = (point) => {
  return {
    type: PICKUP_OPTIONS.ADD,
    point,
  };
};

export const editPickupOption = (id) => {
  return {
    type: PICKUP_OPTIONS.EDIT,
    id,
  };
};

export const removePickupOption = (id) => {
  return {
    type: PICKUP_OPTIONS.REMOVE,
    id,
  };
};
