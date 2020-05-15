import { DROPOFF_OPTIONS } from "../constants";

export const handleDrawerDropoffOption = () => {
  return {
    type: DROPOFF_OPTIONS.HANDLE_DRAWER,
  };
};

export const selectDropoffOption = (id) => {
  return {
    type: DROPOFF_OPTIONS.SELECT,
    id,
  };
};

export const deselectDropoffOption = (id) => {
  return {
    type: DROPOFF_OPTIONS.DESELECT,
    id,
  };
};

export const addDropoffOption = (point) => {
  return {
    type: DROPOFF_OPTIONS.ADD,
    point,
  };
};

export const editDropoffOption = (id) => {
  return {
    type: DROPOFF_OPTIONS.EDIT,
    id,
  };
};

export const updateDropoffOption = (id, changes) => {
  return {
    type: DROPOFF_OPTIONS.UPDATE,
    id,
    changes,
  };
};

export const cancelEditDropoffOption = () => {
  return {
    type: DROPOFF_OPTIONS.CANCEL_EDIT,
  };
};

export const removeDropoffOption = (id) => {
  return {
    type: DROPOFF_OPTIONS.REMOVE,
    id,
  };
};
