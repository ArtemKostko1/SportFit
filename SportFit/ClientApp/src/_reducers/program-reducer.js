import {programActionTypes} from '../_actions/_constants/programActionTypes';

const programInitialState = {
    programList: [],
    programItem: {},
}

export const programReducer = (state = programInitialState, {type, payload}) => {
    switch (type){
        case programActionTypes.PROGRAMS_REQUESTED:
            return {
                programList: [],
                programItem: {}
            }
        
        case programActionTypes.FETCH_ALL_PROGRAMS:
            return {
                ...state,
                programList: payload
            }

        case programActionTypes.FETCH_PROGRAM:
            return {
                ...state,
                programItem: payload
            }

        case programActionTypes.CREATE_PROGRAM:
            return {
                ...state,
                programList: [...state.programList, payload]
            }

        case programActionTypes.UPDATE_PROGRAM:
            return {
                ...state,
                programList: state.programList.map(x => x.id === payload.id ? payload: x)
            }

        case programActionTypes.DELETE_PROGRAM:
            return {
                ...state,
                programList: state.programList.filter(x => x.id !== payload)
            }

        default:
            return state;
    }
}