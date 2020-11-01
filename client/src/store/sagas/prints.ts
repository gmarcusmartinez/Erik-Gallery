import { all, call, put, takeLatest } from "redux-saga/effects";
import { PrintActionTypes } from "../../store/actions/types";
import prints from "../../api/prints";
import * as printActions from "../../store/actions/prints";

export function* fetchPrintsAsync() {
  try {
    const { data } = yield prints.get("/");
    yield put(printActions.fetchPrintsSuccess(data));
  } catch (err) {
    const errors = err.response.data.errors;
    yield put(printActions.fetchPrintsFailure(errors));
  }
}
export function* fetchPrintsStart() {
  yield takeLatest(PrintActionTypes.FETCH_PRINTS_REQUEST, fetchPrintsAsync);
}

// DELETE PRINT
export function* deletePrintAsync({ payload }: any) {
  console.log(payload);
  try {
    yield prints.delete(`/${payload}`);
    yield put(printActions.deletePrintsSuccess(payload));
  } catch (err) {
    const errors = err.response.data.errors;
    yield put(printActions.deletePrintsFailure(errors));
  }
}
export function* deletePrintStart() {
  yield takeLatest(PrintActionTypes.DELETE_PRINT_REQUEST, deletePrintAsync);
}

export function* printSagas() {
  yield all([call(fetchPrintsStart), call(deletePrintStart)]);
}
