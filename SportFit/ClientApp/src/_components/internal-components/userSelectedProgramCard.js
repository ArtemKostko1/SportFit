﻿import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {useToasts} from 'react-toast-notifications';
import * as interfaceFunc from "../utils/interface";
import * as likeActions from "../../_actions/like-actions";
import * as selectedProgramActions from "../../_actions/selectedProgram-actions";
import dateFormat from "../utils/dateFormat";
import {PROGRAM_DETAIL_ROUTE} from "../../_routing/routerConsts";

import Tippy from "@tippy.js/react";
import 'tippy.js/dist/tippy.css';
import camera from "../images/camera.svg";
import bookmark from "../images/bookmark.svg";
import bookmark_solid from "../images/bookmark_solid.svg";
import like from "../images/like.svg";
import like_solid from "../images/like_solid.svg";
import comment from "../images/comment.svg";
import comment_solid from "../images/comment_solid.svg";


const UserSelectedProgramCard = ({   id, programId, name, preView, creationDate, fetchAllSelectedPrograms, deleteSelectedProgram, selectedProgramsList, likes, comments}) => {

    useEffect(() => {
        fetchAllSelectedPrograms(currentUserId);
    }, []);

    const currentUserId = JSON.parse(localStorage.getItem('user')).id;
    const { addToast } = useToasts();

    const selectedProgramValues = {
        ProgramId: id,
        UserId: currentUserId
    }

    let currentSelectedProgram = selectedProgramsList.find(x => x.programId === programId);
    let isSelected = selectedProgramsList.some(x => x.programId === programId);

    const onSelected = () => {
        debugger
        isSelected = !isSelected;

        !isSelected && deleteSelectedProgram(currentSelectedProgram.id);
    }

    return (
        <div className="userSelectedProgramCard_wrapper shadow">
            <div className="preView_wrapper d-flex justify-content-center align-items-center w-100">
                {
                    preView === null || preView === '' ?
                        <img src={camera} alt="preView" width="187" height="141"/> :
                        <img className="preView_photo" src={preView} alt="preView" width="auto" height="100%"/>
                }
            </div>

            <div className="selectedProgramContent_wrapper">
                <div className="name_wrapper">
                    <span className="text-primary fw-bold">{name}</span>
                </div>



                <div className="actions_block d-flex justify-content-between">
                    <Link to={`${PROGRAM_DETAIL_ROUTE}/${programId}`}>
                        <Tippy content="Показать полное описание">
                            <button type="button" className="btn btn-outline-primary px-0" onClick={interfaceFunc.scrollToTop}>
                                Открыть
                            </button>
                        </Tippy>
                    </Link>

                    <div className="d-flex align-items-center">{dateFormat(creationDate)}</div>

                    <div className="specialButtons_wrapper d-flex">
                        <div className="addToSelected_wrapper ms-2">
                            <Tippy content="Убрать из избранных">
                                <button
                                    className="addToSelected rounded-circle shadow-sm rounded ms-2"
                                    onClick={onSelected}>

                                    <img id="addToSelected_button" src={isSelected ? bookmark_solid : bookmark} alt="ava" width="25" height="25"/>
                                </button>
                            </Tippy>
                        </div>
                    </div>
                </div>
            </div>

            <div className="statistics_block d-flex justify-content-center align-items-center p-1">
                <div className="likes_wrapper d-flex align-items-center px-1">
                    <span className="likesCount fw-bold me-1">{likes !== undefined ? likes.length : null}</span>
                    <img id="like_button" src={ likes !== undefined ? (likes.length === 0 ? like : like_solid) : null} alt="ico" width="20" height="20"/>
                </div>

                <hr className="m-0"/>

                <div className="likes_wrapper d-flex align-items-center px-1">
                    <span className="likesCount fw-bold me-1">{comments !== undefined ? comments.length : null}</span>
                    <img id="like_button" src={ comments !== undefined ? (comments.length === 0 ? comment : comment_solid) : null} alt="ico" width="20" height="20"/>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    likesList: state.likeReducer.likesList,
    likesListLenght: state.likeReducer.likesListLenght,
    selectedProgramsList: state.selectedProgramReducer.selectedProgramsList
});

const mapActionToProps = {
    fetchAllLikes: likeActions.fetchAllLikes,
    createLike: likeActions.createLike,
    deleteLike: likeActions.deleteLike,
    fetchAllSelectedPrograms: selectedProgramActions.fetchAllSelectedPrograms,
    addSelectedProgram: selectedProgramActions.addSelectedProgram,
    deleteSelectedProgram: selectedProgramActions.deleteSelectedProgram
}

export default connect(mapStateToProps, mapActionToProps)(UserSelectedProgramCard);
