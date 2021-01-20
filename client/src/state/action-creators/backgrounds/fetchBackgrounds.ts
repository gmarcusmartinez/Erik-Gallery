import backgrounds from 'api/backgrounds';
import { Dispatch } from 'redux';
import { BackgroundActionTypes } from 'state';

export const fetchBackgrounds = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: BackgroundActionTypes.FETCH_BACKGROUNDS_REQUEST });
    const { data } = await backgrounds.get(`/`);
    dispatch({
      type: BackgroundActionTypes.FETCH_BACKGROUNDS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({
      type: BackgroundActionTypes.FETCH_BACKGROUNDS_FAILURE,
      payload: errorResponse,
    });
  }
};
