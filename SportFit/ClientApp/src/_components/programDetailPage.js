import React, { useEffect } from 'react';
import { connect } from "react-redux";
import * as programActions from '../_actions/program-actions';

import ProgramDetailContent from "./internal-components/programDetailContent";
import Spinner from "./special-components/spinner/spinner";


const ProgramDetailPage = ({match, fetchProgramById, programsRequested, programItem}) => {
    const { id } = match.params;
    
    useEffect(() => {
        fetchProgramById(id);
        return () => {
            programsRequested();
        }
    }, [id]);

    const { userNickname, userAvatar, name, programType, complexityLevel, description, content } = programItem;
    
    return (
        <div className="programDetailPage_wrapper container-xxl d-flex flex-column align-items-center justify-content-center">
            {Object.keys(programItem).length === 0 ? (<Spinner/>) : (
                <ProgramDetailContent
                    user={userNickname}
                    avatar={userAvatar}
                    name={name}
                    programType={programType}
                    complexityLevel={complexityLevel}
                    description={description}
                    programContent={content}
                />
            )}
        </div>
    )
}

const mapStateToProps = programState => ({
    programItem: programState.programReducer.programItem
});

const mapActionToProps = {
    fetchProgramById: programActions.fetchProgramById,
    programsRequested: programActions.programsRequested
}

export default connect(mapStateToProps, mapActionToProps)(ProgramDetailPage);
