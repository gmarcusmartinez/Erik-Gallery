import { all, call } from "redux-saga/effects";
import { authSagas } from "store/sagas/auth";
import { printSagas } from "store/sagas/prints";

export default function* rootSaga() {
  yield all([call(authSagas), call(printSagas)]);
}
