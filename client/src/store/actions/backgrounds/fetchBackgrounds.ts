import backgrounds from "api/backgrounds";
import { BackgroundActionTypes } from "../types";

export const fetchBackgrounds = () => async (dispatch: any) => {
  try {
    dispatch({ type: BackgroundActionTypes.FETCH_BACKGROUND_REQUEST });
    const { data } = await backgrounds.get(`/`);
    dispatch({
      type: BackgroundActionTypes.FETCH_BACKGROUND_SUCCESS,
      payload: data,
    });
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({
      type: BackgroundActionTypes.FETCH_BACKGROUND_FAILURE,
      payload: errorResponse,
    });
  }
};
