import { userActionTypes } from '../_actions/_constants/userActionTypes';

export const userReducer = (state = {}, {type, payload, error}) => {
    switch (type) {
        case userActionTypes.USERS_GETALL_REQUEST:
            return {
                loading: true
            };
            
        case userActionTypes.USERS_GETALL_SUCCESS:
            return {
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
            
            
        case userActionTypes.USERS_REGISTRATION:
            debugger
            return {
                ...state,
                userItem: [...state.userItem, payload]
            };
            
        default:
            return state
    }
}