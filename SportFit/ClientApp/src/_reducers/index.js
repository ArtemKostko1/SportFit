import { combineReducers } from 'redux';
import { userReducer } from './user-reducer';
import { programReducer } from "./program-reducer";
import { programTypeReducer } from "./programType-reducer";
import { complexityLevelReducer } from "./complexityLevel-reducer";
import { commentReducer } from "./comment-reducer";
import { likeReducer } from "./like-reducer";
import { selectedProgramReducer } from "./selectedProgram-reducer";

export const reducers = combineReducers({
    userReducer,
    programReducer,
    programTypeReducer,
    complexityLevelReducer,
    commentReducer,
    likeReducer,
    selectedProgramReducer
});