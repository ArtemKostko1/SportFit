import { combineReducers } from 'redux';
import { userReducer } from './user';
import { programReducer } from "./program";
import { programTypeReducer } from "./programType";
import { complexityLevelReducer } from "./complexityLevel";

export const reducers = combineReducers({
    userReducer,
    programReducer,
    programTypeReducer,
    complexityLevelReducer
});