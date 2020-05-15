import * as sidebarStates from "./sidebarStates";
import * as allShipments from "./allShipments";
import * as loginUser from "./loginUser";
import * as pickupPoint from "./pickupPoint";
import * as dropoffPoints from "./dropoffPoints";
import * as selectKindOfVehicle from "./selectVehicle";

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

export const {
  handleDrawerPickupOption,
  addPickupOption,
  editPickupOption,
  removePickupOption,
  selectPickupOption,
} = pickupPoint;

export const {
  handleDrawerDropoffOption,
  selectDropoffOption,
  deselectDropoffOption,
  addDropoffOption,
  editDropoffOption,
  updateDropoffOption,
  removeDropoffOption,
  cancelEditDropoffOption,
} = dropoffPoints;

export const { selectVehicle } = selectKindOfVehicle;
