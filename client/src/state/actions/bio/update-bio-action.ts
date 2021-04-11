import { IBio, IError } from 'interfaces';
import { BioActionTypes } from '../../types';

interface UpdateBioRequestAction {
  type: BioActionTypes.UPDATE_BIO_REQUEST;
}
interface UpdateBioSuccessAction {
  type: BioActionTypes.UPDATE_BIO_SUCCESS;
  payload: IBio;
}
interface UpdateBioFailureAction {
  type: BioActionTypes.UPDATE_BIO_FAILURE;
  payload: IError[];
}
export type UpdateBioAction =
  | UpdateBioRequestAction
  | UpdateBioSuccessAction
  | UpdateBioFailureAction;
