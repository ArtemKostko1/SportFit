import * as api from '../_services/api';
import {programTypeActionTypes} from "./_constants/programTypeActionTypes";

export const fetchAllProgramTypes = () => dispatch => {
    api.programType().fetchAlProgramTypes()
        .then(response => {
            dispatch({
                type: programTypeActionTypes.FETCH_ALL_PROGRAM_TYPES,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}

export const fetchProgramTypeById = (id) => dispatch => {
    api.programType().fetchProgramTypeById(id)
        .then(response => {
            dispatch({
                type: programTypeActionTypes.FETCH_PROGRAM_TYPE,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}