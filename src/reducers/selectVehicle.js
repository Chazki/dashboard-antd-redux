import { SELECT_VEHICLE } from "../constants";

const initialState = "";

const selectVehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_VEHICLE:
      return action.kindOfVehicle;
    default:
      return state;
  }
};

export default selectVehicleReducer;
