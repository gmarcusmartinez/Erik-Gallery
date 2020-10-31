import { PrintActionTypes } from "store/actions/types";

// export const fetchPrintsStart = () => async (dispatch: any) => {
//   try {
//     dispatch({ type: PrintActionTypes.FETCH_PRINTS_REQUEST });
//     const { data } = await prints.get("/");
//     dispatch({ type: PrintActionTypes.FETCH_PRINTS_SUCCESS, payload: data });
//   } catch (e) {
//     const errorResponse = e.response.data.message;
//     dispatch({
//       type: PrintActionTypes.FETCH_PRINTS_REQUEST,
//       payload: e.response && errorResponse ? errorResponse : e.message,
//     });
//   }
// };

export const fetchPrintsStart = () => ({
  type: PrintActionTypes.FETCH_PRINTS_REQUEST,
});

export const fetchPrintsSuccess = (prints: any) => ({
  type: PrintActionTypes.FETCH_PRINTS_SUCCESS,
  payload: prints,
});

export const fetchPrintsFailure = (errors: any) => ({
  type: PrintActionTypes.FETCH_PRINTS_FAILURE,
  payload: errors,
});
