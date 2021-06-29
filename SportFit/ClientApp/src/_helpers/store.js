import { createStore, applyMiddleware, compose } from "redux";
//import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from "redux-thunk";
import { reducers } from '../_reducers';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

export const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(thunk, loggerMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);