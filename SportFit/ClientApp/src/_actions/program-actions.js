import * as api from './api';

export const PROGRAM_ACTION_TYPES = {
    CREATE_PROGRAM: 'CREATE_PROGRAM',
    UPDATE_PROGRAM: 'UPDATE_PROGRAM',
    DELETE_PROGRAM: 'DELETE_PROGRAM',
    FETCH_ALL_PROGRAMS: 'FETCH_ALL_PROGRAMS',
    FETCH_PROGRAM: 'FETCH_PROGRAM',
    PROGRAMS_REQUESTED: 'PROGRAMS_REQUESTED'
};

export const fetchAllPrograms = () => dispatch => {
    api.program().fetchAllPrograms()
        .then(response => {
            dispatch({
                type: PROGRAM_ACTION_TYPES.FETCH_ALL_PROGRAMS,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}

export const fetchProgramById = (id) => dispatch => {
    api.program().fetchProgramById(id)
        .then(response => {
            dispatch({
                type: PROGRAM_ACTION_TYPES.FETCH_PROGRAM,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}

export const programsRequested = () => dispatch => {
    dispatch({
        type: PROGRAM_ACTION_TYPES.PROGRAMS_REQUESTED
    })
}

export const createProgram = (data, onSuccess) => dispatch => {
    api.program().createProgram(data)
        .then(response => {
            dispatch({
                type: PROGRAM_ACTION_TYPES.CREATE_PROGRAM,
                payload: response.data
            });
            onSuccess();
        })
        .catch(err => console.log(err));
}

export const update = (id, data, onSuccess) => dispatch => {
    api.program().updateProgram(id. data)
        .then(response => {
            dispatch({
                type: PROGRAM_ACTION_TYPES.UPDATE_PROGRAM,
                payload: {id, ...data}
            });
            onSuccess();
        })
        .catch(err => console.log(err));
}

export const Delete = (id, onSuccess) => dispatch => {
    api.program().deleteProgram(id)
        .then(response => {
            dispatch({
                type: PROGRAM_ACTION_TYPES.DELETE_PROGRAM,
                payload: id
            });
            onSuccess();
        })
        .catch(err => console.log(err));
}