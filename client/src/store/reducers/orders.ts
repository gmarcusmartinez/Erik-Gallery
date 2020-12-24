import { AnyAction } from "redux";
import { OrdertActionTypes, AdminOrdertActionTypes } from "../actions/types";

const initialState = {
  loading: false,
  items: [],
  errors: null,
};

export const orders = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case AdminOrdertActionTypes.GET_ORDERS_REQUEST:
    case OrdertActionTypes.CREATE_ORDER_REQUEST:
      return { ...state, loading: true };
    case OrdertActionTypes.CREATE_ORDER_SUCCESS:
      return { ...state, loading: false, selectedItem: payload };
    case OrdertActionTypes.CREATE_ORDER_FAILURE:
      return { ...state, errors: payload };
    case AdminOrdertActionTypes.GET_ORDERS_SUCCESS:
      return { ...state, errors: null, items: payload };

    default:
      return state;
  }
};
