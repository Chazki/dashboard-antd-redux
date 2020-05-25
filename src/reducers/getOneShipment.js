import { GET_ONE_SHIPMENT } from "../constants";
import Random from "../lib/GenerateId";

const initialState = {
  loading: false,
  error: "",
  data: {
    travelPolyline: "",
    pickupInfo: null,
    packages: [],
    packagesSelected: [],
  },
};

const getOneShipmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_SHIPMENT.REMOVE_PACKAGE:
      return {
        ...state,
        data: {
          ...state.data,
          packagesSelected: action.packagesSelected,
        },
      };
    case GET_ONE_SHIPMENT.ADD_PACKAGE:
      return {
        ...state,
        data: {
          ...state.data,
          packagesSelected: action.packagesSelected,
        },
      };
    case GET_ONE_SHIPMENT.UPDATE_PACKAGE:
      return {
        ...state,
        data: {
          ...state.data,
          packages: {
            ...state.data.packages,
            ...action.allPackages,
          },
          packagesSelected: {
            ...state.data.packagesSelected,
            ...action.packagesSelected,
          },
        },
      };
    case GET_ONE_SHIPMENT.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ONE_SHIPMENT.SUCCESS: {
      const packagesWithId = action.data.packages.map((option) => ({
        id: new Random().number,
        ...option,
      }));
      return {
        ...state,
        loading: false,
        data: {
          ...action.data,
          packages: packagesWithId,
          packagesSelected: packagesWithId,
        },
      };
    }
    case GET_ONE_SHIPMENT.FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default getOneShipmentReducer;
