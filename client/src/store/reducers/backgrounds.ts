import { AnyAction } from "redux";
import { BackgroundActionTypes } from "store/actions/types";

const initialState = {
  loading: true,
  items: [],
  errors: null,
};

export const backgrounds = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case BackgroundActionTypes.CREATE_BACKGROUND_SUCCESS:
      return {
        ...state,
        items: [payload, ...state.items],
        loading: false,
        errors: null,
      };

    // case PrintActionTypes.UPDATE_PRINT_SUCCESS:
    //   const oldItems = state.items.filter(({ _id }) => _id !== payload._id);
    //   return { ...state, items: [payload, ...oldItems], errors: null };

    case BackgroundActionTypes.CREATE_BACKGROUND_REQUEST:
    case BackgroundActionTypes.DELETE_BACKGROUND_REQUEST:
    case BackgroundActionTypes.FETCH_BACKGROUND_REQUEST:
      return { ...state, loading: true };

    // case PrintActionTypes.FETCH_PRINT_SUCCESS:
    //   return { ...state, loading: false, selectedItem: payload, errors: null };

    case BackgroundActionTypes.FETCH_BACKGROUND_SUCCESS:
      return { ...state, loading: false, items: payload };

    case BackgroundActionTypes.DELETE_BACKGROUND_SUCCESS:
      const newItems = state.items.filter(({ _id }) => _id !== payload);
      return { ...state, items: newItems };

    case BackgroundActionTypes.CREATE_BACKGROUND_FAILURE:
    case BackgroundActionTypes.FETCH_BACKGROUND_FAILURE:
      return { ...state, errors: payload, loading: false };

    default:
      return state;
  }
};
