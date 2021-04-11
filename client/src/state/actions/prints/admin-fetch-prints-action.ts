import { IPrint, IError } from 'interfaces';
import { PrintActionTypes } from '../../types';

interface AdminFetchPrintsRequestAction {
  type: PrintActionTypes.ADMIN_FETCH_PRINTS_REQUEST;
}
interface AdminFetchPrintsSuccessAction {
  type: PrintActionTypes.ADMIN_FETCH_PRINTS_SUCCESS;
  payload: IPrint[];
}
interface AdminFetchPrintsFailureAction {
  type: PrintActionTypes.ADMIN_FETCH_PRINTS_FAILURE;
  payload: IError[];
}
export type AdminFetchPrintsAction =
  | AdminFetchPrintsRequestAction
  | AdminFetchPrintsSuccessAction
  | AdminFetchPrintsFailureAction;
