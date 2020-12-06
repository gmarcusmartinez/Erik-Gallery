import zines from "api/zines";
import { ZineActionTypes } from "../types";

export const fetchZine = (id: string) => async (dispatch: any) => {
  try {
    dispatch({ type: ZineActionTypes.FETCH_ZINE_REQUEST });
    const { data } = await zines.get(`/${id}`);
    dispatch({ type: ZineActionTypes.FETCH_ZINE_SUCCESS, payload: data });
  } catch (e) {
    const errorResponse = e.response.data.errors;

    dispatch({
      type: ZineActionTypes.FETCH_ZINE_FAILURE,
      payload: errorResponse,
    });
  }
};
