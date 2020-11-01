import { Dispatch } from "redux";
import auth from "../../../api/auth";
import { AuthActionTypes } from "../../../store/actions/types";

export interface GetCurrentUserAction {
  type: AuthActionTypes.GET_CURRENT_USER;
  payload: any;
}

export const getCurrentUser = () => async (dispatch: Dispatch) => {
  const res = await auth.get("/currentUser");
  dispatch<GetCurrentUserAction>({
    type: AuthActionTypes.GET_CURRENT_USER,
    payload: res.data,
  });
};
