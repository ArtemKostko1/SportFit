import { PROGRAM_ACTION_TYPES } from '../_actions/program-actions'

const programInitialState = {
    programList: [],
    programItem: {},
}

export const programReducer = (state = programInitialState, {type, payload}) => {
    switch (type){
        case PROGRAM_ACTION_TYPES.PROGRAMS_REQUESTED:
            return {
                programList: [],
                programItem: {}
            }
        
        case PROGRAM_ACTION_TYPES.FETCH_ALL_PROGRAMS:
            return {
                ...state,
                programList: payload
            }

        case PROGRAM_ACTION_TYPES.FETCH_PROGRAM:
            return {
                ...state,
                programItem: payload
            }

        case PROGRAM_ACTION_TYPES.CREATE_PROGRAM:
            return {
                ...state,
                programList: [...state.programList, payload]
            }

        case PROGRAM_ACTION_TYPES.UPDATE_PROGRAM:
            return {
                ...state,
                programList: state.programList.map(x => x.id === payload.id ? payload: x)
            }

        case PROGRAM_ACTION_TYPES.DELETE_PROGRAM:
            return {
                ...state,
                programList: state.programList.filter(x => x.id !== payload)
            }

        default:
            return state;
    }
}