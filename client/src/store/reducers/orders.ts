import { AnyAction } from "redux";
import { OrdertActionTypes } from "../actions/types";

const initialState = {
  loading: false,
  selectedItem: null,
  errors: null,
};

export const orders = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case OrdertActionTypes.CREATE_ORDER_REQUEST:
      return { ...state, loading: true };
    case OrdertActionTypes.CREATE_ORDER_SUCCESS:
      return { ...state, loading: false, selectedItem: payload };
    case OrdertActionTypes.CREATE_ORDER_FAILURE:
      return { ...state, errors: payload };
    default:
      return state;
  }
};
