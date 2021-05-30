import React from 'react';
import {Link} from "react-router-dom";
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import {PROGRAM_DETAIL_ROUTE, USER_PROFILE_ROUTE} from "../../_routing/routerConsts";

import camera from "../images/camera.svg";
import profile from "../images/profile.svg";


const ProgramItem = ({ id, user, avatar, name, programType, complexityLevel, description, preView, creationDate }) => {
    return (
        <div className="programItem_wrapper container-xxl">
            <div className="programItem_content container-xxl row">
                <div className="left_block col-4 h-100">
                    <Link to={`${USER_PROFILE_ROUTE}/${id}`} className="user_wrapper d-flex align-items-center w-100">
                        <div className="avatar rounded-circle d-flex justify-content-center">
                            <img src={avatar === null ? profile : avatar} alt="preView" width="auto" height="100%"/>
                        </div>
                        
                        <Tippy content="Show user profile">
                            <span className="fw-bold ms-2">{user}</span>
                        </Tippy>
                    </Link>

                    <div className="preView_wrapper d-flex justify-content-center align-items-center shadow">
                        {
                            preView === null || preView === ''  ?
                                <img src={camera} alt="preView" width="187" height="141"/> :
                                <img className="preView_photo" src={preView} alt="preView" width="auto" height="100%"/>
                        }
                    </div>
                </div>

                <div className="right_block col-8 d-flex flex-column justify-content-between ps-5">
                    <div className="content_block">
                        <div className="name_wrapper fw-bold">
                            <span>{name}</span>
                        </div>

                        <div className="line row">
                            <div className="left_group col-10">
                                <span className="characteristic fw-bold pe-2">Type:</span>
                                <span className="description">{programType}</span>
                            </div>

                            <div className="right_group col-2"/>
                        </div>

                        <div className="line row">
                            <div className="left_group col-10">
                                <span className="characteristic fw-bold pe-2">Complexity level:</span>
                                <span className="description">{complexityLevel}</span>
                            </div>

                            <div className="right_group col-2"/>
                        </div>

                        <div className="line row">
                            <div className="left_group col-10">
                                <span className="characteristic fw-bold pe-2">Description:</span>
                                <span className="description">{description}</span>
                            </div>

                            <div className="right_group col-2"/>
                        </div>
                    </div>

                    <div className="actions_block d-flex justify-content-between">
                        <div className="creationDate d-flex align-items-center text-secondary">{creationDate}</div>
                        
                        <div className="actions_buttons d-flex align-items-center">
                            <div className="likes_wrapper me-5">
                                <span className="likesCount fw-bold">0  </span>

                                <Tippy content="Like this">
                                    <button className="likeProgram rounded-circle shadow-sm rounded ms-2">
                                        <i className="bi bi-suit-heart"/>
                                    </button>
                                </Tippy>
                            </div>
    
                            <Link to={`${PROGRAM_DETAIL_ROUTE}/${id}`}>
                                <div className="button_wrapper">
                                    <Tippy content="Show full description">
                                        <button type="button" className="openProgram btn btn-outline-primary">
                                            Open
                                        </button>
                                    </Tippy>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgramItem;