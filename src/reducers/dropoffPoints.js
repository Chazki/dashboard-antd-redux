import { DROPOFF_OPTIONS } from "../constants";
import Random from "../lib/GenerateId";

const initialState = {
  openCreateDrawer: false,
  openEditDrawer: false,
  idOnEdit: undefined,
  selectedList: [],
  options: [
    {
      id: new Random().number,
      name: "test",
      observations: "test",
      formattedAddress: "Av. Samuel Alcazar 620, Rímac 15094, Perú",
      coordinates: {
        lat: -12.028713,
        lng: -77.0308648,
      },
    },
  ],
};

const dropoffPointsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DROPOFF_OPTIONS.HANDLE_DRAWER:
      return {
        ...state,
        openCreateDrawer: !state.openCreateDrawer,
      };
    case DROPOFF_OPTIONS.SELECT:
      return {
        ...state,
        selectedList: [
          ...state.selectedList,
          state.options.find(({ id }) => id === action.id),
        ],
      };
    case DROPOFF_OPTIONS.DESELECT:
      return {
        ...state,
        selectedList: state.selectedList.filter(({ id }) => id !== action.id),
      };
    case DROPOFF_OPTIONS.ADD:
      return {
        ...state,
        options: [
          ...state.options,
          { ...action.point, id: new Random().number },
        ],
      };
    case DROPOFF_OPTIONS.REMOVE:
      return {
        ...state,
        options: state.options.filter(({ id }) => id !== action.id),
      };
    case DROPOFF_OPTIONS.EDIT:
      return { ...state, idOnEdit: action.id, openEditDrawer: true };
    case DROPOFF_OPTIONS.CANCEL_EDIT:
      return { ...state, openEditDrawer: false };
    case DROPOFF_OPTIONS.UPDATE:
      return {
        ...state,
        openEditDrawer: false,
        options: state.options.map((option) => {
          if (option.id === action.id)
            return {
              ...option,
              ...action.changes,
            };
          return option;
        }),
        selectedList: state.selectedList.map((option) => {
          if (option.id === action.id)
            return {
              ...option,
              ...action.changes,
            };
          return option;
        }),
      };
    default:
      return state;
  }
};

export default dropoffPointsReducer;
