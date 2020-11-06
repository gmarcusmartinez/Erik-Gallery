import { AnyAction } from "redux";
import { PrintActionTypes } from "../../store/actions/types";

const initialState = {
  loading: true,
  count: null,
  pagination: null,
  items: [],
  selectedItem: null,
};

export const prints = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case PrintActionTypes.CREATE_PRINT_SUCCESS:
      return { ...state, items: [payload, ...state.items], loading: false };

    case PrintActionTypes.UPDATE_PRINT_SUCCESS:
      const oldItems = state.items.filter(({ _id }) => _id !== payload._id);
      return { ...state, items: [payload, ...oldItems] };

    case PrintActionTypes.CREATE_PRINT_REQUEST:
    case PrintActionTypes.FETCH_PRINT_REQUEST:
    case PrintActionTypes.FETCH_PRINTS_REQUEST:
    case PrintActionTypes.UPDATE_PRINT_REQUEST:
      return { ...state, loading: true };

    case PrintActionTypes.FETCH_PRINT_SUCCESS:
      return { ...state, loading: false, selectedItem: payload };

    case PrintActionTypes.FETCH_PRINTS_SUCCESS:
      return { ...state, loading: false, items: payload };

    case PrintActionTypes.DELETE_PRINT_SUCCESS:
      const newItems = state.items.filter(({ _id }) => _id !== payload);
      return { ...state, items: newItems };

    default:
      return state;
  }
};
