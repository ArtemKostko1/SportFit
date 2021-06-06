import {programActionTypes} from '../_actions/_constants/programActionTypes';

const programInitialState = {
    programsList: [],
    myProgramsList: [],
    programItem: {},
    programsLoading: true,
    myProgramsLoading: true,
}

export const programReducer = (state = programInitialState, {type, payload}) => {
    switch (type){
        case programActionTypes.PROGRAMS_REQUESTED:
            return {
                programItem: {}
            }

        /*case programActionTypes.MY_PROGRAMS_REQUESTED:
            return {
                myProgramsList: []
            }*/
        
        case programActionTypes.FETCH_ALL_PROGRAMS:
            return {
                ...state,
                programsList: payload
            }

        case programActionTypes.FETCH_ALL_MY_PROGRAMS:
            return {
                ...state,
                myProgramsList: payload,
                myProgramsLoading: false
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