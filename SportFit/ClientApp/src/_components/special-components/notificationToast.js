import React from 'react';
import logo from "../images/logo.svg";
import dateFormat from "../utils/dateFormat";

const NotificationToast = ({body}) => {
    return (
        <div className="notificationToast_wrapper position-fixed bottom-0 end-0 p-3">
            <div id="notificationToast" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header d-flex align-items-center">
                    <img src={logo} className="rounded me-2" alt="logo" width="25" height="25"/>
                    <strong className="me-auto">SportFit</strong>
                    <small>{dateFormat(new Date(),':', 5)}</small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"/>
                </div>
                <div className="toast-body">
                    {body}
                </div>
            </div>
        </div>
    );
};

export default NotificationToast;
