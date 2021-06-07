﻿import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {useToasts} from "react-toast-notifications";
import {ACCOUNT_ROUTE} from "../../_routing/routerConsts";
import * as interfaceFunc from "../utils/interface";
import * as commentActions from "../../_actions/comment-actions";
import dateFormat from "../utils/dateFormat";

import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import profiler from '../images/profile.svg';


const CommentItem = ({ id, program, user, nickname, avatar, content, creationDate, ...props }) => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const { addToast } = useToasts();

    const onDelete = id => {
        if(window.confirm('Are you sure to delete your comment?'))
            props.deleteComment(id, () => addToast("Successfully deleted", { appearance: 'success'}));
    }
    
    return (
        <div className="commentItem_wrapper row">
            <div className="userAvatar_wrapper col-1">
                <div className="avatar_wrapper">
                    <img 
                        className="avatar rounded-circle" 
                        src=
                            { 
                                avatar === null || avatar === '' ? 
                                    profiler : 
                                    avatar 
                            } 
                        alt="ava" 
                        width="auto" 
                        height="100%"/>
                </div>
            </div>

            <div className="commentItem_content col-11 d-flex flex-column justify-content-between">
                <div className="nicknameAndActions row">
                    <div className="userNickname col-11">
                        <Link to={`${ACCOUNT_ROUTE}/${user}`}>
                            <Tippy content="Show user profile">
                                <span className="fw-bold" onClick={interfaceFunc.scrollToTop}>{ nickname }</span>
                            </Tippy>
                        </Link>
                    </div>

                    {
                        user === currentUser.id ?
                            <div className="actionsButtons_wrapper col-1 d-flex justify-content-end">
                                <div className="dropdown rounded-circle">
                                    <div
                                        role="button"
                                        id="dropdownMenuLink"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        className="actions_dropdown rounded-circle d-flex justify-content-center align-items-center">

                                        <i className="fa fa-ellipsis-h"/>
                                    </div>

                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                                        <li
                                            className="dropdown-item"
                                            onClick={() => onDelete(id)}>
                                            Delete
                                        </li>
                                    </ul>
                                </div>
                            </div> :
                            null
                    }
                </div>

                <textarea
                    className="form-control w-100"
                    value={content}>
                    { content }
                </textarea>
                
                <div className="creationDate_wrapper text-secondary">
                    {dateFormat(`${creationDate}`)}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({

});

const mapActionToProps = {
    deleteComment: commentActions.deleteComment
}

export default connect(mapStateToProps, mapActionToProps)(CommentItem);
