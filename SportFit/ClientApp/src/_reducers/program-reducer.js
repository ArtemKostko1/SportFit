import {programActionTypes} from '../_actions/_constants/programActionTypes';

const programInitialState = {
    programsList: [],
    programItem: {},
}

export const programReducer = (state = programInitialState, {type, payload}) => {
    switch (type){
        case programActionTypes.PROGRAMS_REQUESTED:
            return {
                programsList: [],
                programItem: {}
            }
        
        case programActionTypes.FETCH_ALL_PROGRAMS:
            return {
                ...state,
                programsList: payload
            }

        case programActionTypes.FETCH_PROGRAM:
            return {
                ...state,
                programItem: payload
            }

        case programActionTypes.CREATE_PROGRAM:
            return {
                ...state,
                programsList: [...state.programsList, payload]
            }

        case programActionTypes.UPDATE_PROGRAM:
            return {
                ...state,
                programsList: state.programsList.map(x => x.id === payload.id ? payload: x)
            }

        case programActionTypes.DELETE_PROGRAM:
            return {
                ...state,
                programsList: state.programsList.filter(x => x.id !== payload)
            }

        default:
            return state;
    }
}