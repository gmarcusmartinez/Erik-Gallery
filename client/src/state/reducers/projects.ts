import { AnyAction } from 'redux';
import { ProjectActionTypes } from 'state/types';

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
    case ProjectActionTypes.UPDATE_PROJECT_REQUEST:
      return { ...state, loading: true };

    case ProjectActionTypes.ADD_PROJECT_IMG_FAILURE:
    case ProjectActionTypes.ADMIN_FETCH_PROJECT_FAILURE:
    case ProjectActionTypes.ADMIN_FETCH_PROJECTS_FAILURE:
    case ProjectActionTypes.CREATE_PROJECT_FAILURE:
    case ProjectActionTypes.DELETE_PROJECT_FAILURE:
    case ProjectActionTypes.FETCH_PROJECT_FAILURE:
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
      return { ...state, selectedItem: payload, loading: false, errors: null };

    case ProjectActionTypes.DELETE_PROJECT_IMAGE:
      const updatedItem = state.selectedItem;
      const { images } = state.selectedItem;
      updatedItem.images = images!.filter((i: string) => i !== payload);
      return { ...state, selectedItem: updatedItem };

    case ProjectActionTypes.SWAP_PROJECT_IMAGE:
      const { direction, i } = payload;
      const { images: imgs } = state.selectedItem;
      const targetIndex = direction === 'left' ? i - 1 : i + 1;
      if (targetIndex < 0 || targetIndex > imgs.length - 1) return state;
      [imgs[i], imgs[targetIndex]] = [imgs[targetIndex], imgs[i]];

      const item = state.selectedItem;
      item.images = imgs;
      return { ...state, selectedItem: item };

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
