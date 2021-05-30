import React from 'react';
import UserProgramCard from "./internal-components/userProgramCard";
import ProgramsFilterPanel from "./internal-components/programsFilterPanel";

const UserProgramsPage = ({...props}) => {
    return (
        <div className="userProgramsPage_wrapper container-xxl">
            <div className="userProgramsPage_content">
                <div className="title_wrapper d-flex justify-content-center">
                    <h1 className="title fw-bold m-0">YUOR PERSONAL PROGRAMS</h1>
                </div>
                
                <ProgramsFilterPanel/>
                
                <div className="userProgramsListing_wrapper">
                    <UserProgramCard/>
                </div>
            </div>
        </div>
    );
};

export default UserProgramsPage;
