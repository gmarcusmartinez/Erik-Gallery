import orders from 'api/order';
import history from 'core/history';
import { Dispatch } from 'redux';
import { OrdertActionTypes } from 'state';
import { CartActionTypes } from 'state';

const { CREATE_ORDER_FAILURE, CREATE_ORDER_SUCCESS } = OrdertActionTypes;

export const createOrder = (formData: any) => async (dispatch: Dispatch) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  try {
    dispatch({ type: OrdertActionTypes.CREATE_ORDER_REQUEST });
    const { data } = await orders.post('/', formData, config);
    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({ type: CREATE_ORDER_FAILURE, payload: errorResponse });
    dispatch({ type: CartActionTypes.CLEAR_CART });
    history.push('/soldout');
  }
};
