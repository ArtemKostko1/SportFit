import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import * as programActions from '../actions/program';

import ProgramById from "./programById";

const ProgramIdPage = (props) => {
    
    const { id } = props.match.params;
    
    useEffect(() => {
        props.fetchProgramById(id)
    }, []);
    
    return (
        <div className="programIdPage_wrapper container-xxl">
            <ProgramById/>
            {/*{
                props.programItem.get = () => {
                    debugger
                    return (
                        <ProgramById
                            key={id}
                            id={id}
                            user={pUser}
                            avatar={uAvatar}
                            name={name}
                            programType={pType}
                            complexityLevel={cLevel}
                            description={description}
                            programContent={programContent}
                        />
                    );
                }
            }*/}
        </div>
    )
}

const mapStateToProps = programState => ({
    programItem: programState.program.programItem
});

const mapActionToProps = {
    fetchProgramById: programActions.fetchProgramById,
}

export default connect(mapStateToProps, mapActionToProps)(ProgramIdPage);
