import api from './api';

export const ACTION_TYPES = {
    FETCH_ALL: 'FETCH_ALL',
    FETCH_COMPLEXITY_LEVEL: 'FETCH_COMPLEXITY_LEVEL',
};

export const fetchAllComplexityLevels = () => dispatch => {
    api.complexityLevel().fetchAll()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}

export const fetchComplexityLevelById = (id) => dispatch => {
    api.complexityLevel().fetchById(id)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_COMPLEXITY_LEVEL,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}