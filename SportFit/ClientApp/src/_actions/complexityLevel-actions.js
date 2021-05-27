import * as api from '../_services/api';
import {complexityLevelActionTypes} from './_constants/complexityLevelActionTypes';

export const fetchAllComplexityLevels = () => dispatch => {
    api.complexityLevel().fetchAllComplexityLevels()
        .then(response => {
            debugger
            dispatch({
                type: complexityLevelActionTypes.FETCH_ALL_COMPLEXITY_LEVELS, 
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}

export const fetchComplexityLevelById = (id) => dispatch => {
    api.complexityLevel().fetchComplexityLevelById(id)
        .then(response => {
            dispatch({
                type: complexityLevelActionTypes.FETCH_COMPLEXITY_LEVEL,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}