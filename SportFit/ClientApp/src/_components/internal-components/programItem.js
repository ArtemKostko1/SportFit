import React from 'react';
import {Link} from "react-router-dom";
import * as interfaceFunc from "../utils/interface";
import dateFormat from "../utils/dateFormat";
import {PROGRAM_DETAIL_ROUTE, ACCOUNT_ROUTE} from "../../_routing/routerConsts";

import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import camera from "../images/camera.svg";
import profile from "../images/profile.svg";
import dumbbell from "../images/dumbbell.svg";
import meal from "../images/meal.svg";
import muscles_easy from "../images/muscles_easy.png";
import muscles_medium from "../images/muscles_medium.png";
import muscles_hard from "../images/muscles_hard.png";
import muscles_professional from "../images/muscles_professional.png";
import like_solid from "../images/like_solid.svg";
import like from "../images/like.svg";
import comment from "../images/comment.svg";
import comment_solid from "../images/comment_solid.svg";


const ProgramItem = ({  id, userId, userNickname, userAvatar, name, programType, complexityLevel, description, preView, creationDate, likes, comments}) => {
    debugger
    
    return (
        <div className="programItem_wrapper container-xxl shadow">
            <div className="programItem_content container-xxl row">
                <div className="left_block col-4 h-100">
                    <Link to={`${ACCOUNT_ROUTE}/${userId}`} className="user_wrapper d-flex align-items-center w-100">
                        <div className="avatar rounded-circle d-flex justify-content-center align-items-center">
                            <img src={userAvatar === null || userAvatar === '' ? profile : userAvatar} alt="preView" width="auto" height="100%"/>
                        </div>
                        
                        <Tippy content="Посмотреть профиль">
                            <span className="fw-bold ms-2" onClick={interfaceFunc.scrollToTop}>{userNickname}</span>
                        </Tippy>
                    </Link>

                    <div className="preView_wrapper d-flex justify-content-center align-items-center">
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

                        <div className="line row d-flex align-items-center">
                            <div className="left_group col-10">
                                <span className="characteristic fw-bold pe-2">Тип:</span>
                                <span className="description">{programType}</span>
                            </div>

                            <div className="right_group col-2 d-flex justify-content-end">
                                <img src=
                                         {
                                             programType === 'Программа тренировки' ?
                                                 dumbbell :
                                             (programType === 'План питания' ?
                                                 meal : null)
                                         }
                                     alt="programType" width="40" height="40"/>
                            </div>
                        </div>

                        <div className="line row d-flex align-items-center">
                            <div className="left_group col-10">
                                <span className="characteristic fw-bold pe-2">Степень сложности:</span>
                                <span className="description">{complexityLevel}</span>
                            </div>

                            <div className="right_group col-2 d-flex justify-content-end">
                                {
                                    complexityLevel === 'Легко' ?
                                        <img src={muscles_easy} alt="complexityLevel" height="23"/> :
                                    (complexityLevel === 'Средне' ?
                                        <img src={muscles_medium} alt="complexityLevel" height="23"/> :
                                    (complexityLevel === 'Сложно' ?
                                        <img src={muscles_hard} alt="complexityLevel" height="23"/> :
                                    (complexityLevel === 'Профессионально' ?
                                        <img src={muscles_professional} alt="complexityLevel" height="23"/> : 
                                    null)))
                                }
                            </div>
                        </div>

                        <div className="line row">
                            <div className="left_group col-10">
                                <span className="characteristic fw-bold pe-2">Описание:</span>
                                <span className="description">{description}</span>
                            </div>

                            <div className="right_group col-2"/>
                        </div>
                    </div>


                    <div className="actions_block d-flex justify-content-between">
                        <div className="creationDate d-flex align-items-center text-secondary">{dateFormat(creationDate)}</div>

                        <div className="d-flex">
                            <div className="statistics_block d-flex">
                                <div className="likes_wrapper d-flex align-items-center px-1">
                                    <span className="likesCount fw-bold me-1">{likes !== undefined ? likes.length : null}</span>
                                    <img id="like_button" src={ likes !== undefined ? (likes.length === 0 ? like : like_solid) : null} alt="ava" width="25" height="25"/>
                                </div>

                                <div className="likes_wrapper d-flex align-items-center px-1">
                                    <span className="likesCount fw-bold me-1">{comments !== undefined ? comments.length : null}</span>
                                    <img id="like_button" src={ comments !== undefined ? (comments.length === 0 ? comment : comment_solid) : null} alt="ava" width="25" height="25"/>
                                </div>
                            </div>
    
                            <div className="actionsButtons_wrapper d-flex">
                                <Link to={`${PROGRAM_DETAIL_ROUTE}/${id}`}>
                                    <Tippy content="Посмотреть полное описание">
                                        <button type="button" className="btn btn-outline-primary ms-3" onClick={interfaceFunc.scrollToTop}>
                                            Открыть
                                        </button>
                                    </Tippy>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgramItem;