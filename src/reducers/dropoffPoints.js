import { DROPOFF_POINTS } from "../constants";

const initialState = [];

const dropoffPointsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DROPOFF_POINTS.ADD:
      return [...state, action.point];
    case DROPOFF_POINTS.REMOVE:
      return state.filter(
        ({ lat, lng }) => action.point.lat !== lat && action.point.lng !== lng
      );
    default:
      return state;
  }
};

export default dropoffPointsReducer;
