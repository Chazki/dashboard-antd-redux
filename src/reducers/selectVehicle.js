import { VEHICLE } from "../constants";

const initialState = "";

const selectVehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case VEHICLE.SELECT:
      return action.kindOfVehicle;
    case VEHICLE.RESET:
      return "";
    default:
      return state;
  }
};

export default selectVehicleReducer;
