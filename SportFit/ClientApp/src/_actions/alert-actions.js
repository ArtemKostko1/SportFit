import { alertActionTypes } from './_constants/alertActionTypes';

export const success = (message) => {
    return { type: alertActionTypes.ALERT_SUCCESS, message };
}

export const checkError = () => dispatch => {
    dispatch({
        type: alertActionTypes.CHECK_ERROR
    });
}
