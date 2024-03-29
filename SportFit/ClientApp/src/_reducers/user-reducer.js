﻿import { userActionTypes } from '../_actions/_constants/userActionTypes';

const userInitialState = {
    usersList: [],
    userItem: {},
    authUser: {},
    loading: true,
    error: ''
}

export const userReducer = (state = userInitialState, {type, payload, error}) => {
    switch (type) {
        case userActionTypes.USERS_REQUESTED:
            return {
                ...state,
                userItem: {}
            }

        case userActionTypes.USERS_AUTHENTICATED:
            return {
                ...state,
                authUser: JSON.parse(localStorage.getItem('user'))
            }
        
        case userActionTypes.USERS_GETALL_REQUEST:
            return {
                loading: true
            };
            
        case userActionTypes.USERS_GETALL_SUCCESS:
            return {
                ...state,
                usersList: payload
            };
            
        case userActionTypes.USERS_GETALL_FAILURE:
            return {
                error: error
            };
            

        case userActionTypes.USERS_GETBYID_REQUEST:
            return {
                loading: true
            };

        case userActionTypes.USERS_GETBYID_SUCCESS:
            return {
                ...state,
                userItem: payload
            };

        case userActionTypes.USERS_GETBYID_FAILURE:
            return {
                error: error
            };
            
            
        case userActionTypes.USERS_REGISTRATION_SUCCESS:
            return {
                ...state,
                authUser: payload
            };

        case userActionTypes.USERS_LOGIN_SUCCESS:
            return {
                ...state,
                authUser: payload
            };

        case userActionTypes.USERS_UPDATE_SUCCESS:
            return {
                ...state,
                authUser: payload
            }

        case userActionTypes.USERS_LOGOUT:
            return {
                ...state,
                usersList: [],
                authUser: null
            };
            
        default:
            return state
    }
}