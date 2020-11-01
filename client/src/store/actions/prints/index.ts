import axios from "axios";
import { IPrint } from "../../../interfaces";
import { PrintActionTypes } from "../../../store/actions/types";

export const fetchPrintsStart = () => ({
  type: PrintActionTypes.FETCH_PRINTS_REQUEST,
});

// interface fetchPrintsDataResponse {
//   data: IPrint[];
//   pagination: { next: {}; prev: {} };
//   count: number;
// }

export const fetchPrintsSuccess = (items: IPrint[]) => ({
  type: PrintActionTypes.FETCH_PRINTS_SUCCESS,
  payload: items,
});

export const fetchPrintsFailure = (errors: any) => ({
  type: PrintActionTypes.FETCH_PRINTS_FAILURE,
  payload: errors,
});

export const deletePrintsStart = (id: string) => ({
  type: PrintActionTypes.DELETE_PRINT_REQUEST,
  payload: id,
});

export const deletePrintsSuccess = (id: string) => ({
  type: PrintActionTypes.DELETE_PRINT_SUCCESS,
  payload: id,
});

export const deletePrintsFailure = (errors: any) => ({
  type: PrintActionTypes.DELETE_PRINT_FAILURE,
  payload: errors,
});

export const createPrint = (formData: any) => async (dispatch: any) => {
  const { description, size, price, inStock } = formData;
  const config = { headers: { "Content-Type": "application/json" } };

  try {
    dispatch({ type: PrintActionTypes.CREATE_PRINT_REQUEST });
    const uploadConfig = await axios.get("/api/upload");
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
