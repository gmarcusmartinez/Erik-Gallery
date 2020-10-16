import { combineReducers } from "redux";
import { prints } from "./prints";
import { cart } from "./cart";

export const rootReducer = combineReducers({
  cart,
  prints,
});
