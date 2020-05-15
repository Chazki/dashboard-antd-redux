import { SELECT_VEHICLE } from "../constants";

export const selectVehicle = (kindOfVehicle) => {
  return {
    type: SELECT_VEHICLE,
    kindOfVehicle,
  };
};
