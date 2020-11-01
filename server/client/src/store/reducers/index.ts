import { combineReducers } from "redux";
import { auth } from "./auth";
import { cart } from "./cart";
import { nav } from "./nav";
import { modal } from "./modal";
import { prints } from "./prints";

export const rootReducer = combineReducers({
  auth,
  cart,
  modal,
  nav,
  prints,
});
