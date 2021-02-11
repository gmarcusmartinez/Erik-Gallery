import { IError } from 'interfaces';
import { AnyAction } from 'redux';
import { BioActionTypes } from 'state/types';

interface BioState {
  items: any[] | [{ _id: 'default'; text: '' }];
  loading: boolean;
  errors: IError[] | null;
}

const initialState = {
  items: [{ text: '' }],
  loading: false,
  errors: [],
};

export const bio = (
  state: BioState = initialState,
  action: AnyAction
): BioState => {
  const { type, payload } = action;
  switch (type) {
    case BioActionTypes.FETCH_BIO_REQUEST:
    case BioActionTypes.UPDATE_BIO_REQUEST:
      return { ...state, loading: true };

    case BioActionTypes.FETCH_BIO_SUCCESS:
    case BioActionTypes.UPDATE_BIO_SUCCESS:
      return { ...state, items: payload, loading: false };

    case BioActionTypes.FETCH_BIO_FAILURE:
    case BioActionTypes.UPDATE_BIO_FAILURE:
      return { ...state, errors: payload, loading: false };
    default:
      return state;
  }
};
