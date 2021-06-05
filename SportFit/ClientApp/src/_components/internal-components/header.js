import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import * as interfaceFunc from "../utils/interface";
import {
    MAIN_ROUTE, PROGRAMS_LISTENING_ROUTE, LOGIN_ROUTE, ACCOUNT_ROUTE,
    USER_PROGRAMS_ROUTE, USER_SELECTED_ROUTE, SUPPORT_ROUTE, SETTINGS_ROUTE, REGISTER_ROUTE
} from "../../_routing/routerConsts";

import profiler from '../images/profile.svg';
import logo from "../images/logo.svg";


const Header = ({authUser}) => {
    useEffect(() => {
        
    }, [authUser.avatar]);
    
    return (
        <header className="header sticky-top bg-dark">
            <nav className="navbar navbar-expand-md container-xxl navbar-dark bg-dark p-0">
                <div className="navbar_wrapper container-fluid">
                    <div className="brand">
                        <NavLink to={MAIN_ROUTE} onClick={interfaceFunc.scrollToTop}>
                            <div className="brand_wrapper d-flex align-items-center h-100">
                                <img src={logo} alt="" width="50" height="50"/>
                                <span className="navbar-brand fw-bold ms-2 p-0">SportFit</span>
                            </div>
                        </NavLink>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className = "navbar-toggler-icon"/>
                        </button>
                    </div>

                    <div id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item d-flex align-items-center">
                                <NavLink 
                                    to={PROGRAMS_LISTENING_ROUTE} 
                                    className="nav-link fw-bold active" 
                                    aria-current="page"
                                    onClick={interfaceFunc.scrollToTop}>
                                    Programs
                                </NavLink>
                            </li>
                            
                            <li className="nav-item dropdown ms-5">
                                <a className="nav-link navbar-logo dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div className="avatar_wrapper rounded-circle d-flex justify-content-center align-items-center">
                                        <img src=
                                                 {
                                                      authUser.avatar === null || authUser.avatar === '' || authUser.avatar === undefined ?
                                                          profiler :
                                                          authUser.avatar
                                                 } 
                                             alt="avatar" width="auto" height="100%"/>
                                    </div>
                                </a>
                                
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <NavLink to={ACCOUNT_ROUTE} className="dropdown-item" onClick={interfaceFunc.scrollToTop}>
                                            Yuor Profile
                                        </NavLink>
                                    </li>
                                    
                                    <li>
                                        <NavLink to={USER_PROGRAMS_ROUTE} className="dropdown-item" onClick={interfaceFunc.scrollToTop}>
                                            Yuor Programs
                                        </NavLink>
                                    </li>
                                    
                                    <li>
                                        <NavLink to={USER_SELECTED_ROUTE} className="dropdown-item" onClick={interfaceFunc.scrollToTop}>
                                            Your Selected
                                        </NavLink>
                                    </li>
                                    
                                    <li><hr className="dropdown-divider"/></li>
                                    
                                    <li>
                                        <NavLink to={SUPPORT_ROUTE} className="dropdown-item" onClick={interfaceFunc.scrollToTop}>
                                            Support
                                        </NavLink>
                                    </li>
                                    
                                    <li>
                                        <NavLink to={SETTINGS_ROUTE} className="dropdown-item" onClick={interfaceFunc.scrollToTop}>
                                            Settings
                                        </NavLink>
                                    </li>
                                    
                                    <li>
                                        <NavLink to={LOGIN_ROUTE} className="dropdown-item" onClick={interfaceFunc.scrollToTop}>
                                            Login
                                        </NavLink>
                                    </li>
                                    
                                    <li>
                                        <NavLink 
                                            to={REGISTER_ROUTE} className="dropdown-item" onClick={interfaceFunc.scrollToTop}>
                                            Registration
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

const mapStateToProps = state => ({
    authUser: state.userReducer.authUser
});

const mapActionToProps = {
    
}

export default connect(mapStateToProps, mapActionToProps)(Header);