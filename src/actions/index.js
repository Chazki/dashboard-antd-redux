import * as sidebarStates from "./sidebarStates";
import * as allShipments from "./allShipments";
import * as loginUser from "./loginUser";
import * as pickupPoints from "./pickupPoints";
import * as dropoffPoints from "./dropoffPoints";

export const {
  cleanSidebarStates,
  desktopSidebarState,
  mobileSidebarState,
} = sidebarStates;
export const {
  shipmentsFail,
  shipmentsRequest,
  shipmentsSuccess,
} = allShipments;
export const { loginUserFail, loginUserRequest, loginUserSuccess } = loginUser;

export const { addPickupPoint, removePickupPoint } = pickupPoints;
export const { addDropoffPoint, removeDropoffPoint } = dropoffPoints;
