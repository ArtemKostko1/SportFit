import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import {MAIN_ROUTE, ACCOUNT_ROUTE} from "../../_routing/routerConsts";
import * as programActions from '../../_actions/program-actions';
import * as interfaceFunctions from "../utils/interface";

import Tippy from "@tippy.js/react";
import 'tippy.js/dist/tippy.css';
import logo from "../images/logo.svg";
import facebook from "../images/facebook.svg";
import vk from "../images/vk.svg";
import twitter from "../images/twitter.svg";
import telegram from "../images/telegram.svg";
import instagram from "../images/instagram.svg";

import NotificationToast from "../special-components/notificationToast";


const Footer = ({fetchAllPrograms, programsList}) => {

    const body = [
        
    ]
    
    useEffect(() => {
        fetchAllPrograms();
    }, []);
    
    return (
        <div className="footer_wrapper bg-dark mt-auto">
            <div className="footer_content container-xxl p-0">
                <div className="top row-12 d-flex">
                    <div className="left_block col-5">
                        <div className="brand d-flex align-items-center">
                            <img src={logo} alt="" width="50" height="50"/>
                            <h2 className="brandName fw-bold ms-3 mb-0">SportFit</h2>
                        </div>
                        
                        <div className="text">
                            <span>SportFit is the world’s leading community of coaches and athletes who share, has progressed and enjoy.</span>
                        </div>
                        
                        <div className="socialNetworks d-flex">
                            <Tippy content="Facebook">
                                <a className="socialNetwork-link me-2" href="https://www.facebook.com/ArtiKostko" target="_blank">
                                    <img src={facebook} alt="" width="35" height="35"/>
                                </a>
                            </Tippy>
                            
                            <Tippy content="Vk">
                                <a className="socialNetwork-link me-2" href="https://vk.com/arti_chember_one" target="_blank">
                                    <img src={vk} alt="" width="35" height="35"/>
                                </a>
                            </Tippy>
                            
                            <Tippy content="Twitter">
                                <a className="socialNetwork-link me-2" href="https://twitter.com/ArtemKostko" target="_blank">
                                    <img src={twitter} alt="" width="35" height="35"/>
                                </a>
                            </Tippy>
                            
                            <Tippy content="Telegram">
                                <a className="socialNetwork-link me-2" href="https://t.me/Artem4ekK" target="_blank">
                                    <img src={telegram} alt="" width="35" height="35"/>
                                </a>
                            </Tippy>
                            
                            <Tippy content="Instagram">
                                <a className="socialNetwork-link me-2" href="https://www.instagram.com/artemkostko/" target="_blank">
                                    <img src={instagram} alt="" width="35" height="35"/>
                                </a>
                            </Tippy>
                        </div>
                    </div>
                    
                    <div className="center_block col-5 d-flex justify-content-center">
                        <div className="links_content col-4 d-flex flex-column">
                            <h6 className="title fw-bold">Company</h6>
                            <Link to="" onClick={interfaceFunctions.scrollToTop}>About Us</Link>
                            <Link to="" onClick={interfaceFunctions.scrollToTop}>Support</Link>
                            <Link to={ACCOUNT_ROUTE} onClick={interfaceFunctions.scrollToTop}>Profile</Link>
                            <Link to={MAIN_ROUTE} onClick={interfaceFunctions.scrollToTop}>Home</Link>
                        </div>
                        
                        <div className="links_content col-4 d-flex flex-column">
                            <h6 className="title fw-bold">Contacts</h6>
                            <a href="tel: +375296354820">
                                <i className="bi bi-telephone me-2"/>
                                +375(29)635-48-20
                            </a>
                            
                            <a href="mailto: artem.kostko@mail.ru">
                                <i className="bi bi-envelope me-2"/>
                                artem.kostko@mail.ru
                            </a>
                            
                            <div onClick={interfaceFunctions.notificationToast}>
                                <i className="bi bi-geo-alt me-2"/>
                                Our address
                            </div>
                            <NotificationToast/>
                        </div>
                    </div>
                    
                    <div className="right_block col-2">
                        <span>There is no such thing as an accident. What we call by that name is the effect of some cause which we do not see.</span>
                    </div>
                </div>
                
                <div className="bottom row-12 d-flex justify-content-between">
                    <span>© 2021 SportFit. All rights reserved.</span>
                    <span>{programsList.length} programs on SportFit.</span>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = programState => ({
    programsList: programState.programReducer.programsList
});

const mapActionToProps = {
    fetchAllPrograms: programActions.fetchAllPrograms
}

export default connect(mapStateToProps, mapActionToProps)(Footer);