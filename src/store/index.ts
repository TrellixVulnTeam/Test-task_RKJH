import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootReducers } from "./reducers";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)
