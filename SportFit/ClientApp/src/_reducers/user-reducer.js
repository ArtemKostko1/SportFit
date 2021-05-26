import { userActionTypes } from '../_actions/_constants/userActionTypes';

export function userReducer(state = {}, {type, payload, error}) {
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
            
            
        case userActionTypes.USERS_REGISTER_SUCCESS:
            debugger
            return {
                ...state,
                usersList: [...state.usersList, payload]
            };
            
        default:
            return state
    }
}