import orders from 'api/order';
import { Dispatch } from 'redux';
import { AdminOrdertActionTypes } from 'state';

const { GET_ORDERS_FAILURE, GET_ORDERS_SUCCESS } = AdminOrdertActionTypes;

export const adminFetchOrders = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: AdminOrdertActionTypes.GET_ORDERS_REQUEST });
    const { data } = await orders.get('/');
    dispatch({ type: GET_ORDERS_SUCCESS, payload: data });
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({ type: GET_ORDERS_FAILURE, payload: errorResponse });
  }
};
