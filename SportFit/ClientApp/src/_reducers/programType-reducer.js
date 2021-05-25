import { ACTION_TYPES } from '../_actions/programType-actions'
import {programTypeActionTypes} from "../_actions/_constants/programTypeActionTypes";

const programInitialState = {
    programTypesList: [],
    programTypeItem: {},
}

export const programTypeReducer = (state = programInitialState, {type, payload}) => {
    switch (type){
        case programTypeActionTypes.FETCH_ALL_PROGRAM_TYPES:
            return {
                ...state,
                programTypesList: payload,
            }

        case programTypeActionTypes.FETCH_PROGRAM_TYPE:
            return {
                ...state,
                programTypesItem: payload,
            }

        default:
            return state;
    }
}