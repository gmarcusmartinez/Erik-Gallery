import { AnyAction } from 'redux';
import { BioActionTypes } from 'state/types';

const initialState = {
  _id: null,
  text: '',
  loading: false,
  errors: [],
};

export const bio = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case BioActionTypes.FETCH_BIO_REQUEST:
      return { ...state, loading: true };
    case BioActionTypes.FETCH_BIO_SUCCESS:
      return { text: payload.text, _id: payload._id, loading: false };
    case BioActionTypes.FETCH_BIO_FAILURE:
      return { errors: payload, loading: false };
    default:
      return state;
  }
};
