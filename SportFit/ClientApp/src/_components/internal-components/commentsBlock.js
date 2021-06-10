import React, {useEffect} from 'react';
import {connect} from "react-redux";
import * as commentActions from "../../_actions/comment-actions";

import CommentItem from "./commentItem";
import UserComment from "./userComment";
import Spinner from "../special-components/spinner/spinner";


const CommentsBlock = ({programId, fetchAllComments, commentsList, commentsListLoading}) => {
    useEffect(() => {
        fetchAllComments();
    }, [commentsList]);

    const currentUser = JSON.parse(localStorage.getItem('user'));
    let programCommentsList = commentsList.filter(c => c.program === programId);
    
    return (
        <div className="commentsBlock_wrapper container-xxl p-0">
            {
                currentUser !== null ?
                    <UserComment programId={programId}/> :
                    null
            }
            
            {commentsListLoading === true ? (<Spinner/>) : (
                
                (programCommentsList.length !== 0 ?
                        
                    <div className="commentsList_wrapper shadow-sm"> {
                        programCommentsList.map((comment, index) => {
                            debugger
                            const {id, program, user, nickname, avatar, content, creationDate, modificationDate} = comment;
                            
                            return (
                                <CommentItem
                                    key={index}
                                    id={id}
                                    program={program}
                                    user={user}
                                    nickname={nickname}
                                    avatar={avatar}
                                    content={content}
                                    creationDate={creationDate}
                                    modificationDate={modificationDate}/>
                            );
                        })
                    }
                    </div> :
                    null
                )
            )}
        </div>
    );
};

const mapStateToProps = state => ({
    commentsList: state.commentReducer.commentsList,
    commentsListLoading: state.commentReducer.commentsListLoading
});

const mapActionToProps = {
    fetchAllComments: commentActions.fetchAllComments
}

export default connect(mapStateToProps, mapActionToProps)(CommentsBlock);
