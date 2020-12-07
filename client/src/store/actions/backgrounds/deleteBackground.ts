import backgrounds from "api/backgrounds";
import { BackgroundActionTypes } from "../types";

export const deleteBackground = (id: string) => async (dispatch: any) => {
  try {
    dispatch({ type: BackgroundActionTypes.DELETE_BACKGROUND_REQUEST });
    await backgrounds.delete(`/${id}`);

    dispatch({
      type: BackgroundActionTypes.DELETE_BACKGROUND_SUCCESS,
      payload: id,
    });
  } catch (e) {
    const errorResponse = e;

    dispatch({
      type: BackgroundActionTypes.DELETE_BACKGROUND_FAILURE,
      payload: errorResponse,
    });
  }
};
