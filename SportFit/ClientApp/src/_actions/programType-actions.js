import * as api from './api';

export const ACTION_TYPES = {
    FETCH_ALL_PROGRAM_TYPES: 'FETCH_ALL_PROGRAM_TYPES',
    FETCH_PROGRAM_TYPE: 'FETCH_PROGRAM_TYPE',
};

export const fetchAllProgramTypes = () => dispatch => {
    api.programType().fetchAlProgramTypes()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL_PROGRAM_TYPES,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}

export const fetchProgramTypeById = (id) => dispatch => {
    api.programType().fetchProgramTypeById(id)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_PROGRAM_TYPE,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}