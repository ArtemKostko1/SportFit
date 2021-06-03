import { userActionTypes } from '../_actions/_constants/userActionTypes';

const userInitialState = {
    usersList: [],
    userItem: {},
    loading: true,
    error: ''
}

export const userReducer = (state = userInitialState, {type, payload, error}) => {
    switch (type) {
        case userActionTypes.USERS_REQUESTED:
            return {
                userItem: {}
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
            debugger
            return {
                ...state,
                usersList: [...state.usersList, payload]
            };

        case userActionTypes.USERS_LOGIN_SUCCESS:
            return {
                ...state
            };

        case userActionTypes.USERS_UPDATE_SUCCESS:
            return {
                ...state,
                usersList: state.usersList.map(x => x.id === payload.id ? payload: x)
            }

        case userActionTypes.USERS_LOGOUT:
            return {
                usersList: [],
                userItem: {}
            };
            
        default:
            return state
    }
}