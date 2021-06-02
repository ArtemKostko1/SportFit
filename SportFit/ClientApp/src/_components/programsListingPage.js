import React, { useEffect } from 'react';
import { connect } from "react-redux";
import * as programActions from '../_actions/program-actions';
import * as programTypeActions from '../_actions/programType-actions';
import * as complexityLevelActions from '../_actions/complexityLevel-actions';

import meditation from "./images/meditation.svg";

import Banner from "./internal-components/banner";
import Separator from "./internal-components/separator";
import ProgramItem from "./internal-components/programItem";
import Spinner from "./special-components/spinner/spinner";
import ProgramsFilterPanel from "./internal-components/programsFilterPanel";


const ProgramsListingPage = ({fetchAllPrograms, programList}) => {
    useEffect(() => {
        fetchAllPrograms();
    }, []);
    
    return (
        <div className="programsListingPage_wrapper container-xxl">
            <Banner/>
            <Separator image={meditation}/>
            <ProgramsFilterPanel/>
            
            <div className="programsListing_content d-flex flex-column align-items-center">
                {Object.keys(programList).length === 0 ? (<Spinner/>) : (
                    
                    programList.map((program, index) => {
                        const { id, userNickname, userAvatar, name, programType, complexityLevel, description, preView, creationDate } = program;
                        return (
                            <ProgramItem
                                id={id}
                                key={index}
                                user={userNickname}
                                avatar={userAvatar}
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
    programList: state.programReducer.programList
});

const mapActionToProps = {
    fetchAllPrograms: programActions.fetchAllPrograms
}
export default connect(mapStateToProps, mapActionToProps)(ProgramsListingPage);