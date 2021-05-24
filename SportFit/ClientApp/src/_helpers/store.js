import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';
import { reducers } from '../_reducers';

const loggerMiddleware = createLogger();

export const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(thunk, loggerMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);