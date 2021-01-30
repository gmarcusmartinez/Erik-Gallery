import { AnyAction } from 'redux';
import { ProjectActionTypes } from 'state/types';

const initialState = {
  loading: false,
  items: [],
  page: 1,
  pages: null,
  selectedItem: null,
  errors: null,
};

export const projects = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case ProjectActionTypes.CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        items: [payload, ...state.items],
        loading: false,
        errors: null,
      };

    case ProjectActionTypes.UPDATE_PROJECT_SUCCESS:
      const oldItems = state.items.filter(({ _id }) => _id !== payload._id);
      return { ...state, items: [payload, ...oldItems], errors: null };

    case ProjectActionTypes.ADD_PROJECT_IMG_REQUEST:
    case ProjectActionTypes.CREATE_PROJECT_REQUEST:
    case ProjectActionTypes.FETCH_PROJECT_REQUEST:
    case ProjectActionTypes.FETCH_PROJECTS_REQUEST:
    case ProjectActionTypes.UPDATE_PROJECT_REQUEST:
      return { ...state, loading: true };

    case ProjectActionTypes.ADD_PROJECT_IMG_SUCCESS:
    case ProjectActionTypes.DELETE_PROJECT_PAGE_SUCCESS:
      return { ...state, selectedItem: payload, loading: false };

    case ProjectActionTypes.FETCH_PROJECT_SUCCESS:
      return { ...state, loading: false, selectedItem: payload, errors: null };

    case ProjectActionTypes.FETCH_PROJECTS_SUCCESS:
      const { page, pages, data: items } = payload;
      return { ...state, loading: false, items, page, pages };

    case ProjectActionTypes.DELETE_PROJECT_SUCCESS:
      const newItems = state.items.filter(({ _id }) => _id !== payload);
      return { ...state, items: newItems };

    case ProjectActionTypes.ADMIN_FETCH_PROJECTS_SUCCESS:
      return { ...state, items: payload };

    case ProjectActionTypes.CREATE_PROJECT_FAILURE:
    case ProjectActionTypes.UPDATE_PROJECT_FAILURE:
    case ProjectActionTypes.ADD_PROJECT_IMG_FAILURE:
    case ProjectActionTypes.DELETE_PROJECT_FAILURE:
      return { ...state, errors: payload, loading: false };

    default:
      return state;
  }
};
