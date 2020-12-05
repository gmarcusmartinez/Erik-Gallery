import axios from "axios";
import { ModalActionTypes, ZineActionTypes } from "store/actions/types";

export const updateZine = (
  formData: any,
  id: string,
  imageData?: any
) => async (dispatch: any) => {
  const config = { headers: { "Content-Type": "application/json" } };

  try {
    if (imageData) {
      dispatch({ type: ZineActionTypes.UPDATE_ZINE_REQUEST });
      const ContentType = imageData.type;
      const headers = { headers: { ContentType } };

      const uploadConfig = await axios.get("/api/uploads");
      await axios.put(uploadConfig.data.url, imageData, headers);

      const { data } = await axios.put(
        `/api/zines/${id}`,
        { ...formData, image: uploadConfig.data.key },
        config
      );
      dispatch({ type: ZineActionTypes.UPDATE_ZINE_SUCCESS, payload: data });

      const success = { displayModal: false };
      dispatch({ type: ModalActionTypes.TOGGLE_MODAL, payload: success });
    } else {
      dispatch({ type: ZineActionTypes.UPDATE_ZINE_REQUEST });
      const { data } = await axios.put(`/api/zines/${id}`, formData, config);
      dispatch({ type: ZineActionTypes.UPDATE_ZINE_SUCCESS, payload: data });

      const success = { displayModal: false };
      dispatch({ type: ModalActionTypes.TOGGLE_MODAL, payload: success });
    }
  } catch (err) {
    const errors = err.response.data.errors || err.message;
    dispatch({ type: ZineActionTypes.UPDATE_ZINE_FAILURE, payload: errors });
    return;
  }
};
