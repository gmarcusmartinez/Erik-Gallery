import axios from 'axios';
import { Dispatch } from 'redux';
import { ModalActionTypes, ZineActionTypes } from 'state';

export const createZine = (
  formData: any,
  imageData: { type: string } | null
) => async (dispatch: Dispatch) => {
  if (!imageData) {
    const errors = [{ message: 'Please select an image', field: 'image' }];
    dispatch({ type: ZineActionTypes.CREATE_ZINE_FAILURE, payload: errors });
    return;
  }

  try {
    dispatch({ type: ZineActionTypes.CREATE_ZINE_REQUEST });
    const uploadConfig = await axios.get('/api/uploads');
    const ContentType = imageData.type;
    const headers = { headers: { ContentType } };
    await axios.put(uploadConfig.data.url, imageData, headers);

    const config = { headers: { 'Content-Type': 'application/json' } };
    const requestBody = { ...formData, mainImage: uploadConfig.data.key };
    const { data } = await axios.post('/api/zines', requestBody, config);
    dispatch({ type: ZineActionTypes.CREATE_ZINE_SUCCESS, payload: data });

    const successPayload = { displayModal: false };
    dispatch({ type: ModalActionTypes.TOGGLE_MODAL, payload: successPayload });
  } catch (err) {
    const errors = err.response.data.errors || err.message;
    dispatch({ type: ZineActionTypes.CREATE_ZINE_FAILURE, payload: errors });
    return;
  }
};
