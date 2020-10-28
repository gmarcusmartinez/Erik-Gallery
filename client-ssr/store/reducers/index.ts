import { combineReducers } from "redux";
import { cart } from "./cart";
import { nav } from "./nav";
import { prints } from "./prints";

export const rootReducer = combineReducers({
  cart,
  nav,
  prints,
});
