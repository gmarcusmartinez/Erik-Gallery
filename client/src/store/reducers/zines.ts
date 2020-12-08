import { AnyAction } from "redux";
import { ZineActionTypes } from "../../store/actions/types";

const initialState = {
  loading: false,
  items: [],
  page: 1,
  pages: null,
  selectedItem: null,
  errors: null,
};

export const zines = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case ZineActionTypes.CREATE_ZINE_SUCCESS:
      return {
        ...state,
        items: [payload, ...state.items],
        loading: false,
        errors: null,
      };

    case ZineActionTypes.UPDATE_ZINE_SUCCESS:
      const oldItems = state.items.filter(({ _id }) => _id !== payload._id);
      return { ...state, items: [payload, ...oldItems], errors: null };

    case ZineActionTypes.ADD_ZINE_IMG_REQUEST:
    case ZineActionTypes.CREATE_ZINE_REQUEST:
    case ZineActionTypes.FETCH_ZINE_REQUEST:
    case ZineActionTypes.FETCH_ZINES_REQUEST:
    case ZineActionTypes.UPDATE_ZINE_REQUEST:
      return { ...state, loading: true };

    case ZineActionTypes.ADD_ZINE_IMG_SUCCESS:
    case ZineActionTypes.DELETE_ZINE_PAGE_SUCCESS:
      return { ...state, selectedItem: payload, loading: false };

    case ZineActionTypes.FETCH_ZINE_SUCCESS:
      return { ...state, loading: false, selectedItem: payload, errors: null };

    case ZineActionTypes.FETCH_ZINES_SUCCESS:
      const { page, pages, data: items } = payload;
      return { ...state, loading: false, items, page, pages };

    case ZineActionTypes.DELETE_ZINE_SUCCESS:
      const newItems = state.items.filter(({ _id }) => _id !== payload);
      return { ...state, items: newItems };

    case ZineActionTypes.CREATE_ZINE_FAILURE:
    case ZineActionTypes.UPDATE_ZINE_FAILURE:
    case ZineActionTypes.ADD_ZINE_IMG_FAILURE:
    case ZineActionTypes.DELETE_ZINE_FAILURE:
      return { ...state, errors: payload, loading: false };

    default:
      return state;
  }
};
