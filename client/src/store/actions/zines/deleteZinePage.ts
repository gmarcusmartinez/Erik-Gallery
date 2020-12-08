import zines from "api/zines";
import { ZineActionTypes } from "store/actions/types";

const { DELETE_ZINE_PAGE_SUCCESS, DELETE_ZINE_PAGE_FAILURE } = ZineActionTypes;
export const deleteZinePage = (id: string, imgStr: string) => async (
  dispatch: any
) => {
  try {
    dispatch({ type: ZineActionTypes.DELETE_ZINE_PAGE_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await zines.put(`/${id}/deletePage`, { imgStr }, config);
    dispatch({ type: DELETE_ZINE_PAGE_SUCCESS, payload: data });
  } catch (err) {
    const errors = err.response.data.errors || err.message;
    dispatch({ type: DELETE_ZINE_PAGE_FAILURE, payload: errors });
  }
};
