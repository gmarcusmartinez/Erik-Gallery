import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import persistorRootReducer from "./reducers";

const middlewares = [thunk];

const store = createStore(
  persistorRootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
const persistor = persistStore(store);
export { store, persistor };
