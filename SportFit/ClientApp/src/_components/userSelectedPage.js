import React, {useEffect} from 'react';
import {connect} from "react-redux";
import * as selectedProgramActions from "../_actions/selectedProgram-actions";

import UserSelectedProgramCard from "./internal-components/userSelectedProgramCard";
import Footer from "./internal-components/footer";
import ProgramsFilterPanel from "./internal-components/programsFilterPanel";
import Spinner from "./special-components/spinner/spinner";

import empty from "./images/empty.svg";


const UserSelectedPage = ({fetchAllSelectedPrograms, selectedProgramsList, selectedProgramsListLoading, ...props}) => {    
    useEffect(() => {
        fetchAllSelectedPrograms(currentUser.id);
    }, [selectedProgramsList]);

    const currentUser = JSON.parse(localStorage.getItem('user'));
    
    return (
        <>
            <div className="userSelectedProgramsListingPage_wrapper container-xxl">
                <div className="userSelectedProgramsListingPage_content">
                    <div className="title_wrapper d-flex justify-content-center">
                        <h1 className="title fw-bold m-0">ИЗБРАННЫЕ</h1>
                    </div>

                    {/*{
                        Object.keys(selectedProgramsList).length !== 0 ?
                            <ProgramsFilterPanel/> :
                            null
                    }*/}

                    <div className="selectedProgramCardsListing_wrapper">
                        {
                            selectedProgramsListLoading === true ? 
                                (
                                    <div className="loading_wrapper d-flex justify-content-center align-items-center">
                                        <Spinner/>
                                    </div>
                                ) :

                                (Object.keys(selectedProgramsList).length === 0 ? 
                                    (
                                        <div className="empty_wrapper row container-xxl d-flex align-items-center">
                                            <div className="title_wrapper d-flex justify-content-center">
                                                <img src={empty} alt="email" width="300" height="300"/>
                                            </div>
                                        </div>
                                    ) :

                                    <div className="selectedProgramCardsListing_content row d-flex">
                                        {
                                            selectedProgramsList.map((program, index) => {
                                                const {id, programId, name, preView, creationDate} = program;
                                                return (
                                                    <UserSelectedProgramCard
                                                        id={id}
                                                        programId={programId}
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

            <Footer/>
        </>
    );
};

const mapStateToProps = state => ({
    selectedProgramsList: state.selectedProgramReducer.selectedProgramsList,
    selectedProgramsListLoading: state.selectedProgramReducer.selectedProgramsListLoading
});

const mapActionToProps = {
    fetchAllSelectedPrograms: selectedProgramActions.fetchAllSelectedPrograms
}

export default connect(mapStateToProps, mapActionToProps)(UserSelectedPage);
