import { IPrint, IError } from 'interfaces';
import { PrintActionTypes } from '../../types';

interface FetchPrintRequestAction {
  type: PrintActionTypes.FETCH_PRINT_REQUEST;
}
interface FetchPrintSuccessAction {
  type: PrintActionTypes.FETCH_PRINT_SUCCESS;
  payload: IPrint;
}
interface FetchPrintFailureAction {
  type: PrintActionTypes.FETCH_PRINT_FAILURE;
  payload: IError[];
}
export type FetchPrintAction =
  | FetchPrintRequestAction
  | FetchPrintSuccessAction
  | FetchPrintFailureAction;
