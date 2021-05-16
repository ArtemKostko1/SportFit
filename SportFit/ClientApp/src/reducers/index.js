import { combineReducers } from 'redux';
import { user } from './user';
import { programReducer } from "./program";

export const reducers = combineReducers({
    user,
    programReducer,
});