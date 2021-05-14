import api from './api';

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL',
    FETCH_BYID: 'FETCH_BYID'
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
                    type: ACTION_TYPES.FETCH_BYID,
                    payload: response.data
                });
            }
        )
        .catch(err => console.log(err));
}