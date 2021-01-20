import orders from 'api/order';
import history from 'core/history';
import { OrdertActionTypes } from 'store/actions/types';
import { CartActionTypes } from 'store/actions/types';

const { CREATE_ORDER_FAILURE, CREATE_ORDER_SUCCESS } = OrdertActionTypes;

export const createOrder = (formData: any) => async (dispatch: any) => {
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
