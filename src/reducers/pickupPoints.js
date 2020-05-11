import { PICKUP_POINTS } from "../constants";

const initialState = [];

const pickupPointsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PICKUP_POINTS.ADD:
      return [...state, action.point];
    case PICKUP_POINTS.REMOVE:
      return state.filter(
        ({ lat, lng }) =>
          action.point.coordinates.lat !== lat &&
          action.point.coordinates.lng !== lng
      );
    default:
      return state;
  }
};

export default pickupPointsReducer;
