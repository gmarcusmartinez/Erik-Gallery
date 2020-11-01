import { all, call } from "redux-saga/effects";
import { printSagas } from "../../store/sagas/prints";

export default function* rootSaga() {
  yield all([call(printSagas)]);
}
