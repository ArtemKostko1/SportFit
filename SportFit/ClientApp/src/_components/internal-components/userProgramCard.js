import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {useToasts} from 'react-toast-notifications';
import {EDIT_PROGRAM_ROUTE, PROGRAM_DETAIL_ROUTE} from "../../_routing/routerConsts";
import * as interfaceFunc from "../utils/interface";
import * as programActions from "../../_actions/program-actions";
import * as likeActions from "../../_actions/like-actions";
import * as commentActions from "../../_actions/comment-actions";
import * as selectedProgramActions from "../../_actions/selectedProgram-actions";
import dateFormat from "../utils/dateFormat";

import Tippy from "@tippy.js/react";
import 'tippy.js/dist/tippy.css';
import camera from "../images/camera.svg";
import like from "../images/like.svg";
import like_solid from "../images/like_solid.svg";
import bookmark from "../images/bookmark.svg";
import bookmark_solid from "../images/bookmark_solid.svg";
import comment from "../images/comment.svg";
import comment_solid from "../images/comment_solid.svg";


const UserProgramCard = ({ id, name, preView, creationDate, likes, comments, selectedPrograms, deleteProgram }) => {
    const { addToast } = useToasts();
    
    const onDelete = id => {
        if(window.confirm('Вы уверены, что хотите удалить эту программу?'))
            deleteProgram(id, () => addToast("Успешное удаление", { appearance: 'success'}));
    }
    
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
                        <Tippy content="Посмотреть полное описание">
                            <button type="button" className="btn btn-outline-primary px-0" onClick={interfaceFunc.scrollToTop}>
                                Открыть
                            </button>
                        </Tippy>
                    </Link>
                    
                    <div className="d-flex align-items-center">{dateFormat(creationDate)}</div>

                    <div className="specialButtons_wrapper d-flex">
                        <Link to={`${EDIT_PROGRAM_ROUTE}/${id}`}>
                            <Tippy content="Редактировать">
                                <button 
                                    className="btn btn-outline-secondary d-flex justify-content-center align-items-center me-2 p-0" 
                                    type="button"
                                    onClick={interfaceFunc.scrollToTop}>
                                    
                                    <i className="fa fa-pencil"/>
                                </button>
                            </Tippy>
                        </Link>

                        <Tippy content="Удалить">
                            <button 
                                className="btn btn-outline-danger d-flex justify-content-center align-items-center p-0" 
                                type="button"
                                onClick={() => onDelete(id)}>
                                <i className="fa fa-trash-o"/>
                            </button>
                        </Tippy>
                    </div>
                </div>
            </div>
            
            <div className="statistics_block d-flex justify-content-center align-items-center p-1">
                <div className="likes_wrapper d-flex align-items-center px-1">
                    <span className="likesCount fw-bold me-1">{likes.length}</span>
                    <img id="like_button" src={ likes.length === 0 ? like : like_solid} alt="ava" width="20" height="20"/>
                </div>
                
                <hr className="m-0"/>
                
                <div className="likes_wrapper d-flex align-items-center px-1">
                    <span className="likesCount fw-bold me-1">{comments.length}</span>
                    <img id="like_button" src={ comments.length === 0 ? comment : comment_solid} alt="ava" width="20" height="20"/>
                </div>
                
                <hr className="my-0"/>
                
                <div className="likes_wrapper d-flex align-items-center px-1">
                    <span className="likesCount fw-bold me-1">{selectedPrograms.length}</span>
                    <img id="like_button" src={ selectedPrograms.length === 0 ? bookmark : bookmark_solid} alt="ava" width="20" height="20"/>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({

});

const mapActionToProps = {
    deleteProgram: programActions.deleteProgram,
    deleteLike: likeActions.deleteLike,
    deleteComment: commentActions.deleteComment,
    deleteSelectedProgram: selectedProgramActions.deleteSelectedProgram
}

export default connect(mapStateToProps, mapActionToProps)(UserProgramCard);
