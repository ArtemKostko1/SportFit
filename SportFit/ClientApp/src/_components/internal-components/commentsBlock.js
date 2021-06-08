import React, {useEffect} from 'react';
import {connect} from "react-redux";
import * as commentActions from "../../_actions/comment-actions";

import CommentItem from "./commentItem";
import UserComment from "./userComment";
import Spinner from "../special-components/spinner/spinner";


const CommentsBlock = ({programId, userId, fetchAllComment, commentsList, commentsListLoading}) => {
    useEffect(() => {
        fetchAllComment();
    }, []);

    let programCommentsList = commentsList.filter(c => c.program === programId);
    
    return (
        <div className="commentsBlock_wrapper container-xxl shadow-sm p-0">
            <UserComment programId={programId}/>
            
            <hr className="w-100 m-0"/>
            
            {commentsListLoading === true ? (<Spinner/>) : (
                
                (programCommentsList.length !== 0 ?
                        
                    <div className="commentsList_wrapper"> {
                        programCommentsList.map((comment, index) => {
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
    fetchAllComment: commentActions.fetchAllComments
}

export default connect(mapStateToProps, mapActionToProps)(CommentsBlock);
