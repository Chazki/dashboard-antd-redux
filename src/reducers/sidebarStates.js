import { SIDEBAR_STATE } from "../constants";

const initialState = {
  desktop: false,
  mobile: false,
};

const sidebarStatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIDEBAR_STATE.DESKTOP:
      return { ...state, desktop: !state.desktop };
    case SIDEBAR_STATE.MOBILE:
      return { ...state, mobile: !state.mobile };
    default:
      return state;
  }
};

export default sidebarStatesReducer;
