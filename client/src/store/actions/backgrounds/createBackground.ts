import axios from "axios";
import {
  ModalActionTypes,
  BackgroundActionTypes,
  UploadActionTypes,
} from "store/actions/types";

export const createBackground = (imageData: any) => async (dispatch: any) => {
  if (!imageData) {
    const errors = [{ message: "Please select an image", field: "image" }];
    dispatch({
      type: BackgroundActionTypes.CREATE_BACKGROUND_FAILURE,
      payload: errors,
    });
    return;
  }

  try {
    dispatch({ type: BackgroundActionTypes.CREATE_BACKGROUND_REQUEST });

    const uploadConfig = await axios.get("/api/uploads");
    const ContentType = imageData.type;
    const headers = { headers: { ContentType } };
    await axios.put(uploadConfig.data.url, imageData, headers);

    const config = { headers: { "Content-Type": "application/json" } };
    const requestBody = { image: uploadConfig.data.key };
    const { data } = await axios.post("/api/backgrounds", requestBody, config);
    dispatch({
      type: BackgroundActionTypes.CREATE_BACKGROUND_SUCCESS,
      payload: data,
    });

    const successPayload = { displayModal: false };
    dispatch({ type: ModalActionTypes.TOGGLE_MODAL, payload: successPayload });
  } catch (err) {
    const errors = err.response.data.errors || err.message;
    dispatch({
      type: BackgroundActionTypes.CREATE_BACKGROUND_FAILURE,
      payload: errors,
    });
    return;
  }
};
