import React from 'react';
import { Link } from "react-router-dom";
import Required from "./utils/validators/validators";
import {MAIN_ROUTE, SIGNUP_ROUTE} from "../routing/routerConsts";

const SignInPage = () => {
    return (
        <div>
            <div className="authorization_wrapper container-fluid p-0">
                <div className="row">
                    <div className="left col-6 bg-dark">
                        
                    </div>
                    <div className="right col-6 d-flex justify-content-center align-items-center">
                        <div className="authorization_form_wrapper">
                            <form action="">
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
                                    <label htmlFor="formGroupExampleInput2" className="form-label fw-bold">Login</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Input login"/>
                                </div>
                                
                                <div className="input_wrapper p-0">
                                    <label htmlFor="formGroupExampleInput2" className="form-label fw-bold">Password</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Input password"/>
                                </div>
                                
                                <div className="button_wrapper p-0">
                                    <Link to={MAIN_ROUTE}>
                                        <button 
                                            type="submit" 
                                            className="btn btn-primary w-100 fw-bold">
                                            Sign In
                                        </button>
                                    </Link>
                                </div>

                                <div className="link_wrapper d-flex justify-content-center align-items-center p-0">
                                    <span className="fw-bold me-1">Have an account?</span>
                                    <Link to={SIGNUP_ROUTE} className="link-primary fw-bold">Sign Up</Link>
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