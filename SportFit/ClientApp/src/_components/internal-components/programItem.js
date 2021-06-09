import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import dateFormat from "../utils/dateFormat";
import * as interfaceFunc from "../utils/interface";
import {PROGRAM_DETAIL_ROUTE, ACCOUNT_ROUTE} from "../../_routing/routerConsts";

import camera from "../images/camera.svg";
import profile from "../images/profile.svg";
import dumbbell from "../images/dumbbell.svg";
import meal from "../images/meal.svg";
import muscles_easy from "../images/muscles_easy.png";
import muscles_medium from "../images/muscles_medium.png";
import muscles_hard from "../images/muscles_hard.png";
import muscles_professional from "../images/muscles_professional.png";
import bookmark_solid from "../images/bookmark_solid.svg";
import bookmark from "../images/bookmark.svg";
import * as likeActions from "../../_actions/like-actions";
import * as selectedProgramActions from "../../_actions/selectedProgram-actions";
import {connect} from "react-redux";
import like_solid from "../images/like_solid.svg";
import like from "../images/like.svg";


const ProgramItem = ({  id, userId, userNickname, userAvatar, name, programType, complexityLevel, description, preView, creationDate,
                        fetchAllLikes, createLike, deleteLike, likesList, fetchAllSelectedPrograms,
                        addSelectedProgram, deleteSelectedProgram, selectedProgramsList}) => {

    useEffect(() => {
        fetchAllLikes(id);
        fetchAllSelectedPrograms(id);
    }, []);

    const currentUserId = JSON.parse(localStorage.getItem('user')).id;

    const selectedProgramValues = {
        ProgramId: id,
        UserId: currentUserId
    }

    const likeValues = {
        ProgramId: id,
        UserId: currentUserId
    }


    let currentSelectedProgram = selectedProgramsList.find(x => x.userId === currentUserId);
    let isSelected = selectedProgramsList.some(x => x.userId === currentUserId);

    let currentLike = likesList.find(x => x.userId === currentUserId);
    let isLiked = likesList.some(x => x.userId === currentUserId);


    const onSelected = () => {
        isSelected = !isSelected;

        isSelected ? addSelectedProgram(selectedProgramValues) : deleteSelectedProgram(currentSelectedProgram.id);
    }

    const onLiked = () => {
        isLiked = !isLiked;

        isLiked ? createLike(likeValues) : deleteLike(currentLike.id);
    }
    
    return (
        <div className="programItem_wrapper container-xxl shadow">
            <div className="programItem_content container-xxl row">
                <div className="left_block col-4 h-100">
                    <Link to={`${ACCOUNT_ROUTE}/${userId}`} className="user_wrapper d-flex align-items-center w-100">
                        <div className="avatar rounded-circle d-flex justify-content-center align-items-center">
                            <img src={userAvatar === null || userAvatar === '' ? profile : userAvatar} alt="preView" width="auto" height="100%"/>
                        </div>
                        
                        <Tippy content="Show user profile">
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
                                <span className="characteristic fw-bold pe-2">Type:</span>
                                <span className="description">{programType}</span>
                            </div>

                            <div className="right_group col-2 d-flex justify-content-end">
                                <img src=
                                         {
                                             programType === 'Training program' || programType === 'Программа тренировки' ?
                                                 dumbbell :
                                             (programType === 'Meal plan' || programType === 'План питания' ?
                                                 meal : null)
                                         }
                                     alt="ava" width="40" height="40"/>
                            </div>
                        </div>

                        <div className="line row d-flex align-items-center">
                            <div className="left_group col-10">
                                <span className="characteristic fw-bold pe-2">Complexity level:</span>
                                <span className="description">{complexityLevel}</span>
                            </div>

                            <div className="right_group col-2 d-flex justify-content-end">
                                {
                                    complexityLevel === 'Easy' || programType === 'Легко' ?
                                        <img src={muscles_easy} alt="ava" height="23"/> :
                                    (complexityLevel === 'Medium' || programType === 'Средне' ?
                                        <img src={muscles_medium} alt="ava" height="23"/> :
                                    (complexityLevel === 'Hard' || programType === 'Сложно' ?
                                        <img src={muscles_hard} alt="ava" height="23"/> :
                                    (complexityLevel === 'Professional' || programType === 'Професионально' ?
                                        <img src={muscles_professional} alt="ava" height="23"/> : 
                                    null)))
                                }
                            </div>
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
                        <div className="creationDate d-flex align-items-center text-secondary">{dateFormat(creationDate)}</div>

                        <div className="actionsButtons_wrapper d-flex">
                            <Link to={`${PROGRAM_DETAIL_ROUTE}/${id}`}>
                                <Tippy content="Show full description">
                                    <button type="button" className="btn btn-outline-primary ms-3" onClick={interfaceFunc.scrollToTop}>
                                        Open
                                    </button>
                                </Tippy>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    likesList: state.likeReducer.likesList,
    likesListLenght: state.likeReducer.likesListLenght,
    selectedProgramsList: state.selectedProgramReducer.selectedProgramsList,
    selectedProgramsListLenght: state.selectedProgramReducer.selectedProgramsListLenght,
});

const mapActionToProps = {
    fetchAllLikes: likeActions.fetchAllLikes,
    createLike: likeActions.createLike,
    deleteLike: likeActions.deleteLike,
    fetchAllSelectedPrograms: selectedProgramActions.fetchAllSelectedPrograms,
    addSelectedProgram: selectedProgramActions.addSelectedProgram,
    deleteSelectedProgram: selectedProgramActions.deleteSelectedProgram
}

export default connect(mapStateToProps, mapActionToProps)(ProgramItem);