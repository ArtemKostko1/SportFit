import * as api from './api';

export const ACTION_TYPES = {
    CREATE_USER: 'CREATE_USER',
    UPDATE_USER: 'UPDATE_USER',
    DELETE_USER: 'DELETE_USER',
    FETCH_ALL_USERS: 'FETCH_ALL_USERS',
    FETCH_USER: 'FETCH_USER'
};

export const fetchAllUsers = () => dispatch => {
    api.user().fetchAll()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL_USERS,
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