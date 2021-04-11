import bio from 'api/bio';
import { IBioForm } from 'interfaces/forms';
import { Dispatch } from 'redux';
import { ModalActionTypes, BioActionTypes } from 'state';
import { UpdateBioAction } from 'state/actions/bio';
import { ModalAction } from 'state/actions/modal';

export const updateBio = (formData: IBioForm, id: string) => async (
  dispatch: Dispatch<UpdateBioAction | ModalAction>
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
