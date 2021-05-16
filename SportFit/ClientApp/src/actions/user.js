import api from './api';

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL',
    FETCH_USER: 'FETCH_USER'
};

export const fetchAllUsers = () => dispatch => {
    api.user().fetchAll()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: response.data
            });
        }
        )
        .catch(err => console.log(err));
}

export const fetchUserById = (id) => dispatch => {
    api.user().fetchById(id)
        .then(response => {
                dispatch({
                    type: ACTION_TYPES.FETCH_USER,
                    payload: response.data
                });
            }
        )
        .catch(err => console.log(err));
}