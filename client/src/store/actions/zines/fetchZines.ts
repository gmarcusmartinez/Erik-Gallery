import zines from "api/zines";
import { ZineActionTypes } from "../types";

export const fetchZines = (page: Number) => async (dispatch: any) => {
  try {
    dispatch({ type: ZineActionTypes.FETCH_ZINES_REQUEST });
    const { data } = await zines.get(`/?page=${page}`);
    dispatch({ type: ZineActionTypes.FETCH_ZINES_SUCCESS, payload: data });
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({
      type: ZineActionTypes.FETCH_ZINES_FAILURE,
      payload: errorResponse,
    });
  }
};
