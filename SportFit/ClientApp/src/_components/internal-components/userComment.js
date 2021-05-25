import React from 'react';

const UserComment = ({ avatar }) => {
    return (
        <div className="userComment_wrapper row">
            <div className="userAvatar_wrapper col-1">
                <picture>
                    <img className="avatar rounded-circle" src={ avatar } alt="ava" width="75" height="75"/>
                </picture>
            </div>
            <div className="userCommentInput_wrapper col-11">
                <form className="comment_form" action="">
                    <div className="input_wrapper form-floating row">
                        <textarea className="commentText form-control" placeholder="Leave a comment here" id="floatingTextarea"/>
                        <label htmlFor="floatingTextarea">Leave a comment here</label>
                    </div>

                    <div className="button_wrapper row d-flex justify-content-end">
                        <button type="#" className="postComment btn btn-outline-dark rounded-pill fw-bold">Post a comment</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserComment;
