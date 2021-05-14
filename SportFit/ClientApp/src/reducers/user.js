import { ACTION_TYPES } from '../actions/user'

const initialState = {
    userList: [],
    userItem: {}
}

export const user = (state = initialState, action) => {
    switch (action.type){
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                userList: [...action.payload]
            }

        case ACTION_TYPES.FETCH_BYID:
            return {
                ...state,
                userItem: [...action.payload]
            }
            
        default:
            return state;
    }
}