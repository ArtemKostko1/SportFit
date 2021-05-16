import React, { useEffect } from 'react';
import { connect } from "react-redux";
import * as programActions from '../actions/program';

import meditation from "./images/meditation.svg";

import Banner from "./banner";
import Separator from "./separator";
import ProgramItem from "./programItem";
import Spinner from "./special-components/spinner/spinner";


const ProgramsListingPage = ({fetchAllPrograms, programsRequested, programList}) => {
    useEffect(() => {
        fetchAllPrograms();
        return () => {
            programsRequested();
        }
    }, []);
    
    return (
        <div className="programsPage_wrapper container-xxl">
            <Banner/>
            <Separator image={meditation}/>
            
            <div className="programsListing_content d-flex flex-column align-items-center">
                {Object.keys(programList).length === 0 ? (<Spinner/>) : (
                    
                    programList.map((program, index) => {
                        const { id, pUser, uAvatar, name, pType, cLevel, description } = program;
                        return (
                            <ProgramItem
                                id={id}
                                key={index}
                                user={pUser}
                                avatar={uAvatar}
                                name={name}
                                programType={pType}
                                complexityLevel={cLevel}
                                description={description}
                            />
                        );
                    })
                )}
            </div> 
        </div>
    );
}

const mapStateToProps = programState => ({
    programList: programState.programReducer.programList,
    loading: programState.programReducer.loading
});

const mapActionToProps = {
    fetchAllPrograms: programActions.fetchAllPrograms,
    programsRequested: programActions.programsRequested
}
export default connect(mapStateToProps, mapActionToProps)(ProgramsListingPage);