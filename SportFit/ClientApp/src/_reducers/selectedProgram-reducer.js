import {selectedProgramsActionTypes} from '../_actions/_constants/selectedProgramsActionTypes';

const selectedProgramInitialState = {
    selectedProgramsList: [],
    selectedProgramsListLoading: true
}

export const selectedProgramReducer = (state = selectedProgramInitialState, {type, payload}) => {
    switch (type)
    {        
        case selectedProgramsActionTypes.FETCH_ALL_LIKES:
            return {
                ...state,
                selectedProgramsList: payload,
                selectedProgramsListLoading: false
            }

        case selectedProgramsActionTypes.CREATE_LIKE:
            return {
                ...state,
                selectedProgramsList: [...state.selectedProgramsList, payload]
            }

        case selectedProgramsActionTypes.DELETE_LIKE:
            return {
                ...state,
                selectedProgramsList: state.selectedProgramsList.filter(x => x.id !== payload)
            }

        case selectedProgramsActionTypes.LIKES_REQUESTED:
            return {
                ...state,
                selectedProgramsList: {},
                selectedProgramsListLoading: true
            }

        default:
            return state;
    }
}