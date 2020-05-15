import { PICKUP_OPTIONS } from "../constants";
import Random from "../lib/GenerateId";

const initialState = {
  openDrawer: false,
  selected: {
    id: -1,
  },
  options: [
    {
      id: new Random().number,
      name: "test",
      observations: "test",
      formattedAddress: "Av Jose Larco 453-497, Miraflores 15074, Perú",
      coordinates: {
        lat: -12.1219256,
        lng: -77.0306557,
      },
    },
  ],
};

const pickupPointsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PICKUP_OPTIONS.HANDLE_DRAWER:
      return {
        ...state,
        openDrawer: !state.openDrawer,
      };
    case PICKUP_OPTIONS.SELECT: {
      if (action.id === -1)
        return {
          ...state,
          selected: { id: -1 },
        };
      else
        return {
          ...state,
          selected: state.options.find(({ id }) => id === action.id),
        };
    }
    case PICKUP_OPTIONS.ADD:
      return {
        ...state,
        options: [
          ...state.options,
          { ...action.point, id: new Random().number },
        ],
      };
    case PICKUP_OPTIONS.REMOVE:
      return { ...action.point };
    default:
      return state;
  }
};

export default pickupPointsReducer;
