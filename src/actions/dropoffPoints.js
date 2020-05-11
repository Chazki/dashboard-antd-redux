import { DROPOFF_POINTS } from "../constants";

export const addDropoffPoint = (point) => {
  return {
    type: DROPOFF_POINTS.ADD,
    point,
  };
};

export const removeDropoffPoint = (point) => {
  return {
    type: DROPOFF_POINTS.REMOVE,
    point,
  };
};
