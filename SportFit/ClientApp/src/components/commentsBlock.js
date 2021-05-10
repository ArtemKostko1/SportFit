import React from 'react';
import profile from "./images/profile.svg";
import {Link} from "react-router-dom";

const CommentsBlock = () => {
    return (
        <div className="commentsBlock_wrapper container-xxl p-0">
            <div className="myComment_wrapper">
                <div className="commentInput_wrapper row">
                    <div className="user_wrapper col-1">
                        <img className="rounded-circle" src={profile} alt="ava" width="75" height="75"/>
                    </div>
    
                    <div className="commentText_wrapper form-floating col-11">
                        <textarea className="commentText form-control" placeholder="Leave a comment here" id="floatingTextarea"/>
                        <label htmlFor="floatingTextarea2">Input program content</label>
                    </div>
                </div>
    
                <div className="button_wrapper row d-flex justify-content-end">
                    <button type="#" className="btn btn-outline-dark rounded-pill fw-bold">CREATE</button>
                </div>
            </div>
            
            <hr className="w-100"/>
            
            <div className="usersComments_wrapper">
                
            </div>
        </div>
    );
};

export default CommentsBlock;
