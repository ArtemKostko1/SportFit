import * as api from '../_services/api';
import { userActionTypes } from './_constants/userActionTypes';
import { alertActionTypes } from './_constants/alertActionTypes';
//import { history } from '../_helpers/history';

export const authenticate = (data, onSuccess) => dispatch => {
    api.user().authenticate(data)
        .then(response => {
            dispatch({
                type: userActionTypes.USERS_LOGIN_SUCCESS,
                payload: response.data
            });
            onSuccess();
        })
        .catch(err => console.log(err));
}

export const register = (data, onSuccess) => dispatch => {
    api.user().register(data)
        .then(response => {
            dispatch({
                type: userActionTypes.USERS_REGISTRATION_SUCCESS,
                payload: response.data
            });
            onSuccess();
        })
        .catch(err => console.log(err));
}

export const fetchAllUsers = () => dispatch => {
    api.user().fetchAllUsers()
        .then(response => {
            dispatch({
                type: userActionTypes.USERS_GETALL_SUCCESS,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}

export const fetchUserById = (id) => dispatch => {
    api.user().fetchUserById(id)
        .then(response => {
            dispatch({
                type: userActionTypes.USERS_GETBYID_SUCCESS,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}

export const updateUser = (id, data, onSuccess) => dispatch => {
    api.user().updateUser()
        .then(response => {
            dispatch({
                type: userActionTypes.USERS_UPDATE_SUCCESS,
                payload: {id, ...data}
            });
            onSuccess();
        })
        .catch(err => console.log(err));
}

function logout() {
    localStorage.removeItem('user');
    return { type: userActionTypes.USERS_LOGOUT };
}
