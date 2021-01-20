import orders from 'api/order';
import history from 'core/history';
import { Dispatch } from 'redux';
import { OrdertActionTypes } from 'state';
import { CartActionTypes } from 'state';

const { UPDATE_ORDER_FAILURE, UPDATE_ORDER_SUCCESS } = OrdertActionTypes;

export const updateOrder = (id: string, formData: any) => async (
  dispatch: Dispatch
) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  try {
    dispatch({ type: OrdertActionTypes.UPDATE_ORDER_REQUEST });
    const { data } = await orders.put(`/${id}`, formData, config);
    dispatch({ type: UPDATE_ORDER_SUCCESS, payload: data });
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({ type: UPDATE_ORDER_FAILURE, payload: errorResponse });
    dispatch({ type: CartActionTypes.CLEAR_CART });
    history.push('/soldout');
  }
};
