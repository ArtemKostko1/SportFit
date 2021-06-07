import * as api from '../_services/api';
import {commentActionTypes} from './_constants/commentActionTypes';

export const fetchAllComments = () => dispatch => {
    api.comment().fetchAllComments()
        .then(response => {
            dispatch({
                type: commentActionTypes.FETCH_ALL_COMMENTS,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}

export const fetchCommentById = (id) => dispatch => {
    api.comment().fetchCommentById(id)
        .then(response => {
            dispatch({
                type: commentActionTypes.FETCH_COMMENT,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}

export const createComment = (data, onSuccess) => dispatch => {
    api.comment().createComment(data)
        .then(response => {
            dispatch({
                type: commentActionTypes.CREATE_COMMENT,
                payload: response.data
            });
            onSuccess();
        })
        .catch(err => console.log(err));
}

export const updateComment = (id, data, onSuccess) => dispatch => {
    api.comment().updateComment(id, data)
        .then(response => {
            dispatch({
                type: commentActionTypes.UPDATE_COMMENT,
                payload: {id, ...data}
            });
            onSuccess();
        })
        .catch(err => console.log(err));
}

export const deleteComment = (id, onSuccess) => dispatch => {
    api.comment().deleteComment(id)
        .then(response => {
            dispatch({
                type: commentActionTypes.DELETE_COMMENT,
                payload: id
            });
            onSuccess();
        })
        .catch(err => console.log(err));
}

export const commentsRequested = () => dispatch => {
    dispatch({
        type: commentActionTypes.COMMENTS_REQUESTED
    })
}