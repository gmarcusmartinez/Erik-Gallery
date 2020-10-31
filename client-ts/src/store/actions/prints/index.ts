import { PrintActionTypes } from "store/actions/types";

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
