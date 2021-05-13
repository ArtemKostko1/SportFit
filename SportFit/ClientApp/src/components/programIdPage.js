import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import * as programActions from '../actions/program';

import ProgramById from "./programById";

const ProgramIdPage = (props) => {
    debugger
    const { id } = props.match.params;
    
    useEffect(() => {
        props.fetchProgramById(id)
    }, []);
    debugger
    return (
        <div className="programIdPage_wrapper container-xxl">
            <ProgramById/>
            {/*{
                props.programItem((record) => {
                    debugger
                    return (
                        <ProgramById
                            key={id}
                            id={record.id}
                            user={record.pUser}
                            avatar={record.uAvatar}
                            name={record.name}
                            programType={record.pType}
                            complexityLevel={record.cLevel}
                            description={record.description}
                            programContent={record.programContent}
                        />
                    );
                })
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
