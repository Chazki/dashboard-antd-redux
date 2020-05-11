import { SIDEBAR_STATE } from "../constants";

export const desktopSidebarState = () => {
  return {
    type: SIDEBAR_STATE.DESKTOP,
  };
};

export const mobileSidebarState = () => {
  return {
    type: SIDEBAR_STATE.MOBILE,
  };
};

export const cleanSidebarStates = () => {
  return {
    type: SIDEBAR_STATE.CLEAN,
  };
};
