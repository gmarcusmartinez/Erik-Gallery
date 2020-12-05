import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { auth } from "./auth";
import { backgrounds } from "./backgrounds";
import { cart } from "./cart";
import { lightbox } from "./lightbox";
import { modal } from "./modal";
import { nav } from "./nav";
import { prints } from "./prints";
import { zines } from "./zines";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

export const rootReducer = combineReducers({
  auth,
  backgrounds,
  cart,
  lightbox,
  modal,
  nav,
  prints,
  zines,
});

export default persistReducer(persistConfig, rootReducer);
