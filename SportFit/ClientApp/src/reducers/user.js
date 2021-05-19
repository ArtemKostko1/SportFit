import { ACTION_TYPES } from '../actions/user'

const userInitialState = {
    userList: [],
    userItem: {}
}

export const user = (state = userInitialState, { type, payload }) => {
    switch (type){
        case ACTION_TYPES.FETCH_ALL_USERS:
            return {
                ...state,
                userList: payload
            }

        case ACTION_TYPES.FETCH_USER:
            return {
                ...state,
                userItem: payload
            }
            
        default:
            return state;
    }
}