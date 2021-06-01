import React, {useEffect} from 'react';
import useForm from "./utils/useForm";
import {Link} from "react-router-dom";
import {LOGIN_ROUTE} from "../_routing/routerConsts";
import * as userActions from "../_actions/user-actions";
import {connect} from "react-redux";
import checkValidation from "./utils/validators/validators";

const SignUpPage = ({...props}) => {
    const initialInputValues = {
        Nickname: '',
        Login: '',
        Password: '',
    }

    const resetValues = () => {
        values.Nickname = '';
        values.Login = '';
        values.Password = '';
    }
    
    const validate = (fieldValues = values) => {
        let temp = {};

        if('Nickname' in fieldValues)
            temp.Nickname = fieldValues.Nickname ? "" : "Please enter a nickname";
        if('Login' in fieldValues)
            temp.Login = fieldValues.Login ? "" : "Please enter a login";
        if('Password' in fieldValues)
            temp.Password = fieldValues.Password ? "" : "Please enter a password";

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
        handleInputChange
    } = useForm(initialInputValues, validate);

    const handleSubmit = e => {
        e.preventDefault();
        
        if (validate()) {
            props.register(values, () => {window.alert('User registered')});
            document.getElementById('signUpUser_form').reset();
            resetValues();
        }
    }
    
    return (
        <div className="authorization_wrapper container-fluid p-0">
            <div className="row">
                <div className="left col-6 bg-dark">
                    
                </div>
                <div className="right col-6 d-flex justify-content-center align-items-center">
                    <div className="authorization_form_wrapper">
                        <form className="signUpUser_form needs-validation" id="signUpUser_form" autoComplete="off" noValidate onSubmit={handleSubmit}>
                            <h3 className="title fw-bold p-0">Sign Up</h3>

                            <div className="button_wrapper p-0">
                                <button type="#" className="btn btn-outline-primary w-100 fw-bold">Sign up with Google</button>
                            </div>
                            
                            <div className="separator d-flex justify-content-center align-items-center p-0">
                                <hr className="w-100 m-0"/>
                                <span className="fw-bold mx-4">or</span>
                                <hr className="w-100 m-0"/>
                            </div>
                            
                            <div className="input_wrapper p-0">
                                <label htmlFor="formGroupExampleInput" className="form-label fw-bold">User name</label>
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
                                <label htmlFor="formGroupExampleInput2" className="form-label fw-bold">Login</label>
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
                                <label htmlFor="validationCustomPassword" className="form-label fw-bold">Password</label>
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
                                    onClick={checkValidation('signUpUser_form')}>
                                    Create account
                                </button>
                            </div>

                            <div className="link_wrapper d-flex justify-content-center align-items-center p-0">
                                <span className="fw-bold me-1">Already have an account?</span>
                                <Link to={LOGIN_ROUTE} className="link-primary fw-bold">Sign In</Link>
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