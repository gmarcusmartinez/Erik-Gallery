import axios from "axios";
import {
  ModalActionTypes,
  PrintActionTypes,
  UploadActionTypes,
} from "store/actions/types";

export const createPrint = (formData: any, imageData: any) => async (
  dispatch: any
) => {
  if (!imageData) {
    const errors = [{ message: "Please select an image", field: "image" }];
    dispatch({ type: UploadActionTypes.UPLOAD_FAILURE, payload: errors });
    return;
  }

  try {
    dispatch({ type: PrintActionTypes.CREATE_PRINT_REQUEST });

    const uploadConfig = await axios.get("/api/uploads");
    const ContentType = imageData.type;
    const headers = { headers: { ContentType } };
    await axios.put(uploadConfig.data.url, imageData, headers);

    const config = { headers: { "Content-Type": "application/json" } };
    const requestBody = { ...formData, mainImage: uploadConfig.data.key };
    const { data } = await axios.post("/api/prints", requestBody, config);
    dispatch({ type: PrintActionTypes.CREATE_PRINT_SUCCESS, payload: data });

    const successPayload = { displayModal: false };
    dispatch({ type: ModalActionTypes.TOGGLE_MODAL, payload: successPayload });
  } catch (err) {
    const errors = err.response.data.errors || err.message;
    dispatch({ type: PrintActionTypes.CREATE_PRINT_FAILURE, payload: errors });
    return;
  }
};
