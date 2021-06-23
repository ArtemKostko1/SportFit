import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';
import { reducers } from '../_reducers';

const loggerMiddleware = createLogger();

export const store = createStore(
    reducers,
    {},
    composeWithDevTools(
        applyMiddleware(thunk, loggerMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);