import * as api from '../_services/api';
import {likeActionTypes} from './_constants/likeActionTypes';

export const fetchAllLikes = id => dispatch => {
    api.like().fetchAllLikes(id)
        .then(response => {
            dispatch({
                type: likeActionTypes.FETCH_ALL_LIKES,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
}

export const createLike = (data, onSuccess) => dispatch => {
    api.like().createLike(data)
        .then(response => {
            dispatch({
                type: likeActionTypes.CREATE_LIKE,
                payload: response.data
            });
            onSuccess();
        })
        .catch(err => console.log(err));
}

export const deleteLike = (id) => dispatch => {
    api.like().deleteLike(id)
        .then(response => {
            dispatch({
                type: likeActionTypes.DELETE_LIKE,
                payload: id
            });
        })
        .catch(err => console.log(err));
}

export const likesRequested = () => dispatch => {
    dispatch({
        type: likeActionTypes.LIKES_REQUESTED
    })
}
