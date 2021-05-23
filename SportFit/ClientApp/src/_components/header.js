import React from 'react';
import {NavLink} from "react-router-dom";

import {MAIN_ROUTE, PROGRAMS_LISTENING_ROUTE, LOGIN_ROUTE} from "../_routing/routerConsts";

import profiler from './images/profile.svg';
import logo from "./images/Logo.svg";

const Header = () => {
    return (
        <header className="header bg-dark">
            <nav className="navbar navbar-expand-md container-xxl navbar-dark bg-dark p-0">
                <div className="navbar_wrapper container-fluid">
                    <div className="brand d-flex align-items-center">
                        <NavLink to={MAIN_ROUTE}>
                            <img src={logo} alt="" width="50" height="50"/>
                            <span className="navbar-brand fw-bold ms-2 p-0" href="#">SportFit</span>
                        </NavLink>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className = "navbar-toggler-icon"/>
                        </button>
                    </div>

                    <div id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item d-flex align-items-center">
                                <NavLink to={PROGRAMS_LISTENING_ROUTE} className="nav-link fw-bold active" aria-current="page">Programs</NavLink>
                            </li>
                            
                            <li className="nav-item dropdown ms-5">
                                <a className="nav-link navbar-logo dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={profiler} alt="" width="40" height="40"/>
                                </a>
                                
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Yuor Profile</a></li>
                                    <li><a className="dropdown-item" href="#">Yuor Programs</a></li>
                                    <li><a className="dropdown-item" href="#">Your Selected</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Support</a></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li>
                                        <NavLink
                                            to={ LOGIN_ROUTE }
                                            className="dropdown-item">
                                            Exit
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

export default Header;