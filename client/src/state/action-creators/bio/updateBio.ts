import bio from 'api/bio';
import { Dispatch } from 'redux';
import { ModalActionTypes, BioActionTypes } from 'state';

export const updateBio = (formData: any, id: string) => async (
  dispatch: Dispatch
) => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    dispatch({ type: BioActionTypes.UPDATE_BIO_REQUEST });
    const { data } = await bio.put(`${id}`, formData, config);
    dispatch({ type: BioActionTypes.UPDATE_BIO_SUCCESS, payload: data });

    const success = { displayModal: false };
    dispatch({ type: ModalActionTypes.TOGGLE_MODAL, payload: success });
  } catch (err) {
    const errors = err.response.data.errors || err.message;
    dispatch({ type: BioActionTypes.UPDATE_BIO_FAILURE, payload: errors });
    return;
  }
};
