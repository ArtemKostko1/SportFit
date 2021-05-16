import api from './api';

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL',
    FETCH_PROGRAM: 'FETCH_PROGRAM',
    PROGRAMS_REQUESTED: 'PROGRAMS_REQUESTED'
};

export const fetchAllPrograms = () => dispatch => {
    api.program().fetchAll()
    .then(response => {
        dispatch({
            type: ACTION_TYPES.FETCH_ALL,
            payload: response.data
        });
    })
    .catch(err => console.log(err));
}

export const fetchProgramById = (id) => dispatch => {
    api.program().fetchById(id)
    .then(response => {
        dispatch({
            type: ACTION_TYPES.FETCH_PROGRAM,
            payload: response.data
        });
    })
    .catch(err => console.log(err));
}

export const programsRequested = () => dispatch => {
    dispatch({
         type: ACTION_TYPES.PROGRAMS_REQUESTED
    })
}