import { IPrint, IError } from 'interfaces';
import { PrintActionTypes } from '../../types';

interface UpdatePrintRequestAction {
  type: PrintActionTypes.UPDATE_PRINT_REQUEST;
}
interface UpdatePrintSuccessAction {
  type: PrintActionTypes.UPDATE_PRINT_SUCCESS;
  payload: IPrint;
}
interface UpdatePrintFailureAction {
  type: PrintActionTypes.UPDATE_PRINT_FAILURE;
  payload: IError[];
}
export type UpdatePrintAction =
  | UpdatePrintRequestAction
  | UpdatePrintSuccessAction
  | UpdatePrintFailureAction;
