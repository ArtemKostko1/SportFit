import * as api from '../_services/api';
import {selectedProgramsActionTypes} from './_constants/selectedProgramsActionTypes';

export const fetchAllSelectedPrograms = id => dispatch => {
    api.selectedProgram().fetchAllSelectedPrograms(id)
        .then(response => {
            dispatch({
                type: selectedProgramsActionTypes.FETCH_ALL_SELECTED_PROGRAMS,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}

export const addSelectedProgram = (data, onSuccess) => dispatch => {
    api.selectedProgram().addSelectedProgram(data)
        .then(response => {
            dispatch({
                type: selectedProgramsActionTypes.ADD_TO_SELECTED,
                payload: response.data
            });
            onSuccess();
        })
        .catch(err => console.log(err));
}

export const deleteSelectedProgram = (id) => dispatch => {
    api.selectedProgram().deleteSelectedProgram(id)
        .then(response => {
            dispatch({
                type: selectedProgramsActionTypes.DELETE_SELECTED_PROGRAM,
                payload: id
            });
        })
        .catch(err => console.log(err));
}

export const selectedProgramsRequested = () => dispatch => {
    dispatch({
        type: selectedProgramsActionTypes.SELECTED_PROGRAMS_REQUESTED
    })
}
