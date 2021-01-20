import orders from 'api/order';
import history from 'core/history';
import { OrdertActionTypes } from 'store/actions/types';
import { CartActionTypes } from 'store/actions/types';

const { UPDATE_ORDER_FAILURE, UPDATE_ORDER_SUCCESS } = OrdertActionTypes;

export const updateOrder = (id: string, formData: any) => async (
  dispatch: any
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
