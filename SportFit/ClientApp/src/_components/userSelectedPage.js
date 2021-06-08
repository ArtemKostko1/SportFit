import React from 'react';
import Footer from "./internal-components/footer";
import ProgramsFilterPanel from "./internal-components/programsFilterPanel";
import Spinner from "./special-components/spinner/spinner";
import empty from "./images/empty.svg";
import Banner from "./internal-components/banner";
import UserProgramCard from "./internal-components/userProgramCard";

const UserSelectedPage = ({...props}) => {
    return (
        <>
            {/*<div className="userProgramsListingPage_wrapper container-xxl">
                <div className="userProgramsListingPage_content">
                    <div className="title_wrapper d-flex justify-content-center">
                        <h1 className="title fw-bold m-0">YUOR PERSONAL PROGRAMS</h1>
                    </div>

                    {
                        Object.keys(myProgramsList).length !== 0 ?
                            <ProgramsFilterPanel/> :
                            null
                    }

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
                                                    const {id, name, preView, creationDate} = program;
                                                    return (
                                                        <UserProgramCard
                                                            id={id}
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
            </div>*/}

            <Footer/>
        </>
    );
};

export default UserSelectedPage;
