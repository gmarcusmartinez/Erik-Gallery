import zines from "api/zines";
import { ZineActionTypes } from "../types";

const { DELETE_ZINE_SUCCESS, DELETE_ZINE_FAILURE } = ZineActionTypes;

export const deleteZine = (id: string) => async (dispatch: any) => {
  try {
    dispatch({ type: ZineActionTypes.DELETE_ZINE_REQUEST });
    await zines.delete(`/${id}`);

    dispatch({ type: DELETE_ZINE_SUCCESS, payload: id });
  } catch (e) {
    const errorResponse = e;
    dispatch({ type: DELETE_ZINE_FAILURE, payload: errorResponse });
  }
};