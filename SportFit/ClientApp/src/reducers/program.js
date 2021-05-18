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
                programItem: {}
            }
        
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                programList: payload
            }

        case ACTION_TYPES.FETCH_PROGRAM:
            return {
                ...state,
                programItem: payload
            }

        case ACTION_TYPES.CREATE:
            return {
                ...state,
                programList: [...state.programList, payload]
            }

        case ACTION_TYPES.UPDATE:
            return {
                ...state,
                programList: state.programList.map(x => x.id === payload.id ? payload: x)
            }

        case ACTION_TYPES.DELETE:
            return {
                ...state,
                programList: state.programList.filter(x => x.id !== payload)
            }

        default:
            return state;
    }
}