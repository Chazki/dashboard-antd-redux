import { combineReducers } from "redux";
import loginUserReducer from "./loginUser";
import sidebarStatesReducer from "./sidebarStates";
import allShipmentsReducer from "./shipments";
import pickupPointsReducer from "./pickupPoints";
import dropoffPointsReducer from "./dropoffPoints";

const rootReducer = combineReducers({
  currentSession: loginUserReducer,
  sidebarStates: sidebarStatesReducer,
  shipments: allShipmentsReducer,
  pickupPoints: pickupPointsReducer,
  dropoffPoints: dropoffPointsReducer,
});

export default rootReducer;
