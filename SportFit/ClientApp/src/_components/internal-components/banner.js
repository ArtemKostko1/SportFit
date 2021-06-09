import React from 'react';
import {Link} from "react-router-dom";
import {CREATE_PROGRAM_ROUTE} from "../../_routing/routerConsts";
import * as interfaceFunc from "../utils/interface";

const Banner = () => {
    return (
        <div className="banner_wrapper">
            <div className="banner_blackout d-flex flex-column justify-content-center align-items-center">
                <div className="content d-flex flex-column align-items-center">
                    <h2 className="title">Создай свою персональную программу</h2>
                    <span>Стань тренером для всех</span>
                </div>

                <div className="button_wrapper">
                    <Link to={CREATE_PROGRAM_ROUTE} onClick={interfaceFunc.scrollToTop}>
                        <button type="#" className="btn btn-outline-light rounded-pill fw-bold">СОЗДАТЬ</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Banner;