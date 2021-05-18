import { ACTION_TYPES } from '../actions/programType'

const programInitialState = {
    programTypesList: [],
    programTypesItem: [],
}

export const programTypeReducer = (state = programInitialState, {type, payload}) => {
    switch (type){
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                programTypesList: payload,
            }

        case ACTION_TYPES.FETCH_PROGRAM_TYPE:
            return {
                ...state,
                programTypesItem: payload,
            }

        default:
            return state;
    }
}