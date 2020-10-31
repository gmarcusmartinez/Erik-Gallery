// import { takeLatest, put, all, call } from "redux-saga/effects";
import { all } from "redux-saga/effects";
// import auth from "api/auth";
// import { AuthActionTypes } from "store/actions/types";
// import * as authActions from "store/actions/auth/login";

// export function* login({ formData }: any) {
//   try {
//     const config = { headers: { "Content-Type": "application/json" } };
//     yield auth.post("/login", formData, config);
//     yield put(authActions.loginSuccess());
//   } catch (e) {
//     console.log(e);
//     yield put(authActions.loginFailure(e));
//   }
// }

// export function* onLoginStart() {
//   yield takeLatest(AuthActionTypes.USER_LOGIN_REQUEST, login);
// }
export function* authSagas() {
  yield all([]);
}
