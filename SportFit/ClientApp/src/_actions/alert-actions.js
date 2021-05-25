import { alertActionTypes } from '/_constants/alertActionTypes';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: alertActionTypes.ALERT_SUCCESS, message };
}

function error(message) {
    return { type: alertActionTypes.ALERT_ERROR, message };
}

function clear() {
    return { type: alertActionTypes.ALERT_CLEAR };
}