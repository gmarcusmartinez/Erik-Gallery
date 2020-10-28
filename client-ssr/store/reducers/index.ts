import { combineReducers } from "redux";
import { auth } from "./auth";
import { cart } from "./cart";
import { nav } from "./nav";
import { prints } from "./prints";

export const rootReducer = combineReducers({
  auth,
  cart,
  nav,
  prints,
});
