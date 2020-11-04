import prints from "api/prints";
import { PrintActionTypes } from "../types";

export const fetchPrint = (id: string) => async (dispatch: any) => {
  try {
    dispatch({ type: PrintActionTypes.FETCH_PRINT_REQUEST });
    const { data } = await prints.get(`/${id}`);
    dispatch({ type: PrintActionTypes.FETCH_PRINT_SUCCESS, payload: data });
  } catch (e) {
    const errorResponse = e.response.data.errors;

    dispatch({
      type: PrintActionTypes.FETCH_PRINT_FAILURE,
      payload: errorResponse,
    });
  }
};