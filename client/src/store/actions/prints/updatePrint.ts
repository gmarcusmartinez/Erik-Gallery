import axios from "axios";
import { ModalActionTypes, PrintActionTypes } from "store/actions/types";

export const updatePrint = (
  formData: any,
  id: string,
  imageData?: any
) => async (dispatch: any) => {
  const config = { headers: { "Content-Type": "application/json" } };

  try {
    if (imageData) {
      dispatch({ type: PrintActionTypes.UPDATE_PRINT_REQUEST });
      const ContentType = imageData.type;
      const headers = { headers: { ContentType } };

      const uploadConfig = await axios.get("/api/uploads");
      await axios.put(uploadConfig.data.url, imageData, headers);

      const { data } = await axios.put(
        `/api/prints/${id}`,
        { ...formData, image: uploadConfig.data.key },
        config
      );
      dispatch({ type: PrintActionTypes.UPDATE_PRINT_SUCCESS, payload: data });

      const success = { displayModal: false };
      dispatch({ type: ModalActionTypes.TOGGLE_MODAL, payload: success });
    } else {
      dispatch({ type: PrintActionTypes.UPDATE_PRINT_REQUEST });
      const { data } = await axios.put(`/api/prints/${id}`, formData, config);
      dispatch({ type: PrintActionTypes.UPDATE_PRINT_SUCCESS, payload: data });

      const success = { displayModal: false };
      dispatch({ type: ModalActionTypes.TOGGLE_MODAL, payload: success });
    }
  } catch (err) {
    const errors = err.response.data.errors || err.message;
    dispatch({ type: PrintActionTypes.UPDATE_PRINT_FAILURE, payload: errors });
    return;
  }
};
