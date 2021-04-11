import bio from 'api/bio';
import { Dispatch } from 'redux';
import { BioActionTypes } from 'state';
import { FetchBioAction } from 'state/actions/bio';

const { FETCH_BIO_FAILURE, FETCH_BIO_SUCCESS } = BioActionTypes;
export const fetchBio = () => async (dispatch: Dispatch<FetchBioAction>) => {
  try {
    dispatch({ type: BioActionTypes.FETCH_BIO_REQUEST });
    const { data } = await bio.get(`/`);
    dispatch({ type: FETCH_BIO_SUCCESS, payload: data });
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({ type: FETCH_BIO_FAILURE, payload: errorResponse });
  }
};
