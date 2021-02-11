import { AnyAction } from 'redux';
import { ProjectActionTypes } from 'state/types';
import { deleteImage, swap } from 'utils/projects';

const initialState = {
  errors: null,
  items: [],
  loading: false,
  page: 1,
  pages: 0,
  selectedItem: { images: [] },
};

export const projects = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case ProjectActionTypes.CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        items: [...state.items, payload],
        loading: false,
        errors: null,
      };

    case ProjectActionTypes.UPDATE_PROJECT_SUCCESS:
      const oldItems = state.items.filter(({ _id }) => _id !== payload._id);
      return {
        ...state,
        items: [payload, ...oldItems],
        errors: null,
        loading: false,
      };

    case ProjectActionTypes.ADD_PROJECT_IMG_REQUEST:
    case ProjectActionTypes.ADMIN_FETCH_PROJECT_REQUEST:
    case ProjectActionTypes.ADMIN_FETCH_PROJECTS_REQUEST:
    case ProjectActionTypes.CREATE_PROJECT_REQUEST:
    case ProjectActionTypes.DELETE_PROJECT_REQUEST:
    case ProjectActionTypes.FETCH_PROJECT_REQUEST:
    case ProjectActionTypes.SAVE_IMAGE_ORDER_REQUEST:
    case ProjectActionTypes.UPDATE_PROJECT_REQUEST:
      return { ...state, errors: null, loading: true };

    case ProjectActionTypes.ADD_PROJECT_IMG_FAILURE:
    case ProjectActionTypes.ADMIN_FETCH_PROJECT_FAILURE:
    case ProjectActionTypes.ADMIN_FETCH_PROJECTS_FAILURE:
    case ProjectActionTypes.CREATE_PROJECT_FAILURE:
    case ProjectActionTypes.DELETE_PROJECT_FAILURE:
    case ProjectActionTypes.FETCH_PROJECT_FAILURE:
    case ProjectActionTypes.SAVE_IMAGE_ORDER_FAILURE:
    case ProjectActionTypes.UPDATE_PROJECT_FAILURE:
      return { ...state, errors: payload, loading: false };

    case ProjectActionTypes.ADD_PROJECT_IMG_SUCCESS:
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
      return { ...state, items: payload, loading: false };

    case ProjectActionTypes.ADMIN_FETCH_PROJECT_SUCCESS:
    case ProjectActionTypes.SAVE_IMAGE_ORDER_SUCCESS:
      return { ...state, selectedItem: payload, loading: false, errors: null };

    case ProjectActionTypes.DELETE_PROJECT_IMAGE:
      const newItem = state.selectedItem;
      const images = deleteImage(payload, newItem.images);
      return { ...state, selectedItem: { ...newItem, images } };

    case ProjectActionTypes.SWAP_PROJECT_IMAGE:
      const item = state.selectedItem;
      const { direction, i } = payload;
      const imgs = swap(direction, i, item);
      return { ...state, selectedItem: { ...item, images: imgs } };

    default:
      return state;
  }
};

// interface ProjectsState {
//   errors: IError[] | null;
//   loading: boolean;
//   items: IProject[] | [];
//   page: number;
//   pages: number;
//   selectedItem: IProject | null;
// }
