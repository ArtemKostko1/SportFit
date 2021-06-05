import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {ToastProvider} from 'react-toast-notifications';
import * as programActions from "../_actions/program-actions";
import * as programTypeActions from "../_actions/programType-actions";
import * as complexityLevelActions from "../_actions/complexityLevel-actions";

import Spinner from "./special-components/spinner/spinner";
import UserProgramCard from "./internal-components/userProgramCard";
import ProgramsFilterPanel from "./internal-components/programsFilterPanel";


const UserProgramsListingPage = ({fetchAllPrograms, fetchAllProgramTypes, fetchAllComplexityLevels, programsList}) => {    
    useEffect(() => {
        fetchAllPrograms();
        fetchAllProgramTypes();
        fetchAllComplexityLevels()
    }, []);
    
    return (
        <ToastProvider autoDismiss={true}>
        <div className="userProgramsListingPage_wrapper container-xxl">
            <div className="userProgramsListingPage_content">
                <div className="title_wrapper d-flex justify-content-center">
                    <h1 className="title fw-bold m-0">YUOR PERSONAL PROGRAMS</h1>
                </div>
                
                <ProgramsFilterPanel/>
                
                <div className="programCardsListing_wrapper row d-flex justify-content-center">
                    {
                        Object.keys(programsList).length === 0 ? (<Spinner/>) : 
                        (
                            <div className="programCardsListing_content row d-flex">
                                {
                                    programsList.map((program, index) => {
                                        const {id, name, preView, creationDate} = program;
                                        return (
                                            <UserProgramCard
                                                id={id}
                                                key={index}
                                                name={name}
                                                preView={preView}
                                                creationDate={creationDate}
                                            />
                                        );
                                    })
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
        </ToastProvider>
    );
};

const mapStateToProps = state => ({
    programsList: state.programReducer.programsList
});

const mapActionToProps = {
    fetchAllPrograms: programActions.fetchAllPrograms,
    fetchAllProgramTypes: programTypeActions.fetchAllProgramTypes,
    fetchAllComplexityLevels: complexityLevelActions.fetchAllComplexityLevels
}

export default connect(mapStateToProps, mapActionToProps)(UserProgramsListingPage);
