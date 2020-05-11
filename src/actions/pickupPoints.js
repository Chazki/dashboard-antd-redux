import { PICKUP_POINTS } from "../constants";

export const addPickupPoint = (point) => {
  return {
    type: PICKUP_POINTS.ADD,
    point,
  };
};

export const removePickupPoint = (point) => {
  return {
    type: PICKUP_POINTS.REMOVE,
    point,
  };
};
