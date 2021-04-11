import { IBio, IError } from 'interfaces';
import { BioActionTypes } from '../../types';

interface FetchBioRequestAction {
  type: BioActionTypes.FETCH_BIO_REQUEST;
}
interface FetchBioSuccessAction {
  type: BioActionTypes.FETCH_BIO_SUCCESS;
  payload: IBio[];
}
interface FetchBioFailureAction {
  type: BioActionTypes.FETCH_BIO_FAILURE;
  payload: IError[];
}
export type FetchBioAction =
  | FetchBioRequestAction
  | FetchBioSuccessAction
  | FetchBioFailureAction;
