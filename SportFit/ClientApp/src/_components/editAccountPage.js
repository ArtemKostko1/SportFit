import React, {useEffect} from 'react';
import {connect} from "react-redux";
import 'tippy.js/dist/tippy.css';
import * as userActions from "../_actions/user-actions";
import useForm from "./utils/useForm";
import dateFormat from "./utils/dateFormat";
import checkValidation from "./utils/validators/validators";

import profile from "./images/profile.svg";
import emailIcon from "./images/email.svg";
import vkIcon from "./images/vk.svg";
import instagramIcon from "./images/instagram.svg";

const EditAccountPage = ({userItem, ...props}) => {
    const currentUser = props.match.params;

    const initialInputValues = {
        Avatar: null,
        Login: null,
        OldPassword: null,
        Password: null,
        ConfirmPassword: null,
        FullName: null,
        BirthDate: null,
        MobilePhone: null,
        Email: null,
        Instagram: null,
        Vk: null
    }

    const resetValues = () => {
        document.getElementById('editAccount_form').reset();
        
        values.Avatar = null;
        values.Login = null;
        values.OldPassword = null;
        values.Password = null;
        values.FullName = null;
        values.BirthDate = null;
        values.MobilePhone = null;
        values.Email = null;
        values.Instagram = null;
        values.Vk = null;
    }

    const validate = (fieldValues = values) => {
        let temp = {};
        
        if('Email' in fieldValues)
            temp.Email = (/^$|.+@.+../).test(fieldValues.Email) ? null : "Please enter correct email";

        setErrors({
            ...temp
        });
        
        if (fieldValues === values) {
            return Object.values(temp).every(x => x === null);
        }
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialInputValues, validate);

    const handleSubmit = e => {
        e.preventDefault();
        
        if (validate()) {
            debugger
            props.updateUser(currentUser.id, values, () => {window.alert('Updated')});
        }
    }

    useEffect(() => {
        if (currentUser.id !== undefined) {
            const tempUser = {
                Login: userItem.login,
                Password: userItem.password,
                Nickname: userItem.nickname,
                Avatar: userItem.avatar,
                FullName: userItem.fullName,
                BirthDate: userItem.birthDate,
                MobilePhone: userItem.mobilePhone,
                Email: userItem.email,
                Instagram: userItem.instagram,
                Vk: userItem.vk
            }
            
            setValues({
                ...tempUser
            })
        }
    }, [currentUser.id]);
    
    return (
        <div className="editAccountPage_wrapper container-xxl">
            <div className="editAccount_content shadow">
                <form className="editAccount_form needs-validation row w-100" id="createProgram_form" autoComplete="off" onSubmit={handleSubmit}>
                    <div className="avatarAndSocialLinks_block col-3">
                        <div className="avatar_block">
                            <div className="avatar_wrapper d-flex justify-content-center align-items-center">
                                <img className="avatar_photo" src=
                                    {
                                        values.Avatar === null || values.Avatar === '' ? 
                                            profile : 
                                            values.Avatar
                                    }
                                     alt="avatar" width="auto" height="100%"/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-text" id="validationCustomAvatar">Url</span>
                                <input
                                    name="Avatar"
                                    className="avatarUrl form-control"
                                    type="text"
                                    id="validationCustomAvatar"
                                    value={values.Avatar}
                                    onChange={handleInputChange}/>
                            </div>
                        </div>
    
                        <div className="socialNetworks_wrapper">
                            <div className="title">
                                <h3 className="fw-bold">Social Networks</h3>
                            </div>
                            
                            <div className="socialLink_wrapper d-flex align-items-center">
                                <div className="social_icon">
                                    <img src={emailIcon} alt="email" className="me-2" width="35" height="35"/>
                                </div>
    
                                <div className="social_link w-100">
                                    <div className="form-floating">
                                        <input
                                            name="Email"
                                            type="text"
                                            className="form-control"
                                            id="validationCustomEmail"
                                            placeholder="Enter the email"
                                            value={values.Email}
                                            onChange={handleInputChange}/>
    
                                        <label htmlFor="validationCustomEmail" className="form-label fw-bold">Email</label>
                                        {errors.Email && window.alert("Email is not valid")}
                                        <div className="invalid-feedback">{ errors.Email}</div>
                                    </div>
                                </div>
                            </div>
    
                            <div className="socialLink_wrapper d-flex align-items-center">
                                <div className="social_icon">
                                    <img src={vkIcon} alt="email" className="me-2" width="35" height="35"/>
                                </div>
    
                                <div className="social_link w-100">
                                    <div className="form-floating">
                                        <input
                                            name="Vk"
                                            type="text"
                                            className="form-control"
                                            id="validationCustomVk"
                                            placeholder="Enter the VK link"
                                            value={values.Vk}
                                            onChange={handleInputChange}/>
    
                                        <label htmlFor="validationCustomVk" className="form-label fw-bold">VK</label>
                                    </div>
                                </div>
                            </div>
    
                            <div className="socialLink_wrapper d-flex align-items-center">
                                <div className="social_icon">
                                    <img src={instagramIcon} alt="email" className="me-2" width="35" height="35"/>
                                </div>
    
                                <div className="social_link w-100">
                                    <div className="form-floating">
                                        <input
                                            name="Instagram"
                                            type="text"
                                            className="form-control"
                                            id="validationCustomInstagram"
                                            placeholder="Enter the name"
                                            value={values.Instagram}
                                            onChange={handleInputChange}/>
    
                                        <label htmlFor="validationCustomInstagram" className="form-label fw-bold">Instagram</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="accountAndProfile col-9 ps-5">                        
                        <div className="accountInfo_wrapper">
                            <div className="title">
                                <h3 className="fw-bold">Account</h3>
                            </div>
                            
                            <div className="input_wrapper p-0">
                                <div className="form-floating">
                                    <input
                                        name="Nickname"
                                        type="text"
                                        className="form-control"
                                        id="validationCustomNickname"
                                        placeholder="Enter the nickname"
                                        value={values.Nickname}
                                        onChange={handleInputChange}
                                        {...(errors.Nickname && { error: "true" })}/>
        
                                    <label htmlFor="validationCustomNickname" className="form-label fw-bold">Nickname</label>
                                    <div className="invalid-feedback">{errors.Nickname}</div>
                                </div>
                            </div>

                            <div className="input_wrapper p-0">
                                <div className="form-floating">
                                    <input
                                        name="Login"
                                        type="text"
                                        className="form-control disabled"
                                        id="validationCustomLogin"
                                        value={values.Login}/>
                                    
                                    <label htmlFor="validationCustomNickname" className="form-label fw-bold text-warning">Login cannot be changed</label>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="changePassword btn btn-outline-primary fw-bold">
                                Change password
                            </button>

                            {/*<div className="input_wrapper p-0">
                                <div className="form-floating">
                                    <input
                                        name="OldPassword"
                                        type="password"
                                        className="form-control"
                                        id="validationCustomFullOldPassword"
                                        placeholder="Enter the old password"
                                        value={values.OldPassword}
                                        onChange={handleInputChange}/>
    
                                    <label htmlFor="validationCustomOldPassword" className="form-label fw-bold">Old password</label>
                                </div>
                            </div>

                            <div className="input_wrapper p-0">
                                <div className="form-floating">
                                    <input
                                        name="Password"
                                        type="password"
                                        className="form-control"
                                        id="validationCustomPassword"
                                        placeholder="Enter the new password"
                                        value={values.Password}
                                        onChange={handleInputChange}/>
    
                                    <label htmlFor="validationCustomPassword" className="form-label fw-bold">New password</label>
                                </div>
                            </div>

                            <div className="input_wrapper p-0">
                                <div className="form-floating">
                                    <input
                                        name="ConfirmPassword"
                                        type="password"
                                        className="form-control"
                                        id="validationCustomConfirmPassword"
                                        placeholder="Confirm your new password"
                                        value={values.ConfirmPassword}
                                        onChange={handleInputChange}/>
    
                                    <label htmlFor="validationCustomConfirmPassword" className="form-label fw-bold">Confirm password</label>
                                </div>
                            </div>*/}
                        </div>
    
                        <div className="profile_wrapper">
                            <div className="title">
                                <h3 className="fw-bold">Profile</h3>
                            </div>
                            
                            <div className="input_wrapper p-0">
                                <div className="form-floating">
                                    <input
                                        name="FullName"
                                        type="text"
                                        className="form-control"
                                        id="validationCustomFullName"
                                        placeholder="Enter the fullName"
                                        value={values.FullName}
                                        onChange={handleInputChange}/>

                                    <label htmlFor="validationCustomFullName" className="form-label fw-bold">FullName</label>
                                </div>
                            </div>

                            <div className="input_wrapper p-0">
                                <div className="form-floating">
                                    <input
                                        name="BirthDate"
                                        type="date"
                                        className="form-control"
                                        id="validationCustomBirthDate"
                                        placeholder="Enter the birthDate"
                                        value={dateFormat(`${values.BirthDate}`)}
                                        onChange={handleInputChange}/>

                                    <label htmlFor="validationCustomBirthDate" className="form-label fw-bold text-secondary">Birthday</label>
                                </div>
                            </div>

                            <div className="input_wrapper p-0">
                                <div className="form-floating">
                                    <input
                                        name="MobilePhone"
                                        type="text"
                                        className="form-control"
                                        id="validationCustomMobilePhone"
                                        placeholder="Enter the mobilePhone"
                                        value={values.MobilePhone}
                                        onChange={handleInputChange}/>

                                    <label htmlFor="validationCustomMobilePhone" className="form-label fw-bold">MobilePhone</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="actions_block row">
                        <div className="col-11 pe-3">
                            <button
                                type="submit"
                                className="createProgram btn btn-primary w-100 fw-bold"
                                onClick={checkValidation('editAccount_form')}>
                                SAVE
                            </button>
                        </div>
                        <div className="col-1">
                            <button
                                type="reset"
                                className="createProgram btn btn-outline-secondary w-100 fw-bold"
                                onClick={resetValues}>
                                CLEAR
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    userItem: state.userReducer.userItem
});

const mapActionToProps = {
    updateUser: userActions.updateUser
}

export default connect(mapStateToProps, mapActionToProps)(EditAccountPage);
