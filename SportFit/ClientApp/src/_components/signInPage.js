import React from 'react';
import {connect} from "react-redux";
import {useToasts} from "react-toast-notifications";
import {Link} from "react-router-dom";
import * as userActions from "../_actions/user-actions";
import * as alertActions from "../_actions/alert-actions";
import * as validators from "./utils/validators/validators";
import * as interfaceFunc from "./utils/interface";
import useForm from "./utils/useForm";
import {REGISTER_ROUTE} from "../_routing/routerConsts";

const SignInPage = ({statusCode, ...props}) => {
    const { addToast } = useToasts();
    
    const initialInputValues = {
        Login: '',
        Password: ''
    }
    
    const validate = (fieldValues = values) => {
        let temp = {};
        
        if('Login' in fieldValues)
            temp.Login = fieldValues.Login ? "" : "Пожалуйста введите логин";
        if('Password' in fieldValues)
            temp.Password = fieldValues.Password ? "" : "Пожалуйста введите пароль";

        setErrors({
            ...temp
        });

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "");
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
            props.authenticate(values, () => addToast("Успешная аутентификация", {appearance: 'success'}));
            resetForm();
        } else {
            addToast("Неудачная аутентификация", {appearance: 'warning'});
        }
    }
    
    return (
        <div className="authorization_wrapper container-fluid p-0">
            <div className="row">
                <div className="left col-6 bg-dark">
                    <div className="photo_wrapper w-100">
                        
                    </div>
                </div>
                <div className="right col-6 d-flex justify-content-center align-items-center">
                    <div className="authorization_form_wrapper">
                        <form className="signInUser_form needs-validation" id="signInUser_form" autoComplete="off" noValidate onSubmit={handleSubmit}>
                            <h3 className="title fw-bold p-0">Вход</h3>
                            
                            <div className="input_wrapper p-0">
                                <label htmlFor="validationCustomLogin" className="form-label text-secondary fw-bold">Логин</label>
                                <input
                                    name="Login"
                                    type="text" 
                                    className="form-control" 
                                    id="validationCustomLogin"
                                    maxLength="50"
                                    value={values.Login}
                                    onChange={handleInputChange}
                                    required
                                    {...(errors.Login && { error: "true" })}/>

                                <div className="invalid-feedback">{errors.Login}</div>
                            </div>
                            
                            <div className="input_wrapper p-0">
                                <label htmlFor="validationCustomPassword" className="form-label text-secondary fw-bold">Пароль&#160;</label>
                                <label htmlFor="validationCustomPassword" className="form-label info">(Не менее 6 знаков)</label>
                                <input
                                    name="Password"
                                    type="password" 
                                    className="form-control" 
                                    id="validationCustomPassword"
                                    maxLength="50"
                                    value={values.Password}
                                    onChange={handleInputChange}
                                    required
                                    {...(errors.Password && { error: "true" })}/>

                                <div className="invalid-feedback">{errors.Password}</div>
                            </div>
                            
                            <div className="button_wrapper p-0" onClick={interfaceFunc.scrollToTop}>
                                <button
                                    type="submit" 
                                    className="btn btn-primary w-100 fw-bold"
                                    onClick={validators.checkValidation('signInUser_form')}>
                                    Вход
                                </button>
                            </div>

                            <div className="link_wrapper d-flex justify-content-center align-items-center p-0">
                                <span className="fw-bold me-1">Нет аккаунта?</span>
                                <Link 
                                    to={REGISTER_ROUTE} 
                                    className="link-primary fw-bold" 
                                    onClick={interfaceFunc.scrollToTop}>
                                    Зарегистрируйтесь
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    userItem: state.userReducer.userItem,
    statusCode: state.alertReducer.statusCode
});

const mapActionToProps = {
    authenticate: userActions.authenticate,
    checkError: alertActions.checkError
}

export default connect(mapStateToProps, mapActionToProps)(SignInPage);