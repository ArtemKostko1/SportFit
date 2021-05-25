import * as api from '../_services/api';

export const ACTION_TYPES = {
    CREATE_USER: 'CREATE_USER',
    UPDATE_USER: 'UPDATE_USER',
    DELETE_USER: 'DELETE_USER',
    FETCH_ALL_USERS: 'FETCH_ALL_USERS',
    FETCH_USER: 'FETCH_USER'
};

export const fetchAllUsers = () => dispatch => {
    api.user().fetchAllUsers()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL_USERS,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}

export const fetchUserById = (id) => dispatch => {
    api.user().fetchUserById(id)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_USER,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}

export const createUser = (data, onSuccess) => dispatch => {
    api.user().createUser(data)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.CREATE_USER,
                payload: response.data
            });
            onSuccess();
        })
        .catch(err => console.log(err));
}