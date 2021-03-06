import axios from 'axios';
import { IPrintForm } from 'interfaces/forms';
import { Dispatch } from 'redux';
import { ModalActionTypes, PrintActionTypes } from 'state';
import { CreatePrintAction } from 'state/actions/prints';
import { ModalAction } from 'state/actions/modal';

export const createPrint = (
  formData: IPrintForm,
  imageData: { type: string } | null
) => async (dispatch: Dispatch<CreatePrintAction | ModalAction>) => {
  if (!imageData) {
    const errors = [{ message: 'Please select an image', field: 'image' }];
    dispatch({ type: PrintActionTypes.CREATE_PRINT_FAILURE, payload: errors });
    return;
  }

  try {
    dispatch({ type: PrintActionTypes.CREATE_PRINT_REQUEST });

    const uploadConfig = await axios.get('/api/uploads');
    const ContentType = imageData.type;
    const headers = { headers: { ContentType } };
    await axios.put(uploadConfig.data.url, imageData, headers);
    console.log(imageData);
    const config = { headers: { 'Content-Type': 'application/json' } };
    const requestBody = { ...formData, mainImage: uploadConfig.data.key };
    const { data } = await axios.post('/api/prints', requestBody, config);
    dispatch({ type: PrintActionTypes.CREATE_PRINT_SUCCESS, payload: data });

    const successPayload = { displayModal: false };
    dispatch({ type: ModalActionTypes.TOGGLE_MODAL, payload: successPayload });
  } catch (err) {
    const errors = err.response.data.errors || err.message;
    dispatch({ type: PrintActionTypes.CREATE_PRINT_FAILURE, payload: errors });
    return;
  }
};
