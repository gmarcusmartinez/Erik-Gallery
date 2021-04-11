import { PrintActionTypes } from '../../types';

interface DeletePrintRequestAction {
  type: PrintActionTypes.DELETE_PRINT_REQUEST;
}
interface DeletePrintSuccessAction {
  type: PrintActionTypes.DELETE_PRINT_SUCCESS;
  payload: string;
}
interface DeletePrintFailureAction {
  type: PrintActionTypes.DELETE_PRINT_FAILURE;
  payload: string;
}
export type DeletePrintAction =
  | DeletePrintRequestAction
  | DeletePrintSuccessAction
  | DeletePrintFailureAction;
