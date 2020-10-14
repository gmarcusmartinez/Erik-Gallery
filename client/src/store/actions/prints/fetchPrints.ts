import { IPrint } from "interfaces";
import { PrintActionTypes } from "store/actions/types";

export const fetchPrintsStart = () => ({
  type: PrintActionTypes.FETCH_PRINTS_START,
});

export const success = (data: IPrint[]) => ({
  type: PrintActionTypes.FETCH_PRINTS_SUCCESS,
  payload: data,
});

export const failure = (message: string) => ({
  type: PrintActionTypes.FETCH_PRINTS_FAILURE,
  payload: message,
});
