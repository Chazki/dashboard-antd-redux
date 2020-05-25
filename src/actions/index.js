import * as sidebarStates from "./sidebarStates";
import * as allShipments from "./allShipments";
import * as loginUser from "./loginUser";
import * as pickupPoint from "./pickupPoint";
import * as dropoffPoints from "./dropoffPoints";
import * as selectKindOfVehicle from "./selectVehicle";
import * as getOneShipment from "./getOneShipment";

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
  resetPickupOption,
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
  resetDropoffOptionsSelected,
} = dropoffPoints;

export const {
  getOneShipmentFail,
  getOneShipmentRequest,
  getOneShipmentSuccess,
  getOneShipmentAddPackage,
  getOneShipmentRemovePackage,
  getOneShipmentUpdatePackages,
} = getOneShipment;

export const { selectVehicle, resetVehicle } = selectKindOfVehicle;
