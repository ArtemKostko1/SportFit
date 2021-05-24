﻿import React from 'react';
import useForm from "./utils/useForm";
import {Link} from "react-router-dom";
import Required from "./utils/validators/validators";
import * as userActions from "../_actions/user-actions";
import {MAIN_ROUTE, REGISTER_ROUTE} from "../_routing/routerConsts";

const initialInputValues = {
    Login: '',
    Password: '',
}

const SignInPage = ({...props}) => {
    const validate = (fieldValues = values) => {
        let signInTemp = {};
        
        if('Login' in fieldValues)
            signInTemp.Login = fieldValues.Login ? "" : "Please enter a login";
        if('Password' in fieldValues)
            signInTemp.Password = fieldValues.Password ? "" : "Please enter a password";

        setErrors({
            ...signInTemp
        });

        if (fieldValues === values)
            return Object.values(signInTemp).every(x => x === "");
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
        checkValidation();

        if (validate()) {
            
        }
    }

    function checkValidation() {
        'use strict'
        let forms = document.querySelectorAll('.signInUser_form')

        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    }
    
    return (
        <div>
            <div className="authorization_wrapper container-fluid p-0">
                <div className="row">
                    <div className="left col-6 bg-dark">
                        
                    </div>
                    <div className="right col-6 d-flex justify-content-center align-items-center">
                        <div className="authorization_form_wrapper">
                            <form className="signInUser_form needs-validation" autoComplete="off" noValidate onSubmit={handleSubmit}>
                                <h3 className="title fw-bold p-0">Sign In</h3>

                                <div className="button_wrapper p-0">
                                    <button type="#" className="btn btn-outline-primary w-100 fw-bold">Sign in with Google</button>
                                </div>
                                
                                <div className="separator d-flex justify-content-center align-items-center p-0">
                                    <hr className="w-100 m-0"/>
                                    <span className="fw-bold mx-4">or</span>
                                    <hr className="w-100 m-0"/>
                                </div>
                                
                                <div className="input_wrapper p-0">
                                    <label htmlFor="validationCustomLogin" className="form-label fw-bold">Login</label>
                                    <input
                                        name="Login"
                                        type="text" 
                                        className="form-control" 
                                        id="validationCustomLogin" 
                                        placeholder="Enter login"
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
                                        placeholder="Input password"
                                        value={values.Password}
                                        onChange={handleInputChange}
                                        required
                                        {...(errors.Password && { error: "true" })}/>

                                    <div className="invalid-feedback">{errors.Password}</div>
                                </div>
                                
                                <div className="button_wrapper p-0">
                                        <button
                                            type="submit" 
                                            className="btn btn-primary w-100 fw-bold">
                                            Sign In
                                        </button>
                                </div>

                                <div className="link_wrapper d-flex justify-content-center align-items-center p-0">
                                    <span className="fw-bold me-1">Have an account?</span>
                                    <Link to={REGISTER_ROUTE} className="link-primary fw-bold">Sign Up</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;