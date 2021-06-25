import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useToasts} from "react-toast-notifications";
import * as userActions from "../_actions/user-actions";
import * as validators from "./utils/validators/validators";
import useForm from "./utils/useForm";
import dateFormat from "./utils/dateFormat";

import 'tippy.js/dist/tippy.css';
import profile from "./images/profile.svg";
import emailIcon from "./images/email.svg";
import vkIcon from "./images/vk.svg";
import instagramIcon from "./images/instagram.svg";
import Footer from "./internal-components/footer";

const EditAccountPage = ({...props}) => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const { addToast } = useToasts();
    
    const initialInputValues = {
        Avatar: '',
        Login: '',
        OldPassword: '',
        Password: '',
        ConfirmPassword: '',
        FullName: '',
        BirthDate: '',
        MobilePhone: '',
        Email: '',
        Instagram: '',
        Vk: ''
    }

    const validate = (fieldValues = values) => {
        let temp = {...errors};
        
        if('Email' in fieldValues){
            temp.Email = (/^$|.+@.+../).test(fieldValues.Email) || 
                fieldValues.Email === '' || fieldValues.Email === null ? '' : 'Введите корректную почту';
        }

        setErrors({
            ...temp
        });
        
        if (fieldValues === values) {
            return Object.values(temp).every(x => x === '');
        }
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialInputValues, validate);

    const handleSubmit = e => {
        e.preventDefault();
        
        if (validate()) {
            props.updateUser(currentUser.id, values, () =>  addToast("Редактирование успешно", {appearance: 'success'}));
        } else {
            addToast(errors.Email, {appearance: 'warning'});
        }
    }

    useEffect(() => {
        const tempUser = {
            Login: currentUser.login,
            Password: currentUser.password,
            Nickname: currentUser.nickname,
            Avatar: currentUser.avatar,
            FullName: currentUser.fullName,
            BirthDate:  dateFormat(currentUser.birthDate, '-', 4),
            MobilePhone: currentUser.mobilePhone,
            Email: currentUser.email,
            Instagram: currentUser.instagram,
            Vk: currentUser.vk
        }
        
        setValues({
            ...tempUser
        })
        
    }, []);
    
    return (
        <>
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
                                                maxLength="100"
                                                value={values.Email}
                                                onChange={handleInputChange}
                                                {...errors.Email && {error: "true"}}/>
        
                                            <label htmlFor="validationCustomEmail" className="form-label text-secondary fw-bold">Email</label>
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
        
                                            <label htmlFor="validationCustomVk" className="form-label text-secondary fw-bold">ВКонтакте</label>
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
        
                                            <label htmlFor="validationCustomInstagram" className="form-label text-secondary fw-bold">Инстаграм</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="accountAndProfile col-9 ps-5">                        
                            <div className="accountInfo_wrapper">                            
                                <div className="input_wrapper p-0">
                                    <div className="form-floating">
                                        <input
                                            name="Nickname"
                                            type="text"
                                            className="form-control"
                                            id="validationCustomNickname"
                                            placeholder="Enter the nickname"
                                            maxLength="30"
                                            value={values.Nickname}
                                            onChange={handleInputChange}
                                            {...(errors.Nickname && { error: "true" })}/>
            
                                        <label htmlFor="validationCustomNickname" className="form-label text-secondary fw-bold">Имя пользователя</label>
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
                                        
                                        <label htmlFor="validationCustomNickname" className="form-label fw-bold text-warning">Логин не может быть изменён</label>
                                    </div>
                                </div>
    
                                {/*<button
                                    type="button"
                                    className="changePassword btn btn-outline-primary fw-bold">
                                    Изменить пароль
                                </button>*/}
    
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
                                <div className="input_wrapper p-0">
                                    <div className="form-floating">
                                        <input
                                            name="FullName"
                                            type="text"
                                            className="form-control"
                                            id="validationCustomFullName"
                                            placeholder="Enter the fullName"
                                            maxLength="100"
                                            value={values.FullName}
                                            onChange={handleInputChange}/>
    
                                        <label htmlFor="validationCustomFullName" className="form-label text-secondary fw-bold">ФИО</label>
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
                                            value={values.BirthDate}
                                            onChange={handleInputChange}/>
    
                                        <label htmlFor="validationCustomBirthDate" className="form-label text-secondary fw-bold text-secondary">День рождения</label>
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
                                            maxLength="16"
                                            value={values.MobilePhone}
                                            onChange={handleInputChange}/>
    
                                        <label htmlFor="validationCustomMobilePhone" className="form-label text-secondary fw-bold">Телефон</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="actions_block row">
                            <div className="col-10 pe-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 fw-bold"
                                    onClick={validators.checkValidation('editAccount_form')}>
                                    СОХРАНИТЬ
                                </button>
                            </div>
                            
                            <div className="col-2">
                                <button
                                    type="reset"
                                    className="btn btn-outline-secondary w-100 fw-bold"
                                    onClick={resetForm}>
                                    ОЧИСТИТЬ
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    
            <Footer/>
        </>
    );
};

const mapStateToProps = state => ({

});

const mapActionToProps = {
    updateUser: userActions.updateUser
}

export default connect(mapStateToProps, mapActionToProps)(EditAccountPage);
