import React, { useEffect } from 'react';
import {connect} from "react-redux";
import Tippy from "@tippy.js/react";
import 'tippy.js/dist/tippy.css';
import * as userActions from "../_actions/user-actions";

import profile from "./images/profile.svg";
import vkIcon from "./images/vk.svg";
import instagramIcon from "./images/instagram.svg";
import emailIcon from "./images/email.svg";
import {EDIT_ACCOUNT_ROUTE} from "../_routing/routerConsts";
import {Link} from "react-router-dom";


const AccountPage = ({match, fetchUserById, userItem}) => {
    const currentUser = match.params;
    
    useEffect(() => {
        fetchUserById(currentUser.id);
    }, [currentUser.id]);

    const { avatar, nickname, fullName, birthDate, mobilePhone, email, vk, instagram  } = userItem;
    
    return (
        <div className="accountPage_wrapper container-xxl">
            <div className="account_content row w-100">
                <div className="avatarAndSocialLinks_block col-3">
                    <div className="avatar_wrapper d-flex justify-content-center align-items-center shadow rounded-3">
                        <img className="avatar_photo rounded-3" src={avatar === null || avatar === '' ? profile : avatar} alt="avatar" width="auto" height="100%"/>
                    </div>

                    <div className="socialLinks_wrapper shadow p-3">
                        <div className="email_wrapper d-flex align-items-center">
                            <div className="email_icon">
                                <img src={emailIcon} alt="email" className="me-2" width="35" height="35"/>
                            </div>
                            
                            <div className="email_link w-100">
                                <input type="text" className="email form-control" value={email}/>
                            </div>
                        </div>
                        
                        <div className="socialNetworks_wrapper d-flex">
                            {
                                vk !== null ?
                                    <a className="socialNetwork-link me-2" href={vk} target="_blank">
                                        <img src={vkIcon} alt="" width="35" height="35"/>
                                    </a> :
                                    null
                            }
                            {
                                instagram !== null ?
                                    <a className="socialNetwork-link me-2" href={instagram} target="_blank">
                                        <img src={instagramIcon} alt="" width="35" height="35"/>
                                    </a> :
                                    null
                            }
                        </div>
                    </div>
                </div>
                
                <div className="userInfoAndPrograms col-9 ps-5">
                    <div className="userInfo_wrapper d-flex flex-column justify-content-between shadow row p-3">
                        <div className="top_block d-flex justify-content-between">
                            <div className="nickName fw-bold">{nickname}</div>
                            
                            <Link to={`${EDIT_ACCOUNT_ROUTE}/${currentUser.id}`}>
                                <Tippy content="Edit profile">
                                    <button className="btn btn-outline-secondary d-flex justify-content-center align-items-center p-0" type="button">
                                        <i className="fa fa-pencil"/>
                                    </button>
                                </Tippy>
                            </Link>
                        </div>

                        <div className="info_wrapper">
                            <div className="info_title fw-bold">Full name</div>
                            <div className="info_text d-flex align-items-center px-4">{fullName}</div>
                        </div>

                        <div className="info_wrapper">
                            <div className="info_title fw-bold">Birthday</div>
                            <div className="info_text d-flex align-items-center px-4">{birthDate}</div>
                        </div>

                        <div className="info_wrapper">
                            <div className="info_title fw-bold">Mobile phone</div>
                            <a className="info_text_link d-flex align-items-center px-4" href={`tel: ${mobilePhone}`}>{mobilePhone}</a>
                        </div>
                    </div>
                    
                    <div className="_wrapper row">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    userItem: state.userReducer.userItem
});

const mapActionToProps = {
    fetchUserById: userActions.fetchUserById
}

export default connect(mapStateToProps, mapActionToProps)(AccountPage);
