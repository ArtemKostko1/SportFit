import React, { useEffect } from 'react';
import { connect } from "react-redux";
import * as programActions from '../_actions/program-actions';

import ProgramDetailContent from "./internal-components/programDetailContent";
import Spinner from "./special-components/spinner/spinner";
import Footer from "./internal-components/footer";


const ProgramDetailPage = ({match, programItem, fetchProgramById, programItemLoading, programItemRequested}) => {
    const currentProgram = match.params;
    
    useEffect(() => {
        fetchProgramById(currentProgram.id);
        
        return () => {
            programItemRequested();
        }
    }, [currentProgram.id]);

    const { id, userId, userNickname, userAvatar, name, programType, complexityLevel, description, content } = programItem;
    
    return (
        <>
            <div className="programDetailPage_wrapper container-xxl d-flex flex-column align-items-center">
            {programItemLoading === true ? (<Spinner/>) : (
                <ProgramDetailContent
                    id={id}
                    userId={userId}
                    userNickname={userNickname}
                    userAvatar={userAvatar}
                    name={name}
                    programType={programType}
                    complexityLevel={complexityLevel}
                    description={description}
                    content={content}
                />
            )}
        </div>

            <Footer/>
        </>
    )
}

const mapStateToProps = state => ({
    programItem: state.programReducer.programItem,
    programItemLoading: state.programReducer.programItemLoading
});

const mapActionToProps = {
    fetchProgramById: programActions.fetchProgramById,
    programItemRequested: programActions.programItemRequested
}

export default connect(mapStateToProps, mapActionToProps)(ProgramDetailPage);
