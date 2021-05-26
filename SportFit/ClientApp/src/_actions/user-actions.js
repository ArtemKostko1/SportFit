import * as api from '../_services/api';
import { userActionTypes } from './_constants/userActionTypes';
import { alertActionTypes } from './_constants/alertActionTypes';
import { history } from '../_helpers/history';

/*export const userActions = {
    login,
    logout,
    getAll
};*/

/*function login(login, password) {
    return dispatch => {
        dispatch(request({ login }));

        userService.login(login, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.USERS_LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.USERS_LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.USERS_LOGIN_FAILURE, error } }
}*/

export const register = (data) => dispatch => {
    api.user().register(data)
        .then(response => {
            debugger
            dispatch({
                type: userActionTypes.USERS_REGISTER_SUCCESS,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
    
    /*return dispatch => {
        dispatch(request({ data }));

        userService.register(data)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.USERS_LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.USERS_LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.USERS_LOGIN_FAILURE, error } }*/
}

/*function logout() {
    userService.logout();
    return { type: userConstants.USERS_LOGOUT };
}*/

/*
function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.USERS_GETALL_REQUEST } }
    function success(users) { return { type: userConstants.USERS_GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.USERS_GETALL_FAILURE, error } }
}*/
