import { combineReducers } from "redux";
import { auth } from "./auth";
import { backgrounds } from "./backgrounds";
import { cart } from "./cart";
import { lightbox } from "./lightbox";
import { modal } from "./modal";
import { nav } from "./nav";
import { prints } from "./prints";

export const rootReducer = combineReducers({
  auth,
  backgrounds,
  cart,
  lightbox,
  modal,
  nav,
  prints,
});
