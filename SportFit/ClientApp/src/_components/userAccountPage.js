import React from 'react';

import profile from "./images/profile.svg";
import vk from "./images/vk.svg";
import instagram from "./images/instagram.svg";
import email from "./images/email.svg";

const UserAccountPage = ({avatar}) => {
    return (
        <div className="userAccountPage_wrapper container-xxl">
            <div className="userAccount_content row w-100">
                <div className="avatarAndSocialLinks_block col-3">
                    <div className="avatar_wrapper row d-flex justify-content-center shadow rounded-3">
                        <img className="rounded-3" src={avatar === null ? avatar : profile} alt="ava"/>
                    </div>

                    <div className="socialLinks_wrapper shadow row p-3">
                        <div className="email_wrapper d-flex align-items-center">
                            <div className="email_icon">
                                <img src={email} alt="email" className="me-2" width="35" height="35"/>
                            </div>
                            
                            <div className="email_link w-100">
                                <input type="text" className="form-control" value="artem.kostko@mail.ru"/>
                            </div>
                        </div>
                        
                        <div className="socialNetworks_wrapper d-flex">
                            <a className="socialNetwork-link me-2" href="https://vk.com/arti_chember_one"><img src={vk} alt="" width="35" height="35"/></a>
                            <a className="socialNetwork-link me-2" href="https://www.instagram.com/artemkostko/"><img src={instagram} alt="" width="35" height="35"/></a>
                        </div>
                    </div>
                </div>
                
                <div className="userInfoAndPrograms col-9 ps-5">
                    <div className="userInfo_wrapper d-flex flex-column justify-content-between shadow row p-3">
                        <div className="nickName fw-bold">artemkostko</div>

                        <div className="info_wrapper">
                            <div className="info_title fw-bold">Full name</div>
                            <div className="info_text d-flex align-items-center px-4">Костко Артём Владимирович</div>
                        </div>

                        <div className="info_wrapper">
                            <div className="info_title fw-bold">Birthday</div>
                            <div className="info_text d-flex align-items-center px-4">24.02.2002</div>
                        </div>

                        <div className="info_wrapper">
                            <div className="info_title fw-bold">Mobile phone</div>
                            <a className="info_text_link d-flex align-items-center px-4" href="tel: +375296354820">+375(29)635-48-20</a>
                        </div>
                    </div>
                    
                    <div className="programs_wrapper row">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAccountPage;
