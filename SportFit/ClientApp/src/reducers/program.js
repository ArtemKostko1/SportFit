import { ACTION_TYPES } from '../actions/program'

const programInitialState = {
    programList: [],
    programItem: {},
}

export const programReducer = (state = programInitialState, {type, payload}) => {
    switch (type){
        case ACTION_TYPES.PROGRAMS_REQUESTED:
            return {
                programList: [],
                programItem: {},
            }
        
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                programList: payload,
            }

        case ACTION_TYPES.FETCH_PROGRAM:
            return {
                ...state,
                programItem: payload,
            }

        default:
            return state;
    }
}