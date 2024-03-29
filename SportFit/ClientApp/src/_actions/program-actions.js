﻿import * as api from '../_services/api';
import {programActionTypes} from './_constants/programActionTypes';

export const fetchAllPrograms = () => dispatch => {
    api.program().fetchAllPrograms()
        .then(response => {
            dispatch({
                type: programActionTypes.FETCH_ALL_PROGRAMS,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}

export const fetchAllMyPrograms = (id) => dispatch => {
    api.program().fetchAllMyPrograms(id)
        .then(response => {
            dispatch({
                type: programActionTypes.FETCH_ALL_MY_PROGRAMS,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}

export const fetchProgramById = (id) => dispatch => {
    api.program().fetchProgramById(id)
        .then(response => {
            dispatch({
                type: programActionTypes.FETCH_PROGRAM,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}

export const createProgram = (data, onSuccess) => dispatch => {
    api.program().createProgram(data)
        .then(response => {
            dispatch({
                type: programActionTypes.CREATE_PROGRAM,
                payload: response.data
            });
            onSuccess();
        })
        .catch(err => console.log(err));
}

export const updateProgram = (id, data, onSuccess) => dispatch => {
    api.program().updateProgram(id, data)
        .then(response => {
            dispatch({
                type: programActionTypes.UPDATE_PROGRAM,
                payload: {id, ...data}
            });
            onSuccess();
        })
        .catch(err => console.log(err));
}

export const deleteProgram = (id, onSuccess) => dispatch => {
    api.program().deleteProgram(id)
        .then(response => {
            dispatch({
                type: programActionTypes.DELETE_PROGRAM,
                payload: id
            });
            onSuccess();
        })
        .catch(err => console.log(err));
}

export const programItemRequested = () => dispatch => {
    dispatch({
        type: programActionTypes.PROGRAM_ITEM_REQUESTED
    })
}

export const myProgramsRequested = () => dispatch => {
    dispatch({
        type: programActionTypes.MY_PROGRAMS_REQUESTED
    })
}
