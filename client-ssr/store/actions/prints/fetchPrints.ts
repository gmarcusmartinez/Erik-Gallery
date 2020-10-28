import prints from "api/prints";
import { PrintActionTypes } from "store/actions/types";

export const fetchPrints = () => async (dispatch) => {
  const { data } = await prints.get("/");
  dispatch({
    type: PrintActionTypes.FETCH_PRINTS_SUCCESS,
    payload: data,
  });
};
