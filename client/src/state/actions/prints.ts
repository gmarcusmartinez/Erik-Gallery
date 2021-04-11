import { IPrint, IError } from 'interfaces';
import { PrintActionTypes } from '../types';

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
