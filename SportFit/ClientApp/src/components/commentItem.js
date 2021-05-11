import React from 'react';

const CommentItem = ({ avatar, nickname, comment }) => {
    return (
        <div className="commentItem_wrapper row">
            <div className="userAvatar_wrapper col-1">
                <img className="avatar rounded-circle" src={ avatar } alt="ava" width="75" height="75"/>
            </div>

            <div className="commentItem_content col-11">
                <div className="userNickname">
                    <span className="fw-bold">{ nickname }</span>
                </div>

                <div className="commentText row">
                    { comment }
                </div>
            </div>
        </div>
    );
};

export default CommentItem;
