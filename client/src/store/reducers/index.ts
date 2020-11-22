import { combineReducers } from "redux";
import { auth } from "./auth";
import { backgrounds } from "./backgrounds";
import { cart } from "./cart";
import { nav } from "./nav";
import { modal } from "./modal";
import { page } from "./page";
import { prints } from "./prints";

export const rootReducer = combineReducers({
  auth,
  backgrounds,
  cart,
  modal,
  nav,
  page,
  prints,
});
