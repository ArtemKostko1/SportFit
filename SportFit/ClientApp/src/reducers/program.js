import { ACTION_TYPES } from '../actions/program'

const initialState = {
    list: []
}

export const program = (state = initialState, action) => {
    switch (action.type){
        case ACTION_TYPES.FETCH_ALL:
            return {
                ... state,
                list: [...action.payload]
            }

        default:
            return state;
    }
}