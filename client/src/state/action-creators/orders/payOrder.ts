// import orders from "api/order";
import { Dispatch } from 'redux';
// import history from "core/history";
import { OrdertActionTypes } from 'state';

const { PAY_ORDER_SUCCESS, PAY_ORDER_FAILURE } = OrdertActionTypes;

export const payOrder = (orderId: any, paymentRes: any) => async (
  dispatch: Dispatch
) => {
  // const config = { headers: { "Content-Type": "application/json" } };
  try {
    dispatch({ type: OrdertActionTypes.PAY_ORDER_REQUEST });
    // const { data } = await orders.put(`/${orderId}/pay`, paymentRes, config);
    dispatch({ type: PAY_ORDER_SUCCESS });
    // history.push("/order-success");
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({ type: PAY_ORDER_FAILURE, payload: errorResponse });
  }
};
