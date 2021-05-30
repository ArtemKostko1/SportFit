import React from 'react';
import camera from "../images/camera.svg";

const UserProgramCard = ({preView}) => {
    return (
        <div className="userProgramCard_wrapper shadow">
            <div className="preView_wrapper d-flex justify-content-center align-items-center w-100">
                {
                    preView === null || preView === '' || preView ?
                        <img src={camera} alt="preView" width="187" height="141"/> :
                        <img className="preView_photo" src={preView} alt="preView" width="auto" height="100%"/>
                }
            </div>
            <div className="name_wrapper">
                <span></span>
            </div>
        </div>
    );
};

export default UserProgramCard;
