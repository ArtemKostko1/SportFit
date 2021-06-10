import React, { useEffect } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Tippy from "@tippy.js/react";
import 'tippy.js/dist/tippy.css';
import {EDIT_ACCOUNT_ROUTE} from "../_routing/routerConsts";
import * as userActions from "../_actions/user-actions";
import dateFormat from "./utils/dateFormat";

import profile from "./images/profile.svg";
import vkIcon from "./images/vk.svg";
import instagramIcon from "./images/instagram.svg";
import emailIcon from "./images/email.svg";
import Footer from "./internal-components/footer";


const AccountPage = ({match, fetchUserById, userRequested, userItem}) => {
    let currentUser = match.params;
    
    useEffect(() => {
        if(currentUser.id !== undefined) {
            fetchUserById(currentUser.id);
        }
        
        return () => {
            userRequested();
        }
    }, [currentUser.id]);
    
    let userTemp = currentUser.id !== undefined ? {...userItem} : {...JSON.parse(localStorage.getItem('user'))};
    const { avatar, nickname, fullName, birthDate, mobilePhone, email, vk, instagram } = userTemp;
        
    return (
        <>
            <div className="accountPage_wrapper container-xxl">
                <div className="account_content row w-100">
                    <div className="avatarAndSocialLinks_block col-3">
                        <div className="avatar_wrapper d-flex justify-content-center align-items-center shadow rounded-3">
                            <img className="avatar_photo rounded-3" src={avatar === null || avatar === '' ? profile : avatar} alt="avatar" width="auto" height="100%"/>
                        </div>
    
                        {
                            (email === null || email === '') && (vk === null || vk === '') && (instagram === null || instagram === '') ?
                                null :
                                <div className="socialLinks_wrapper shadow">
                                    {
                                        email === null || email === '' ?
                                            null :
                                            <div className="email_wrapper d-flex align-items-center">
                                                <div className="email_icon">
                                                    <img src={emailIcon} alt="email" className="me-2" width="35" height="35"/>
                                                </div>
    
                                                <Tippy content="Почта">
                                                    <div className="email_link w-100">
                                                        <input type="text" className="email form-control disabled" value={email}/>
                                                    </div>
                                                </Tippy>
                                            </div>
                                    }
    
                                    <div className="socialNetworks_wrapper d-flex">
                                        {
                                            vk === null || vk === '' ?
                                                null :
                                                <Tippy content="ВКонтакте">
                                                    <a className="socialNetwork-link me-2" href={vk} target="_blank">
                                                        <img src={vkIcon} alt="" width="35" height="35"/>
                                                    </a>
                                                </Tippy>
                                        }
                                        {
                                            instagram === null || instagram === '' ?
                                                null :
                                                <Tippy content="Инстаграм">
                                                    <a className="socialNetwork-link me-2" href={instagram} target="_blank">
                                                        <img src={instagramIcon} alt="" width="35" height="35"/>
                                                    </a>
                                                </Tippy>
                                        }
                                    </div>
                                </div>
                        }
                    </div>
                    
                    <div className="userInfoAndPrograms col-9 ps-5">
                        <div className="userInfo_wrapper d-flex flex-column justify-content-between shadow row p-3">
                            <div className="top_block d-flex justify-content-between">
                                <div className="nickName fw-bold">{nickname}</div>
                                
                                {
                                    currentUser.id === undefined ?
                                        <Link to={EDIT_ACCOUNT_ROUTE}>
                                            <Tippy content="Редактировать">
                                                <button className="btn btn-outline-secondary d-flex justify-content-center align-items-center p-0" type="button">
                                                    <i className="fa fa-pencil"/>
                                                </button>
                                            </Tippy>
                                        </Link> :
                                        null
                                }
                            </div>
    
                            <div className="info_wrapper">
                                <div className="title fw-bold">ФИО</div>
                                <div className="content d-flex align-items-center px-4">
                                    <span>{fullName}</span>
                                </div>
                            </div>
    
                            <div className="info_wrapper">
                                <div className="title fw-bold">День рождения</div>
                                <div className="content d-flex align-items-center px-4">
                                    <span>{dateFormat(birthDate)}</span>
                                </div>
                            </div>
    
                            <div className="info_wrapper">
                                <div className="title fw-bold">Телефон</div>
                                <div className="content d-flex align-items-center px-4">
                                    <Tippy content="Call">
                                        <a className="content_link" href={`tel: ${mobilePhone}`}>{mobilePhone}</a>
                                    </Tippy>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <Footer/>
        </>
    );
};

const mapStateToProps = state => ({
    userItem: state.userReducer.userItem
});

const mapActionToProps = {
    fetchUserById: userActions.fetchUserById,
    userRequested: userActions.userRequested
}

export default connect(mapStateToProps, mapActionToProps)(AccountPage);
