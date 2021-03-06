import { AnyAction } from 'redux';
import { PrintActionTypes } from 'state/types';

const initialState = {
  loading: false,
  items: [],
  page: 1,
  pages: null,
  selectedItem: null,
  errors: null,
};

export const prints = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case PrintActionTypes.CREATE_PRINT_SUCCESS:
      return {
        ...state,
        items: [payload, ...state.items],
        loading: false,
        errors: null,
      };

    case PrintActionTypes.UPDATE_PRINT_SUCCESS:
      const oldItems = state.items.filter(({ _id }) => _id !== payload._id);
      return {
        ...state,
        items: [payload, ...oldItems],
        errors: null,
        loading: false,
      };

    case PrintActionTypes.CREATE_PRINT_REQUEST:
    case PrintActionTypes.FETCH_PRINT_REQUEST:
    case PrintActionTypes.FETCH_PRINTS_REQUEST:
    case PrintActionTypes.UPDATE_PRINT_REQUEST:
      return { ...state, loading: true };

    case PrintActionTypes.FETCH_PRINT_SUCCESS:
      return { ...state, loading: false, selectedItem: payload, errors: null };

    case PrintActionTypes.FETCH_PRINTS_SUCCESS:
      const { page, pages, data: items } = payload;
      return { ...state, loading: false, items, page, pages };

    case PrintActionTypes.ADMIN_FETCH_PRINTS_SUCCESS:
      return { ...state, items: payload };

    case PrintActionTypes.DELETE_PRINT_SUCCESS:
      const newItems = state.items.filter(({ _id }) => _id !== payload);
      return { ...state, items: newItems };

    case PrintActionTypes.CREATE_PRINT_FAILURE:
    case PrintActionTypes.UPDATE_PRINT_FAILURE:
      return { ...state, errors: payload, loading: false };

    default:
      return state;
  }
};
