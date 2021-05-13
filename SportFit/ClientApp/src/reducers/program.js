import { ACTION_TYPES } from '../actions/program'

const initialState = {
    programList: [],
    programItem: {},
    loading: true
}

export const program = (state = initialState, action) => {
        switch (action.type){
            case ACTION_TYPES.PROGRAMS_REQUESTED:
                return {
                    programList: [],
                    loading: true
                }
            
            case ACTION_TYPES.FETCH_ALL:
                return {
                    ...state,
                    programList: [...action.payload],
                    loading: false
                }
                
            case ACTION_TYPES.FETCH_BYID:
                return {
                    ...state,
                    programItem: [...action.payload]
                }
    
            default:
                return state;
    }
}