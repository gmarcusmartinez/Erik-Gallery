import axios from "axios";
import { ModalActionTypes, ZineActionTypes } from "store/actions/types";

export const addZineImage = (id: string, imageData: any) => async (
  dispatch: any
) => {
  if (!imageData) {
    const errors = [{ message: "Please select an image", field: "image" }];
    dispatch({
      type: ZineActionTypes.ADD_ZINE_IMG_FAILURE,
      payload: errors,
    });
    return;
  }

  try {
    dispatch({ type: ZineActionTypes.ADD_ZINE_IMG_REQUEST });
    const ContentType = imageData.type;
    const headers = { headers: { ContentType } };

    const uploadConfig = await axios.get("/api/uploads");
    await axios.put(uploadConfig.data.url, imageData, headers);

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.patch(
      `/api/zines/${id}`,
      { image: uploadConfig.data.key },
      config
    );

    dispatch({ type: ZineActionTypes.ADD_ZINE_IMG_SUCCESS, payload: data });
    const success = { displayModal: false };
    dispatch({ type: ModalActionTypes.TOGGLE_MODAL, payload: success });
  } catch (err) {
    const errors = err.response.data.errors || err.message;
    dispatch({ type: ZineActionTypes.ADD_ZINE_IMG_FAILURE, payload: errors });
    return;
  }
};
