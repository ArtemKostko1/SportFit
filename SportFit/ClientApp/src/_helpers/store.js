import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from '../_reducers';

export const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(thunk)
    )
);