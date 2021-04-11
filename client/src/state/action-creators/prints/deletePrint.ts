import prints from 'api/prints';
import { Dispatch } from 'redux';
import { PrintActionTypes } from 'state';
import { DeletePrintAction } from 'state/actions/prints';

const { DELETE_PRINT_SUCCESS, DELETE_PRINT_FAILURE } = PrintActionTypes;
export const deletePrint = (id: string) => async (
  dispatch: Dispatch<DeletePrintAction>
) => {
  try {
    dispatch({ type: PrintActionTypes.DELETE_PRINT_REQUEST });
    await prints.delete(`/${id}`);

    dispatch({ type: DELETE_PRINT_SUCCESS, payload: id });
  } catch (e) {
    const errorResponse = e;
    dispatch({ type: DELETE_PRINT_FAILURE, payload: errorResponse });
  }
};
