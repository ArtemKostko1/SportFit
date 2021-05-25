import { userActionTypes } from '../_actions/_constants/userActionTypes';

export function userReducer(state = {}, {type, users, error}) {
    switch (type) {
        case userActionTypes.USERS_GETALL_REQUEST:
            return {
                loading: true
            };
            
        case userActionTypes.USERS_GETALL_SUCCESS:
            return {
                items: users
            };
            
        case userActionTypes.USERS_GETALL_FAILURE:
            return {
                error: error
            };
            
        default:
            return state
    }
}