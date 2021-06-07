import React from 'react';
import {connect} from "react-redux";
import {useToasts} from "react-toast-notifications";
import * as commentActions from "../../_actions/comment-actions";
import * as validators from "../utils/validators/validators";
import useForm from "../utils/useForm";

import profiler from "../images/profile.svg";


const UserComment = ({ programId, ...props }) => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const { addToast } = useToasts();

    const initialInputValues = {
        ProgramId: programId,
        UserId: currentUser.id,
        Content: '',
    }

    const validate = (fieldValues = values) => {
        let temp = {...errors};

        if('Content' in fieldValues)
            temp.Content = fieldValues.Content ? '' : "Please enter a comment";

        setErrors({
            ...temp
        });

        if (fieldValues === values)
            return Object.values(temp).every(x => x === '');
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
            props.createComment(values, () => addToast("Successfully comment posted", {appearance: 'success'}));
            resetForm();
        }
    }
    
    return (
        <div className="userComment_wrapper row">
            <div className="userAvatar_wrapper col-1">
                <div className="avatar_wrapper">
                    <img 
                        className="avatar rounded-circle" 
                        src=
                            { 
                                currentUser.avatar === null || currentUser.avatar === '' ? 
                                    profiler : 
                                    currentUser.avatar 
                            } 
                        alt="ava" 
                        width="auto" 
                        height="100%"/>
                </div>
            </div>
            <div className="userCommentInput_wrapper col-11">
                <form className="comment_form needs-validation" id="comment_form" autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <div className="input_wrapper form-floating row">
                        <textarea
                            name="Content"
                            className="commentText form-control" 
                            placeholder="Leave a comment here" 
                            id="floatingTextarea"
                            value={values.Content}
                            onChange={handleInputChange}
                            required
                            {...(errors.Content && { error: "true" })}/>
                        
                        <label htmlFor="floatingTextarea">Leave a comment here</label>
                        <div className="invalid-feedback">{errors.Content}</div>
                    </div>

                    <div className="button_wrapper row d-flex justify-content-end">
                        <button 
                            type="submit" 
                            className="postComment btn btn-outline-dark rounded-pill fw-bold"
                            onClick={validators.checkValidation('comment_form')}>
                            Post a comment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    
});

const mapActionToProps = {
    createComment: commentActions.createComment
}

export default connect(mapStateToProps, mapActionToProps)(UserComment);
