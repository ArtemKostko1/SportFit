import { alertActionTypes } from '../_actions/_constants/alertActionTypes';

const alertInitialState = {
    statusCode: '',
    message: '',
}

export const alertReducer = (state = alertInitialState, {type, payload}) => {
    switch (type) {            
        case alertActionTypes.ALERT_ERROR:
            return {
                statusCode: payload.code.statusCode,
                message: payload.message
            };

        case alertActionTypes.CHECK_ERROR:
            return {
                ...state
            };
            
        default:
            return state
    }
}