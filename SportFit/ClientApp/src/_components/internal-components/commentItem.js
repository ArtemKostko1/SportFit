import React from 'react';
import {Link} from "react-router-dom";
import {ACCOUNT_ROUTE} from "../../_routing/routerConsts";
import * as interfaceFunc from "../utils/interface";
import dateFormat from "../utils/dateFormat";

import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import profiler from '../images/profile.svg';


const CommentItem = ({ id, program, user, nickname, avatar, content, creationDate, modificationDate }) => {
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
                <div className="userNickname">
                    <Link to={`${ACCOUNT_ROUTE}/${user}`}>
                        <Tippy content="Show user profile">
                            <span className="fw-bold" onClick={interfaceFunc.scrollToTop}>{ nickname }</span>
                        </Tippy>
                    </Link>
                </div>

                <textarea 
                    className="form-control w-100"
                    value={content}>
                    { content }
                </textarea>
                <div className="creationDate_wrapper">
                    {dateFormat(`${creationDate}`)}
                </div>
            </div>
        </div>
    );
};

export default CommentItem;
