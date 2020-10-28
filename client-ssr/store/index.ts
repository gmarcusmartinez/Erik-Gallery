import { createStore, applyMiddleware, Store } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware, { Task } from "redux-saga";
import thunk from "redux-thunk";

import { rootReducer } from "./reducers";
import { rootSaga } from "./sagas";

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [thunk, sagaMiddleware];

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(makeStore);
