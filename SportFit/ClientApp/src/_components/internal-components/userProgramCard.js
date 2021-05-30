import React from 'react';
import camera from "../images/camera.svg";
import {PROGRAM_DETAIL_ROUTE} from "../../_routing/routerConsts";
import Tippy from "@tippy.js/react";
import {Link} from "react-router-dom";

const UserProgramCard = ({ id, name, preView }) => {
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
                        <div className="button_wrapper">
                            <Tippy content="Show full description">
                                <button type="button" className="btn btn-outline-primary">
                                    Open
                                </button>
                            </Tippy>
                        </div>
                    </Link>

                    <div className="specialButtons_wrapper d-flex">
                        <Tippy content="Edit">
                            <button className="btn btn-outline-secondary d-flex justify-content-center align-items-center me-2 p-0" type="button">
                                <i className="fa fa-pencil"/>
                            </button>
                        </Tippy>

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
