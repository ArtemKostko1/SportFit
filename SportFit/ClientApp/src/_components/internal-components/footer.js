import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import {MAIN_ROUTE} from "../../_routing/routerConsts";
import * as programActions from '../../_actions/program-actions';

import logo from "../images/Logo.svg";
import facebook from "../images/facebook.svg";
import vk from "../images/vk.svg";
import twitter from "../images/twitter.svg";
import telegram from "../images/telegram.svg";
import instagram from "../images/instagram.svg";

const Footer = ({fetchAllPrograms, programList}) => {
    useEffect(() => {
        fetchAllPrograms();
    }, []);
    
    return (
        <div className="footer_wrapper bg-dark mt-auto">
            <div className="footer_content container-xxl p-0">
                <div className="top row-12 d-flex">
                    <div className="left_block col-5">
                        <div className="brand">
                            <a className="d-flex align-items-center" href="#">
                                <img src={logo} alt="" width="50" height="50"/>
                                <h2 className="brandName fw-bold ms-3 mb-0">SportFit</h2>
                            </a>
                        </div>
                        
                        <div className="text">
                            <span>SportFit is the world’s leading community of coaches and athletes who share, has progressed and enjoy.</span>
                        </div>
                        
                        <div className="socialNetworks d-flex">
                            <a className="socialNetwork-link me-2" href="https://www.facebook.com/ArtiKostko"><img src={facebook} alt="" width="35" height="35"/></a>
                            <a className="socialNetwork-link me-2" href="https://vk.com/arti_chember_one"><img src={vk} alt="" width="35" height="35"/></a>
                            <a className="socialNetwork-link me-2" href="https://twitter.com/ArtemKostko"><img src={twitter} alt="" width="35" height="35"/></a>
                            <a className="socialNetwork-link me-2" href="https://t.me/Artem4ekK"><img src={telegram} alt="" width="35" height="35"/></a>
                            <a className="socialNetwork-link me-2" href="https://www.instagram.com/artemkostko/"><img src={instagram} alt="" width="35" height="35"/></a>
                        </div>
                    </div>
                    
                    <div className="center_block col-5 d-flex justify-content-center">
                        <div className="links_content col-4 d-flex flex-column">
                            <h6 className="title fw-bold">Company</h6>
                            <Link to="">About Us</Link>
                            <Link to="">Support</Link>
                            <Link to="">Profile</Link>
                            <Link to={MAIN_ROUTE}>Home</Link>
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
                            
                            <a href="">
                                <i className="bi bi-geo-alt me-2"/>
                                Our address
                            </a>
                        </div>
                    </div>
                    
                    <div className="right_block col-2">
                        <span>There is no such thing as an accident. What we call by that name is the effect of some cause which we do not see.</span>
                    </div>
                </div>
                
                <div className="bottom row-12 d-flex justify-content-between">
                    <span>© 2021 SportFit. All rights reserved.</span>
                    <span>{programList.length} programs on SportFit.</span>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = programState => ({
    programList: programState.programReducer.programList
});

const mapActionToProps = {
    fetchAllPrograms: programActions.fetchAllPrograms
}

export default connect(mapStateToProps, mapActionToProps)(Footer);