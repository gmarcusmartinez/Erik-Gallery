import prints from "api/prints";
import { PrintActionTypes } from "../types";

export const deletePrint = (id: string) => async (dispatch: any) => {
  try {
    dispatch({ type: PrintActionTypes.DELETE_PRINT_REQUEST });
    await prints.delete(`/${id}`);

    dispatch({
      type: PrintActionTypes.DELETE_PRINT_SUCCESS,
      payload: id,
    });
  } catch (e) {
    const errorResponse = e;

    dispatch({
      type: PrintActionTypes.DELETE_PRINT_FAILURE,
      payload: errorResponse,
    });
  }
};
