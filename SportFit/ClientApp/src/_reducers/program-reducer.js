import {programActionTypes} from '../_actions/_constants/programActionTypes';

const programInitialState = {
    programsList: [],
    myProgramsList: [],
    programItem: {},
    programItemLoading: true,
    programsListLoading: true,
    myProgramsListLoading: true,
}

export const programReducer = (state = programInitialState, {type, payload}) => {
    switch (type)
    {        
        case programActionTypes.FETCH_ALL_PROGRAMS:
            return {
                ...state,
                programsList: payload,
                programsListLoading: false
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
                programItem: payload,
                programItemLoading: false
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

        case programActionTypes.PROGRAM_ITEM_REQUESTED:
            return {
                ...state,
                programItem: {},
                programItemLoading: true
            }

        case programActionTypes.MY_PROGRAMS_REQUESTED:
            return {
                ...state,
                myProgramsList: [],
                myProgramsListLoading: true
            }

        default:
            return state;
    }
}