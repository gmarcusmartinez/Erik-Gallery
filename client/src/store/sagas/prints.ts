import prints from "api/prints";
import { takeLatest, put } from "redux-saga/effects";
import { PrintActionTypes } from "store/actions/types";
import * as fetchPrints from "store/actions/prints/fetchPrints";

export function* fetchPrintsStart() {
  yield takeLatest(PrintActionTypes.FETCH_PRINTS_START, fetchPrintsAsync);
}

export function* fetchPrintsAsync() {
  try {
    const { data } = yield prints.get(`/`);
    yield put(fetchPrints.success(data));
  } catch (error) {
    yield put(fetchPrints.failure(error.message));
  }
}
