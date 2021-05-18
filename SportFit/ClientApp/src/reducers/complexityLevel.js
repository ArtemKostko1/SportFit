import { ACTION_TYPES } from '../actions/complexityLevel'

const programInitialState = {
    programList: [],
}

export const complexityLevelReducer = (state = programInitialState, {type, payload}) => {
    switch (type){
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                programList: payload,
            }

        case ACTION_TYPES.FETCH_COMPLEXITY_LEVEL:
            return {
                ...state,
                programItem: payload,
            }

        default:
            return state;
    }
}