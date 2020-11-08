import { AnyAction } from "redux";
import { UploadActionTypes } from "../actions/types";

const initialState = {
  item: null,
  errors: null,
};

export const upload = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case UploadActionTypes.UPLOAD_REQUEST:
      return { ...state, loading: true };
    case UploadActionTypes.UPLOAD_SUCCESS:
      return { ...state, loading: false, item: payload };
    case UploadActionTypes.UPLOAD_FAILURE:
      return { ...state, loading: false, item: null };
    default:
      return state;
  }
};
