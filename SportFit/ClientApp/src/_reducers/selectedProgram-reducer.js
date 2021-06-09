import {selectedProgramsActionTypes} from '../_actions/_constants/selectedProgramsActionTypes';

const selectedProgramInitialState = {
    selectedProgramsList: [],
    selectedProgramsListLoading: true
}

export const selectedProgramReducer = (state = selectedProgramInitialState, {type, payload}) => {
    switch (type)
    {        
        case selectedProgramsActionTypes.FETCH_ALL_SELECTED_PROGRAMS:
            return {
                ...state,
                selectedProgramsList: payload,
                selectedProgramsListLoading: false
            }

        case selectedProgramsActionTypes.ADD_TO_SELECTED:
            return {
                ...state,
                selectedProgramsList: [...state.selectedProgramsList, payload]
            }

        case selectedProgramsActionTypes.DELETE_SELECTED_PROGRAM:
            return {
                ...state,
                selectedProgramsList: state.selectedProgramsList.filter(x => x.id !== payload)
            }

        case selectedProgramsActionTypes.SELECTED_PROGRAMS_REQUESTED:
            return {
                ...state,
                selectedProgramsList: {},
                selectedProgramsListLoading: true
            }

        default:
            return state;
    }
}