import { IBackground, IError } from 'interfaces';
import { AnyAction } from 'redux';
import { BackgroundActionTypes } from 'state/types';

interface BackgroundsState {
  loading: boolean;
  items: IBackground[];
  errors: IError[] | null;
}

const initialState = {
  loading: true,
  items: [],
  errors: null,
};

export const backgrounds = (
  state: BackgroundsState = initialState,
  action: AnyAction
): BackgroundsState => {
  const { type, payload } = action;
  switch (type) {
    case BackgroundActionTypes.CREATE_BACKGROUND_SUCCESS:
      return {
        ...state,
        items: [payload, ...state.items],
        loading: false,
        errors: null,
      };

    case BackgroundActionTypes.SET_ACTIVE_REQUEST:
    case BackgroundActionTypes.CREATE_BACKGROUND_REQUEST:
    case BackgroundActionTypes.DELETE_BACKGROUND_REQUEST:
    case BackgroundActionTypes.FETCH_BACKGROUNDS_REQUEST:
      return { ...state, loading: true };

    case BackgroundActionTypes.FETCH_BACKGROUNDS_SUCCESS:
      return { ...state, loading: false, items: payload };

    case BackgroundActionTypes.SET_ACTIVE_SUCCESS:
      return { ...state, loading: false, items: payload, errors: null };

    case BackgroundActionTypes.DELETE_BACKGROUND_SUCCESS:
      const newItems = state.items.filter(({ _id }) => _id !== payload);
      return { ...state, items: newItems, loading: false };

    case BackgroundActionTypes.CREATE_BACKGROUND_FAILURE:
    case BackgroundActionTypes.FETCH_BACKGROUNDS_FAILURE:
    case BackgroundActionTypes.SET_ACTIVE_FAILURE:
      return { ...state, errors: payload, loading: false };

    default:
      return state;
  }
};
