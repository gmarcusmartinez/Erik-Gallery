import axios from "axios";
import { PrintActionTypes } from "store/actions/types";

export const createPrint = (formData: any) => async (dispatch: any) => {
  const { description, size, price, inStock } = formData;
  const config = { headers: { "Content-Type": "application/json" } };

  try {
    dispatch({ type: PrintActionTypes.CREATE_PRINT_REQUEST });
    const uploadConfig = await axios.get("/api/uploads");

    await axios.put(uploadConfig.data.url, formData.image, {
      headers: { ContentType: formData.image.type },
    });

    const { data } = await axios.post(
      "/api/prints",
      {
        description,
        size,
        price,
        inStock,
        image: uploadConfig.data.key,
      },
      config
    );
    dispatch({ type: PrintActionTypes.CREATE_PRINT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: PrintActionTypes.CREATE_PRINT_FAILURE });
  }
};
