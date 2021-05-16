import React, { useEffect } from 'react';
import { connect } from "react-redux";
import * as programActions from '../actions/program';

import ProgramDetailContent from "./programDetailContent";
import Spinner from "./special-components/spinner/spinner";


const ProgramDetailPage = ({match, fetchProgramById, programsRequested, programItem}) => {
    const { id } = match.params;
    
    useEffect(() => {
        fetchProgramById(id);
        return () => {
            programsRequested();
        }
    }, [id]);

    const { pUser, uAvatar, name, pType, cLevel, description, programContent } = programItem;

    return (
        <div className="programDetailPage_wrapper container-xxl d-flex flex-column align-items-center justify-content-center">
            {Object.keys(programItem).length === 0 ? (<Spinner/>) : (
                <ProgramDetailContent
                    user={pUser}
                    avatar={uAvatar}
                    name={name}
                    programType={pType}
                    complexityLevel={cLevel}
                    description={description}
                    programContent={programContent}
                />
            )}
        </div>
    )
}

const mapStateToProps = programState => ({
    programItem: programState.programReducer.programItem,
    loading: programState.programReducer.loading
});

const mapActionToProps = {
    fetchProgramById: programActions.fetchProgramById,
    programsRequested: programActions.programsRequested
}

export default connect(mapStateToProps, mapActionToProps)(ProgramDetailPage);
