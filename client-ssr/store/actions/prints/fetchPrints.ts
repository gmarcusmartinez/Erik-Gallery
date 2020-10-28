import prints from "api/prints";
import { PrintActionTypes } from "store/actions/types";

export const fetchPrintsStart = () => async (dispatch) => {
  try {
    dispatch({ type: PrintActionTypes.FETCH_PRINTS_REQUEST });
    const { data } = await prints.get("/");
    dispatch({ type: PrintActionTypes.FETCH_PRINTS_SUCCESS, payload: data });
  } catch (e) {
    const errorResponse = e.response.data.message;
    dispatch({
      type: PrintActionTypes.FETCH_PRINTS_REQUEST,
      payload: e.response && errorResponse ? errorResponse : e.message,
    });
  }
};
