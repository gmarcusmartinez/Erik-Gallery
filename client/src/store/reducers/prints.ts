import { AnyAction } from "redux";
import { PrintActionTypes } from "../../store/actions/types";
import { IPrint } from "../../interfaces";

const initialState = {
  loading: true,
  pagination: null,
  items: {},
};

export const prints = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case PrintActionTypes.CREATE_PRINT_SUCCESS:
      return { ...state, items: { ...state.items, [payload._id]: payload } };

    case PrintActionTypes.FETCH_PRINTS_REQUEST:
      return { ...state, loading: true };

    case PrintActionTypes.FETCH_PRINTS_SUCCESS:
      return {
        ...state,
        loading: false,
        pagination: payload.pagination,
        items: {
          ...payload.reduce((newState: any, print: IPrint) => {
            newState[print._id] = print;
            return newState;
          }, {}),
        },
      };

    case PrintActionTypes.DELETE_PRINT_SUCCESS:
      const newItems: any = { ...state.items };
      delete newItems[payload];
      return { ...state, items: newItems };

    default:
      return state;
  }
};
