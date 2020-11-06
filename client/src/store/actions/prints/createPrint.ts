import axios from "axios";
import { ModalActionTypes, PrintActionTypes } from "store/actions/types";

export const createPrint = (formData: any, imageData: any) => async (
  dispatch: any
) => {
  const config = { headers: { "Content-Type": "application/json" } };

  try {
    dispatch({ type: PrintActionTypes.CREATE_PRINT_REQUEST });
    const ContentType = imageData.type;
    const headers = { headers: { ContentType } };

    const uploadConfig = await axios.get("/api/uploads");
    await axios.put(uploadConfig.data.url, imageData, headers);
    const { data } = await axios.post(
      "/api/prints",
      { ...formData, mainImage: uploadConfig.data.key },
      config
    );

    dispatch({ type: PrintActionTypes.CREATE_PRINT_SUCCESS, payload: data });
    const successPayload = { displayModal: false };

    dispatch({ type: ModalActionTypes.TOGGLE_MODAL, payload: successPayload });
  } catch (err) {
    dispatch({ type: PrintActionTypes.CREATE_PRINT_FAILURE });
  }
};
