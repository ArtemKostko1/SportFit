﻿import React, { useEffect } from 'react';
import { connect } from "react-redux";
import * as programActions from '../_actions/program-actions';

import Banner from "./internal-components/banner";
import Separator from "./internal-components/separator";
import ProgramItem from "./internal-components/programItem";
import Spinner from "./special-components/spinner/spinner";
import ProgramsFilterPanel from "./internal-components/programsFilterPanel";

import meditation from "./images/meditation.svg";
import empty from "./images/empty.svg";
import Footer from "./internal-components/footer";


const ProgramsListingPage = ({fetchAllPrograms, programsList, programsListLoading}) => {
    useEffect(() => {
        fetchAllPrograms();
    }, []);
    
    return (
        <>
            <div className="programsListingPage_wrapper container-xxl">
            <Banner/>
            <Separator image={meditation}/>
            
            {
                Object.keys(programsList).length !== 0 ?
                    <ProgramsFilterPanel/> :
                    null
            }
            
            <div className="programsListing_content d-flex flex-column align-items-center">
                {programsListLoading === true ? (<Spinner/>) : (
                    
                    (Object.keys(programsList).length === 0 ? (
                        <div className="empty_wrapper row container-xxl">
                            <div className="title_wrapper d-flex justify-content-center">
                                <img src={empty} alt="email" width="300" height="300"/>
                            </div>
                        </div>
                    ) :
                            
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
                ))}
            </div> 
        </div>

            <Footer/>
        </>
    );
}

const mapStateToProps = state => ({
    programsList: state.programReducer.programsList,
    programsListLoading: state.programReducer.programsListLoading
});

const mapActionToProps = {
    fetchAllPrograms: programActions.fetchAllPrograms
}
export default connect(mapStateToProps, mapActionToProps)(ProgramsListingPage);