import { VEHICLE } from "../constants";

export const selectVehicle = (kindOfVehicle) => {
  return {
    type: VEHICLE.SELECT,
    kindOfVehicle,
  };
};
