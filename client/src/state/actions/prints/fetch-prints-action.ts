import { IPrint, IError } from 'interfaces';
import { PrintActionTypes } from '../../types';

interface FetchPrintsRequestAction {
  type: PrintActionTypes.FETCH_PRINTS_REQUEST;
}
interface FetchPrintsSuccessAction {
  type: PrintActionTypes.FETCH_PRINTS_SUCCESS;
  payload: IPrint[];
}
interface FetchPrintsFailureAction {
  type: PrintActionTypes.FETCH_PRINTS_FAILURE;
  payload: IError[];
}
export type FetchPrintsAction =
  | FetchPrintsRequestAction
  | FetchPrintsSuccessAction
  | FetchPrintsFailureAction;
