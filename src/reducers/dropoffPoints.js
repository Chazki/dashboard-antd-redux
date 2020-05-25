import { DROPOFF_OPTIONS } from "../constants";
import Random from "../lib/GenerateId";

const initialState = {
  openCreateDrawer: false,
  openEditDrawer: false,
  idOnEdit: -1,
  selectedList: [],
  options: [
    {
      id: new Random().number,
      productName: "test",
      dropoffInfo: {
        direction: "Av Vitacura 4200, Vitacura, Región Metropolitana, Chile",
        landMark: "dsfsdf",
        location: {
          type: "Point",
          coordinates: [-70.5896298, -33.3992084],
        },
      },
    },
    {
      id: new Random().number,
      productName: "test2",
      dropoffInfo: {
        direction: "Av Vitacura 4200, Vitacura, Región Metropolitana, Chile",
        landMark: "aasasdasdsad",
        location: {
          type: "Point",
          coordinates: [-70.5896298, -33.3992084],
        },
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
          { id: new Random().number, ...action.point },
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
      return { ...state, openEditDrawer: false, idOnEdit: -1 };
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
