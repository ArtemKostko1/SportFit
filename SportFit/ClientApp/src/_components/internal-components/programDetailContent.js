import React from 'react';
import {Link} from "react-router-dom";
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

import CommentsBlock from "./commentsBlock";
import dumbbell from "../images/dumbbell.svg";
import meal from "../images/meal.svg";
import muscles_hard from "../images/muscles_hard.png";
import muscles_easy from "../images/muscles_easy.png";
import muscles_medium from "../images/muscles_medium.png";
import muscles_professional from "../images/muscles_professional.png";
import camera from "../images/camera.svg";
import profile from "../images/profile.svg";
import {ACCOUNT_ROUTE} from "../../_routing/routerConsts";


const ProgramDetailContent = ({ userId, userNickname, userAvatar, name, programType, complexityLevel, description, content }) => {
    return (
        <>
            <div className="programDetail_content container-xxl shadow">
                <div className="topInfo_wrapper row w-100">
                    <div className="user_wrapper col-11 d-flex align-items-center">
                        <Link to={`${ACCOUNT_ROUTE}/${userId}`} className="user_wrapper d-flex align-items-center w-100">
                            <div className="avatar rounded-circle d-flex justify-content-center align-items-center">
                                <img src={userAvatar === null ? profile : userAvatar} alt="ava" width="auto" height="100%"/>
                            </div>
                            
                            <Tippy content="Show user profile">
                                <span className="fw-bold ms-2">{userNickname}</span>
                            </Tippy>
                        </Link>
                    </div>
    
                    <div className="likes_wrapper col-1 d-flex align-items-center">
                        <span className="likesCount fw-bold">0</span>
    
                        <button className="likeProgram rounded-circle shadow-sm rounded ms-2">
                            <i className="bi bi-suit-heart"/>
                        </button>
                    </div>
                </div>
    
                <div className="mainContent_wrapper">
                    <div className="typesCharacterization_wrapper row w-100">
                        <div className="programType_wrapper col-6 d-flex align-items-center justify-content-start">
                            <div className="badge d-flex align-items-center justify-content-center me-3">{programType}</div>
                            <img src=
                                 {
                                    programType === 'Training program' || programType === 'Программа тренировки' ?
                                        dumbbell :
                                    (programType === 'Meal plan' || programType === 'План питания' ?
                                        meal : null)
                                 } 
                                 alt="ava" width="42" height="42"/>
                        </div>
    
                        <div className="complexityLevel_wrapper col-6 d-flex align-items-center justify-content-end">
                            {
                                complexityLevel === 'Easy' || programType === 'Легко' ?
                                    <>
                                        <img src={muscles_easy} alt="ava"/>
                                        <div className="badge d-flex align-items-center justify-content-center bg-primary ms-3">{complexityLevel}</div>
                                    </> :
                                (complexityLevel === 'Medium' || programType === 'Средне' ?
                                    <>
                                        <img src={muscles_medium} alt="ava"/>
                                        <div className="badge d-flex align-items-center justify-content-center bg-warning ms-3">{complexityLevel}</div>
                                    </> :
                                (complexityLevel === 'Hard' || programType === 'Сложно' ?
                                    <>
                                        <img src={muscles_hard} alt="ava"/>
                                        <div className="badge d-flex align-items-center justify-content-center bg-danger ms-3">{complexityLevel}</div>
                                    </> :
                                (complexityLevel === 'Professional' || programType === 'Професионально' ?
                                    <>
                                        <img src={muscles_professional} alt="ava"/>
                                        <div className="badge d-flex align-items-center justify-content-center bg-dark ms-3">{complexityLevel}</div>
                                    </> : null)))
                            }
                        </div>
                    </div>
    
                    <div className="gallery_wrapper d-flex align-items-center shadow-sm rounded">
                        <div className="photosGallery_wrapper d-flex row w-100">
                            <div className="col-4">
                                <div className="photo_wrapper d-flex justify-content-center align-items-center w-100 h-100 bg-dark">
                                    <img src={camera} alt="" width="187" height="141"/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="photo_wrapper d-flex justify-content-center align-items-center w-100 h-100 bg-primary">
                                    <img src={camera} alt="" width="187" height="141"/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="photo_wrapper d-flex justify-content-center align-items-center w-100 h-100 bg-secondary">
                                    <img src={camera} alt="" width="187" height="141"/>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="name_wrapper">
                        <span className="fw-bold">{name}</span>
                    </div>
    
                    <div className="description_wrapper row w-100">
                        <div className="title col-1 fw-bold">Description:</div>
                        <div className="content col-11 ps-3">
                            <span>{description}</span>
                        </div>
                    </div>
    
                    <div className="programText_wrapper row w-100">
                        <div className="title col-1 fw-bold">Program:</div>
                        <div className="content col-11 ps-3">
                            <div className="content_text">
                                {content}    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <CommentsBlock/>
        </>
    );
};

export default ProgramDetailContent;
