import { userConstants } from '../_constants/user-constants';

export function users(state = {}, {type, users, error}) {
    switch (type) {
        case userConstants.USERS_GETALL_REQUEST:
            return {
                loading: true
            };
            
        case userConstants.USERS_GETALL_SUCCESS:
            return {
                items: users
            };
            
        case userConstants.USERS_GETALL_FAILURE:
            return {
                error: error
            };
            
        default:
            return state
    }
}