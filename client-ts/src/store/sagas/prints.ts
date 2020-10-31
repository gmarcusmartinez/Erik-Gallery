import { all, call, put, takeLatest } from "redux-saga/effects";
import { PrintActionTypes } from "store/actions/types";
import prints from "api/prints";
import * as printActions from "store/actions/prints/fetchPrints";

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

export function* printSagas() {
  yield all([call(fetchPrintsStart)]);
}
