import React from 'react';
import {Link} from "react-router-dom";
import {CREATE_PROGRAM_ROUTE} from "../../_routing/routerConsts";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner_blackout d-flex flex-column justify-content-center align-items-center">
                <div className="content d-flex flex-column align-items-center">
                    <h2 className="title">Create your personal program</h2>
                    <span>Become a coach for everyone</span>
                </div>

                <div className="button_wrapper">
                    <Link to={CREATE_PROGRAM_ROUTE}>
                        <button type="#" className="btn btn-outline-light rounded-pill fw-bold">CREATE</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Banner;