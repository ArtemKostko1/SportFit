import { ACTION_TYPES } from '../_actions/complexityLevel-actions'

const programInitialState = {
    complexityLevelsList: [],
    complexityLevelItem: {},
}

export const complexityLevelReducer = (state = programInitialState, {type, payload}) => {
    switch (type){
        case ACTION_TYPES.FETCH_ALL_COMPLEXITY_LEVELS:
            return {
                ...state,
                complexityLevelsList: payload,
            }

        case ACTION_TYPES.FETCH_COMPLEXITY_LEVEL:
            return {
                ...state,
                complexityLevelItem: payload,
            }

        default:
            return state;
    }
}