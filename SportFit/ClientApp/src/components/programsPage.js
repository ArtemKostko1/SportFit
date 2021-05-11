import React, { useEffect } from 'react';
import {connect} from "react-redux";
import * as programActions from '../actions/program';

import meditation from "./images/meditation.svg";

import Banner from "./banner";
import Separator from "./separator";
import ProgramItem from "./programItem";


const ProgramsPage = (props) => {
    useEffect(() => {
        props.fetchAllPrograms()
    }, []);

    return (
        <div className="programsPage_wrapper container-xxl">
            <Banner/>
            <Separator image={meditation}/>
            
            {
                props.programList.map((record, index) => {
                    return (
                        <ProgramItem
                            key={index}
                            id={record.id}
                            user={record.pUser}
                            avatar={record.uAvatar}
                            name={record.name}
                            programType={record.pType}
                            complexityLevel={record.cLevel}
                            description={record.description}
                        />
                    );
                })
            }
        </div>
    );
}

const mapStateToProps = programState => ({
    programList: programState.program.list,
});

const mapActionToProps = {
    fetchAllPrograms: programActions.fetchAllPrograms,
}

export default connect(mapStateToProps, mapActionToProps)(ProgramsPage);