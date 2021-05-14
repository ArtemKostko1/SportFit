import React, {Component} from 'react';
import camera from "./images/camera.svg";
import {Link} from "react-router-dom";
import {PROGRAM_ID_ROUTE} from "../routing/routerConsts";
import Spinner from "./special-components/spinner/spinner";
import ProgramById from "./programById";

const ProgramItem = (props) => {
    const spinner = props.loading ? <Spinner/> : null;
    const content = !props.loading ? <ProgramItemContent data={props}/> : null;
    
    return (
        <div className="programItem_wrapper container-xxl d-flex justify-content-center align-items-center">
            {spinner}
            {content}
        </div>
    );
}

export default ProgramItem;

const ProgramItemContent = ({ data }) => {
    const { user, avatar, name, programType, complexityLevel, description } = data;

    return (
        <div className="programItem_content container-xxl row">
            <div className="left_block col-4">
                <a href="#" className="user_wrapper d-flex align-items-center w-100">
                    <img className="rounded-circle" src={avatar} alt="ava" width="35" height="35"/>
                    <span className="fw-bold ms-2">{user}</span>
                </a>

                <div className="photo_wrapper d-flex justify-content-center align-items-center w-100">
                    <img src={camera} alt="" width="187" height="141"/>
                </div>
            </div>

            <div className="right_block col-8 d-flex flex-column justify-content-between ps-5">
                <div className="content_block">
                    <div className="title fw-bold">{name}</div>

                    <div className="line row">
                        <div className="left_group col-10">
                            <span className="characteristic fw-bold pe-2">Type:</span>
                            <span className="description">{programType}</span>
                        </div>

                        <div className="right_group col-2"></div>
                    </div>

                    <div className="line row">
                        <div className="left_group col-10">
                            <span className="characteristic fw-bold pe-2">Complexity level:</span>
                            <span className="description">{complexityLevel}</span>
                        </div>

                        <div className="right_group col-2"></div>
                    </div>

                    <div className="line row">
                        <div className="left_group col-10">
                            <span className="characteristic fw-bold pe-2">Description:</span>
                            <span className="description">{description}</span>
                        </div>

                        <div className="right_group col-2"></div>
                    </div>
                </div>

                <div className="actions_block d-flex justify-content-end">
                    <div className="likes_wrapper d-flex align-items-center me-5">
                        <span className="likesCount fw-bold">0  </span>

                        <button className="likeProgram rounded-circle shadow-sm rounded ms-2">
                            <i className="bi bi-suit-heart"></i>
                        </button>
                    </div>

                    <Link to={PROGRAM_ID_ROUTE}>
                        <div className="button_wrapper">
                            <button type="button" className="openProgram btn btn-outline-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="20" fill="currentColor" className="bi bi-arrow-right"
                                     viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}