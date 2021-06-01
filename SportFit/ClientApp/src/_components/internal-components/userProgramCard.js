import React from 'react';
import {Link} from "react-router-dom";
import Tippy from "@tippy.js/react";
import 'tippy.js/dist/tippy.css';
import {EDIT_PROGRAM_ROUTE, PROGRAM_DETAIL_ROUTE} from "../../_routing/routerConsts";
import dateFormat from "../utils/dateFormat";

import camera from "../images/camera.svg";

const UserProgramCard = ({ id, name, preView, creationDate }) => {
    return (
        <div className="userProgramCard_wrapper shadow">
            <div className="preView_wrapper d-flex justify-content-center align-items-center w-100">
                {
                    preView === null || preView === '' ?
                        <img src={camera} alt="preView" width="187" height="141"/> :
                        <img className="preView_photo" src={preView} alt="preView" width="auto" height="100%"/>
                }
            </div>
                
            <div className="programContent_wrapper">
                <div className="name_wrapper">
                    <span className="text-primary fw-bold">{name}</span>
                </div>
                

                
                <div className="actions_block d-flex justify-content-between">
                    <Link to={`${PROGRAM_DETAIL_ROUTE}/${id}`}>
                        <Tippy content="Show full description">
                            <button type="button" className="btn btn-outline-primary">
                                Open
                            </button>
                        </Tippy>
                    </Link>
                    
                    <div className="d-flex align-items-center">{dateFormat(creationDate)}</div>

                    <div className="specialButtons_wrapper d-flex">
                        <Link to={`${EDIT_PROGRAM_ROUTE}/${id}`}>
                            <Tippy content="Edit">
                                <button className="btn btn-outline-secondary d-flex justify-content-center align-items-center me-2 p-0" type="button">
                                    <i className="fa fa-pencil"/>
                                </button>
                            </Tippy>
                        </Link>

                        <Tippy content="Delete">
                            <button className="btn btn-outline-danger d-flex justify-content-center align-items-center p-0" type="button">
                                <i className="fa fa-trash-o"/>
                            </button>
                        </Tippy>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProgramCard;
