import React from 'react';
import CommentItem from "./commentItem";
import UserComment from "./userComment";

import profile from "./images/profile.svg";

const CommentsBlock = () => {
    return (
        <div className="commentsBlock_wrapper">
            <UserComment avatar={ profile }/>
            
            <hr className="w-100 m-0"/>
            
            <div className="commentsList_wrapper">
                <CommentItem avatar={ profile } nickname="Floyd Miles" comment="Great choice of Acronym AF1’s 👌🏼"/>
                <CommentItem avatar={ profile } nickname="Savannah Nguyen" comment="Flipping the cassette while reading/examining the fold-out cover 😁"/>
                <CommentItem avatar={ profile } nickname="Marvin McKinney" comment="Everyday I “just” listen to music 👌🏿"/>
                <CommentItem avatar={ profile } nickname="Courtney Henry" comment="Soo great!!!"/>
            </div>
        </div>
    );
};

export default CommentsBlock;
