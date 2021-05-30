import React, { useEffect } from 'react';
import {connect} from "react-redux";
import * as userActions from "../_actions/user-actions";

import profile from "./images/profile.svg";
import vkIcon from "./images/vk.svg";
import instagramIcon from "./images/instagram.svg";
import emailIcon from "./images/email.svg";


const UserAccountPage = ({match, fetchUserById, userItem}) => {
    const { id } = match.params;
    
    useEffect(() => {
        fetchUserById(id);
    }, []);

    const { avatar, nickname, fullName, birthDate, mobilePhone, email, vk, instagram  } = userItem;
    
    return (
        <div className="userAccountPage_wrapper container-xxl">
            <div className="userAccount_content row w-100">
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
                                vk === null ?
                                <a className="socialNetwork-link me-2" href={vk}><img src={vkIcon} alt="" width="35" height="35"/></a> :
                                null
                            }
                            {
                                instagram === null ?
                                <a className="socialNetwork-link me-2" href={instagram}><img src={instagramIcon} alt="" width="35" height="35"/></a> :
                                null
                            }
                        </div>
                    </div>
                </div>
                
                <div className="userInfoAndPrograms col-9 ps-5">
                    <div className="userInfo_wrapper d-flex flex-column justify-content-between shadow row p-3">
                        <div className="nickName fw-bold">{nickname}</div>

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
                            <a className="info_text_link d-flex align-items-center px-4" href="tel: +375296354820">{mobilePhone}</a>
                        </div>
                    </div>
                    
                    <div className="programs_wrapper row">
                        
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

export default connect(mapStateToProps, mapActionToProps)(UserAccountPage);
