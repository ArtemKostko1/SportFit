import * as api from './api';

export const ACTION_TYPES = {
    FETCH_ALL_COMPLEXITY_LEVELS: 'FETCH_ALL_COMPLEXITY_LEVELS',
    FETCH_COMPLEXITY_LEVEL: 'FETCH_COMPLEXITY_LEVEL',
};

export const fetchAllComplexityLevels = () => dispatch => {
    api.complexityLevel().fetchAllComplexityLevels()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL_COMPLEXITY_LEVELS, 
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}

export const fetchComplexityLevelById = (id) => dispatch => {
    api.complexityLevel().fetchComplexityLevelById(id)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_COMPLEXITY_LEVEL,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}