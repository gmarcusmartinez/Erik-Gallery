import { IPrint, IError } from 'interfaces';
import { PrintActionTypes } from '../../types';

interface CreatePrintRequestAction {
  type: PrintActionTypes.CREATE_PRINT_REQUEST;
}
interface CreatePrintSuccessAction {
  type: PrintActionTypes.CREATE_PRINT_SUCCESS;
  payload: IPrint;
}
interface CreatePrintFailureAction {
  type: PrintActionTypes.CREATE_PRINT_FAILURE;
  payload: IError[];
}
export type CreatePrintAction =
  | CreatePrintRequestAction
  | CreatePrintSuccessAction
  | CreatePrintFailureAction;
