import React from 'react';
import logo from "../images/logo.svg";
import dateFormat from "../utils/dateFormat";

const NotificationToast = () => {
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
                    <div>
                        <a
                            target="_blank"
                            href="https://yandex.by/maps/org/minskiy_gosudarstvenny_kolledzh_elektroniki/1018469854/?utm_medium=mapframe&utm_source=maps">
                            Минский государственный колледж электроники
                        </a>

                        <iframe
                            src="https://yandex.by/map-widget/v1/-/CCUaN4aIcB"
                            width="100%" height="400"
                            frameBorder="1"
                            allowFullScreen="true"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationToast;
