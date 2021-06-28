import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from "redux-thunk";
import { reducers } from '../_reducers';


export const store = createStore(
    reducers,
    {},
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);