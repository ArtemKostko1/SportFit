import { combineReducers } from 'redux';
import { user } from './user';
import { programReducer } from "./program";
import { programTypeReducer } from "./programType";
import { complexityLevelReducer } from "./complexityLevel";

export const reducers = combineReducers({
    user,
    programReducer,
    programTypeReducer,
    complexityLevelReducer
});