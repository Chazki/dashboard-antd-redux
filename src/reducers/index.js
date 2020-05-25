import { combineReducers } from "redux";
import loginUserReducer from "./loginUser";
import sidebarStatesReducer from "./sidebarStates";
import allShipmentsReducer from "./shipments";
import pickupPointsReducer from "./pickupPoint";
import dropoffPointsReducer from "./dropoffPoints";
import selectVehicleReducer from "./selectVehicle";
import getOneShipmentReducer from "./getOneShipment";
const rootReducer = combineReducers({
  currentSession: loginUserReducer,
  shipments: allShipmentsReducer,
  pickupPoints: pickupPointsReducer,
  dropoffPoints: dropoffPointsReducer,
  sidebarStates: sidebarStatesReducer,
  kindOfVehicle: selectVehicleReducer,
  getOneShipment: getOneShipmentReducer,
});

export default rootReducer;
