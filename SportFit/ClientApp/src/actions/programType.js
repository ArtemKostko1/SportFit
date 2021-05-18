import api from './api';

export const ACTION_TYPES = {
    FETCH_ALL: 'FETCH_ALL',
    FETCH_PROGRAM_TYPE: 'FETCH_PROGRAM_TYPE',
};

export const fetchAllProgramTypes = () => dispatch => {
    api.programType().fetchAll()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}

export const fetchProgramTypeById = (id) => dispatch => {
    api.programType().fetchById(id)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_PROGRAM_TYPE,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}