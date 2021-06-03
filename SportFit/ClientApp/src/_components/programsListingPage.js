import React, { useEffect } from 'react';
import { connect } from "react-redux";
import * as programActions from '../_actions/program-actions';
import * as userActions from '../_actions/user-actions';

import meditation from "./images/meditation.svg";

import Banner from "./internal-components/banner";
import Separator from "./internal-components/separator";
import ProgramItem from "./internal-components/programItem";
import Spinner from "./special-components/spinner/spinner";
import ProgramsFilterPanel from "./internal-components/programsFilterPanel";


const ProgramsListingPage = ({fetchAllPrograms, fetchAllUsers, programsList}) => {
    useEffect(() => {
        fetchAllPrograms();
        fetchAllUsers();
    }, []);
    
    return (
        <div className="programsListingPage_wrapper container-xxl">
            <Banner/>
            <Separator image={meditation}/>
            <ProgramsFilterPanel/>
            
            <div className="programsListing_content d-flex flex-column align-items-center">
                {Object.keys(programsList).length === 0 ? (<Spinner/>) : (

                    programsList.map((program, index) => {
                        const { id, userId, userNickname, userAvatar, name, programType, complexityLevel, description, preView, creationDate } = program;
                        return (
                            <ProgramItem
                                id={id}
                                key={index}
                                userId={userId}
                                userNickname={userNickname}
                                userAvatar={userAvatar}
                                name={name}
                                programType={programType}
                                complexityLevel={complexityLevel}
                                description={description}
                                preView={preView}
                                creationDate={creationDate}
                            />
                        );
                    })
                )}
            </div> 
        </div>
    );
}

const mapStateToProps = state => ({
    programsList: state.programReducer.programsList,
    usersList: state.userReducer.usersList
});

const mapActionToProps = {
    fetchAllPrograms: programActions.fetchAllPrograms,
    fetchAllUsers: userActions.fetchAllUsers
}
export default connect(mapStateToProps, mapActionToProps)(ProgramsListingPage);