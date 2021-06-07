import {commentActionTypes} from '../_actions/_constants/commentActionTypes';

const commentInitialState = {
    commentsList: [],
    commentItem: {},
    commentsListLoading: true,
    commentItemLoading: true
}

export const commentReducer = (state = commentInitialState, {type, payload}) => {
    switch (type)
    {
        case commentActionTypes.FETCH_ALL_COMMENTS:
            return {
                ...state,
                commentsList: payload,
                commentsListLoading: false
            }

        case commentActionTypes.FETCH_COMMENT:
            return {
                ...state,
                commentItem: payload,
                commentItemLoading: false
            }

        case commentActionTypes.CREATE_COMMENT:
            return {
                ...state,
                commentsList: [...state.commentsList, payload]
            }

        case commentActionTypes.UPDATE_COMMENT:
            return {
                ...state,
                commentsList: state.commentsList.map(x => x.id === payload.id ? payload: x)
            }

        case commentActionTypes.DELETE_COMMENT:
            return {
                ...state,
                commentsList: state.commentsList.filter(x => x.id !== payload)
            }

        case commentActionTypes.COMMENTS_REQUESTED:
            return {
                ...state,
                commentItem: {}
            }

        default:
            return state;
    }
}