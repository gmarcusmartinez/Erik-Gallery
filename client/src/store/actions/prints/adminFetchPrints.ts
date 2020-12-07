import prints from "api/prints";
import { PrintActionTypes } from "../types";

export const adminFetchPrints = () => async (dispatch: any) => {
  try {
    dispatch({ type: PrintActionTypes.ADMIN_FETCH_PRINTS_REQUEST });
    const { data } = await prints.get(`/1/admin`);
    console.log(data);
    dispatch({
      type: PrintActionTypes.ADMIN_FETCH_PRINTS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({
      type: PrintActionTypes.ADMIN_FETCH_PRINTS_FAILURE,
      payload: errorResponse,
    });
  }
};
