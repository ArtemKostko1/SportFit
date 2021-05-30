import React, {useEffect} from 'react';
import UserProgramCard from "./internal-components/userProgramCard";
import ProgramsFilterPanel from "./internal-components/programsFilterPanel";
import * as programActions from "../_actions/program-actions";
import {connect} from "react-redux";
import Spinner from "./special-components/spinner/spinner";

const UserProgramsPage = ({fetchAllPrograms, programList}) => {
    useEffect(() => {
        fetchAllPrograms();
    }, []);
    
    return (
        <div className="userProgramsPage_wrapper container-xxl">
            <div className="userProgramsPage_content">
                <div className="title_wrapper d-flex justify-content-center">
                    <h1 className="title fw-bold m-0">YUOR PERSONAL PROGRAMS</h1>
                </div>
                
                <ProgramsFilterPanel/>
                
                <div className="userProgramsListing_wrapper row d-flex">
                    {Object.keys(programList).length === 0 ? (<Spinner/>) : (

                        programList.map((program, index) => {
                            const { id, name, preView } = program;
                            return (
                                <UserProgramCard
                                    id={id}
                                    key={index}
                                    name={name}
                                    preView={preView}
                                />
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = programState => ({
    programList: programState.programReducer.programList
});

const mapActionToProps = {
    fetchAllPrograms: programActions.fetchAllPrograms
}

export default connect(mapStateToProps, mapActionToProps)(UserProgramsPage);
