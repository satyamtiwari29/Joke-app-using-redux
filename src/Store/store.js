import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import jokeReducer from "./reducer.js";
import mySaga from "./saga.js";

const sagaMiddleware = createSagaMiddleware(); //create saga middleware

const store = createStore(
  //mount it on the store
  jokeReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);

export default store;
