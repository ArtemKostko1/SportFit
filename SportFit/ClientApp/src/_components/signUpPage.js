import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {LOGIN_ROUTE} from "../_routing/routerConsts";
import useForm from "./utils/useForm";
import * as userActions from "../_actions/user-actions";
import * as validators from "./utils/validators/validators";
import * as interfaceFunc from "./utils/interface";
import {useToasts} from "react-toast-notifications";

const SignUpPage = ({...props}) => {
    const { addToast } = useToasts();
    
    const initialInputValues = {
        Nickname: '',
        Login: '',
        Password: '',
    }
    
    const validate = (fieldValues = values) => {
        let temp = {...errors};

        if('Nickname' in fieldValues)
            temp.Nickname = fieldValues.Nickname ? '' : "Пожалуйста введите имя пользователя";
        if('Login' in fieldValues)
            temp.Login = fieldValues.Login ? '' : "Пожалуйста введите логин";
        if('Password' in fieldValues)
            temp.Password = fieldValues.Password ? '' : "Пожалуйста введите пароль";

        setErrors({
            ...temp
        });

        if (fieldValues === values)
            return Object.values(temp).every(x => x === '');
    }

    const {
        values,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialInputValues, validate);

    const handleSubmit = e => {
        e.preventDefault();
        
        if (validate()) {
            props.register(values, () => addToast("Успешная регистрация", {appearance: 'success'}));
            resetForm();
        } else {
            addToast("Неудачная регистрация", {appearance: 'warning'});
        }
    }
    
    return (
        <div className="authorization_wrapper container-fluid p-0">
            <div className="row">
                <div className="left col-6 bg-dark">
                    <div className="photo_wrapper w-100">
                        {/*<img src={signUpBackground} alt="background"/>*/}
                    </div>
                </div>
                <div className="right col-6 d-flex justify-content-center align-items-center">
                    <div className="authorization_form_wrapper">
                        <form className="signUpUser_form needs-validation" id="signUpUser_form" autoComplete="off" noValidate onSubmit={handleSubmit}>
                            <h3 className="title fw-bold p-0">Регистрация</h3>
                            
                            <div className="input_wrapper p-0">
                                <label htmlFor="formGroupExampleInput" className="form-label text-secondary fw-bold">Имя пользователя</label>
                                <input
                                    name="Nickname"
                                    type="text" 
                                    className="form-control" 
                                    id="validationCustomUsername"
                                    value={values.Nickname}
                                    onChange={handleInputChange}
                                    required
                                    {...(errors.Nickname && { error: "true" })}/>
                                    
                                <div className="invalid-feedback">{errors.Nickname}</div>
                            </div>
                            
                            <div className="input_wrapper p-0">
                                <label htmlFor="formGroupExampleInput2" className="form-label text-secondary fw-bold">Логин</label>
                                <input
                                    name="Login"
                                    type="text" 
                                    className="form-control" 
                                    id="validationCustomLogin"
                                    value={values.Login}
                                    onChange={handleInputChange}
                                    required
                                    {...(errors.Login && { error: "true" })}/>
                                    
                                <div className="invalid-feedback">{errors.Login}</div>
                            </div>
                            
                            <div className="input_wrapper p-0">
                                <label htmlFor="validationCustomPassword" className="form-label text-secondary fw-bold">Пароль;</label>
                                <input
                                    name="Password"
                                    type="password" 
                                    className="form-control" 
                                    id="validationCustomPassword"
                                    value={values.Password}
                                    onChange={handleInputChange}
                                    required
                                    {...(errors.Password && { error: "true" })}/>
                                    
                                <div className="invalid-feedback">{errors.Password}</div>
                            </div>
                            
                            <div className="button_wrapper p-0">
                                <button 
                                    type="submit" 
                                    className="btn btn-primary w-100 fw-bold"
                                    onClick={validators.checkValidation('signUpUser_form')}>
                                    Создать аккаунт
                                </button>
                            </div>

                            <div className="link_wrapper d-flex justify-content-center align-items-center p-0">
                                <span className="fw-bold me-1">Уже есть аккаунт?</span>
                                <Link 
                                    to={LOGIN_ROUTE} 
                                    className="link-primary fw-bold"
                                    onClick={interfaceFunc.scrollToTop}>
                                    Войдите
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = userState => ({
    userItem: userState.userReducer.userItem
});

const mapActionToProps = {
    register: userActions.register
}

export default connect(mapStateToProps, mapActionToProps)(SignUpPage);