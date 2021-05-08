import { combineReducers } from 'redux';
import { user } from './user';
import { program } from "./program";

export const reducers = combineReducers({
    user,
    program
});