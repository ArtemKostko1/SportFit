import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import * as interfaceFunc from "../utils/interface";
import {
    MAIN_ROUTE, PROGRAMS_LISTENING_ROUTE, LOGIN_ROUTE, ACCOUNT_ROUTE,
    USER_PROGRAMS_ROUTE, USER_SELECTED_ROUTE, SUPPORT_ROUTE, REGISTER_ROUTE
} from "../../_routing/routerConsts";

import profiler from '../images/profile.svg';
import logo from "../images/logo.svg";
import * as userActions from "../../_actions/user-actions";


const Header = ({userAuthenticated, logout, authUser}) => {
    useEffect(() => {
        userAuthenticated();
    }, []);
    
    const currentUser = JSON.parse(localStorage.getItem('user'));
    
    const onLogout= () => {
        logout();
    }
    
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
                                    Программы и планы
                                </NavLink>
                            </li>
                            
                            <li className="nav-item dropdown ms-5">
                                <a className="nav-link navbar-logo dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div className="avatar_wrapper rounded-circle d-flex justify-content-center align-items-center">
                                        <img src=
                                                 {
                                                     authUser === null ?
                                                         profiler :
                                                         (authUser.avatar === null || authUser.avatar === '' ? 
                                                             profiler :
                                                             authUser.avatar
                                                         )
                                                          
                                                 } 
                                             alt="avatar" width="auto" height="100%"/>
                                    </div>
                                </a>
                                
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                    {
                                        currentUser !== null ?
                                            <>
                                                <NavLink className="routeLink" to={ACCOUNT_ROUTE} onClick={interfaceFunc.scrollToTop}>
                                                    <li className="dropdown-item">
                                                        Мой профиль
                                                    </li>
                                                </NavLink>
                                                
                                                <NavLink className="routeLink" to={USER_PROGRAMS_ROUTE} onClick={interfaceFunc.scrollToTop}>
                                                    <li className="dropdown-item">
                                                        Мои программы
                                                    </li>
                                                </NavLink>
                                                
                                                <NavLink className="routeLink" to={USER_SELECTED_ROUTE} onClick={interfaceFunc.scrollToTop}>
                                                    <li className="dropdown-item">
                                                        Избранные
                                                    </li>
                                                </NavLink>

                                                <li>
                                                    <hr className="dropdown-divider"/>
                                                </li>
                                            </> :
                                            null
                                    }
                                    
                                    <NavLink className="routeLink" to={SUPPORT_ROUTE} onClick={interfaceFunc.scrollToTop}>
                                        <li className="dropdown-item">
                                            Поддержка
                                        </li>
                                    </NavLink>
                                    
                                    
                                    {
                                        currentUser === null ?
                                            <>
                                                <NavLink to={LOGIN_ROUTE} className="routeLink" onClick={interfaceFunc.scrollToTop}>
                                                    <li className="dropdown-item">
                                                        Вход
                                                    </li>
                                                </NavLink>
                                                
                                                <NavLink to={REGISTER_ROUTE} className="routeLink" onClick={interfaceFunc.scrollToTop}>
                                                    <li className="dropdown-item">
                                                        Регистрация
                                                    </li>
                                                </NavLink>
                                            </> :

                                            <NavLink className="routeLink" to={MAIN_ROUTE} onClick={interfaceFunc.scrollToTop}>
                                                <li
                                                    className="dropdown-item"
                                                    onClick={() => onLogout()}>
                                                        Выход
                                                </li>
                                            </NavLink>
                                    }
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
    userAuthenticated: userActions.userAuthenticated,
    logout: userActions.logout
}

export default connect(mapStateToProps, mapActionToProps)(Header);