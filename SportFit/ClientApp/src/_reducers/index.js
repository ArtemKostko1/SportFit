import { combineReducers } from 'redux';
import { userReducer } from './user-reducer';
import { programReducer } from "./program-reducer";
import { programTypeReducer } from "./programType-reducer";
import { complexityLevelReducer } from "./complexityLevel-reducer";
import { commentReducer } from "./comment-reducer";

export const reducers = combineReducers({
    userReducer,
    programReducer,
    programTypeReducer,
    complexityLevelReducer,
    commentReducer
});