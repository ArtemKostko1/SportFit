import { userConstants } from '../_constants/user-constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, {type, user}) {
    switch (type) {
        case userConstants.USERS_LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: user
            };
            
        case userConstants.USERS_LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: user
            };
            
        case userConstants.USERS_LOGIN_FAILURE:
            return {};
            
        case userConstants.USERS_LOGOUT:
            
            return {};
        default:
            return state
    }
}