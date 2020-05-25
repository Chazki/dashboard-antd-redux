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
      name: "testttt",
      pickupInfo: {
        direction: "Av Vitacura 4200, Vitacura, Región Metropolitana, Chile",
        landMark: "dsfsdfasd",
        location: {
          type: "Point",
          coordinates: [-70.5896298, -33.3992084],
        },
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
          { id: new Random().number, ...action.point },
        ],
      };
    case PICKUP_OPTIONS.REMOVE:
      return { ...action.point };
    default:
      return state;
  }
};

export default pickupPointsReducer;
