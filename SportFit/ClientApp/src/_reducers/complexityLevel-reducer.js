import {complexityLevelActionTypes} from '../_actions/_constants/complexityLevelActionTypes';

const programInitialState = {
    complexityLevelsList: [],
    complexityLevelItem: {},
}

export const complexityLevelReducer = (state = programInitialState, {type, payload}) => {
    switch (type){
        case complexityLevelActionTypes.FETCH_ALL_COMPLEXITY_LEVELS:
            return {
                ...state,
                complexityLevelsList: payload,
            }

        case complexityLevelActionTypes.FETCH_COMPLEXITY_LEVEL:
            return {
                ...state,
                complexityLevelItem: payload,
            }

        default:
            return state;
    }
}