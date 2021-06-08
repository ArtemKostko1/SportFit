import {likeActionTypes} from '../_actions/_constants/likeActionTypes';

const likeInitialState = {
    likesList: [],
    likesListLoading: true
}

export const likeReducer = (state = likeInitialState, {type, payload}) => {
    switch (type)
    {        
        case likeActionTypes.FETCH_ALL_LIKES:
            return {
                ...state,
                likesList: payload,
                likesListLenght: state.likesList.length,
                likesListLoading: false
            }

        case likeActionTypes.CREATE_LIKE:
            return {
                ...state,
                likesList: [...state.likesList, payload]
            }

        case likeActionTypes.DELETE_LIKE:
            return {
                ...state,
                likesList: state.likesList.filter(x => x.id !== payload)
            }

        case likeActionTypes.LIKES_REQUESTED:
            return {
                ...state,
                likesList: {},
                likesListLoading: true
            }

        default:
            return state;
    }
}