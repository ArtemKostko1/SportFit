import React, {useEffect} from 'react';
import {connect} from "react-redux";
import * as programActions from "../_actions/program-actions";

import Spinner from "./special-components/spinner/spinner";
import UserProgramCard from "./internal-components/userProgramCard";
import ProgramsFilterPanel from "./internal-components/programsFilterPanel";
import Banner from "./internal-components/banner";
import empty from "./images/empty.svg";
import Footer from "./internal-components/footer";


const UserProgramsListingPage = ({fetchAllMyPrograms, myProgramsList, myProgramsLoading}) => {
    const currentUserId = JSON.parse(localStorage.getItem('user')).id;
    
    useEffect(() => {
        fetchAllMyPrograms(currentUserId);

    }, [myProgramsList]);
    
    return (
        <>
            <div className="userProgramsListingPage_wrapper container-xxl">
                <div className="userProgramsListingPage_content">
                    <div className="title_wrapper d-flex justify-content-center">
                        <h1 className="title fw-bold m-0">ВАШИ ПЕРСОНАЛЬНЫЕ ПРОГРАММЫ</h1>
                    </div>
                    
                    {/*{
                        Object.keys(myProgramsList).length !== 0 ?
                            <ProgramsFilterPanel/> :
                            null
                    }*/}
                    
                    <div className="programCardsListing_wrapper">
                        {
                            myProgramsLoading === true ? (
                                <div className="loading_wrapper d-flex justify-content-center align-items-center">
                                    <Spinner/>
                                </div>
                                ) : 
                                
                            (Object.keys(myProgramsList).length === 0 ? (
                                    <div className="empty_wrapper row container-xxl">
                                        <div className="title_wrapper d-flex justify-content-center">
                                            <img src={empty} alt="email" width="300" height="300"/>
                                        </div>
                                        
                                        <Banner/>
                                    </div>
                                ) :
                                    
                                <div className="programCardsListing_content row d-flex">
                                    {
                                        myProgramsList.map((program, index) => {
                                            const {id, name, preView, creationDate, likes, comments, selectedPrograms} = program;
                                            return (
                                                <UserProgramCard
                                                    id={id}
                                                    key={index}
                                                    name={name}
                                                    preView={preView}
                                                    creationDate={creationDate}
                                                    likes={likes}
                                                    comments={comments}
                                                    selectedPrograms={selectedPrograms}
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
    myProgramsList: state.programReducer.myProgramsList,
    myProgramsLoading: state.programReducer.myProgramsLoading
});

const mapActionToProps = {
    fetchAllMyPrograms: programActions.fetchAllMyPrograms
}

export default connect(mapStateToProps, mapActionToProps)(UserProgramsListingPage);
