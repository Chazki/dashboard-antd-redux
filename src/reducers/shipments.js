import { SHIPMENTS } from "../constants";

const initialState = {
  loading: false,
  filter: "all",
  status: "",
  message: "",
  data: [],
};

const allShipmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHIPMENTS.REQUEST:
      return {
        ...state,
        filter: action.filterShipmentState,
        loading: true,
      };
    case SHIPMENTS.SUCCESS:
      return {
        ...state,
        status: action.status,
        message: action.message,
        data: action.data,
        loading: false,
      };
    case SHIPMENTS.FAIL:
      return { ...state, loading: false };

    default:
      return state;
  }
};

// const initialStateMethods = {
//   openDrawer: false,
//   message: "",
//   errorMessage: "",
// };

// const shipmentsMethodsReducer = (state = initialStateMethods, action) => {
//   switch (action.type) {
//     case SHIPMENTS.OPEN_DRAWER:
//       return { ...state, openDrawer: !state.openDrawer };
//     case SHIPMENTS.ADD_SUCCESS:
//       return { ...state, message: action.payload };
//     case SHIPMENTS.REMOVE_SUCCESS:
//       return { ...state, message: action.payload };
//     case SHIPMENTS.ADD_FAIL:
//       return { ...state, errorMessage: action.payload };
//     case SHIPMENTS.REMOVE_FAIL:
//       return { ...state, errorMessage: action.payload };
//     default:
//       return state;
//   }
// };

export default allShipmentsReducer;
