import backgrounds from 'api/backgrounds';
import { Dispatch } from 'redux';
import { BackgroundActionTypes } from 'state';

export const deleteBackground = (id: string) => async (dispatch: Dispatch) => {
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
