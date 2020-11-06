import { AnyAction } from "redux";
import { PrintActionTypes } from "../../store/actions/types";
import { IPrint } from "interfaces";

const initialState = {
  loading: true,
  count: null,
  pagination: null,
  items: {},
  selectedItem: null,
};

export const prints = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case PrintActionTypes.CREATE_PRINT_SUCCESS:
      return {
        ...state,
        items: { [payload._id]: payload, ...state.items },
        loading: false,
      };

    case PrintActionTypes.UPDATE_PRINT_SUCCESS:
      let oldItems: any = { ...state.items };
      delete oldItems[payload._id];
      return {
        ...state,
        items: { [payload._id]: payload, ...oldItems },
        loading: false,
        selectedItem: null,
      };

    case PrintActionTypes.CREATE_PRINT_REQUEST:
    case PrintActionTypes.FETCH_PRINT_REQUEST:
    case PrintActionTypes.FETCH_PRINTS_REQUEST:
    case PrintActionTypes.UPDATE_PRINT_REQUEST:
      return { ...state, loading: true };

    case PrintActionTypes.FETCH_PRINT_SUCCESS:
      return { ...state, loading: false, selectedItem: payload };

    case PrintActionTypes.FETCH_PRINTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: {
          ...payload.reduce((newState: any, print: IPrint) => {
            newState[print._id] = print;
            return newState;
          }, {}),
        },
      };

    case PrintActionTypes.DELETE_PRINT_SUCCESS:
      let newItems: any = { ...state.items };
      delete newItems[payload];
      return { ...state, items: newItems };

    default:
      return state;
  }
};
