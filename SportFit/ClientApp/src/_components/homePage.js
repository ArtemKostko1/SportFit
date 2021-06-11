import React from 'react';
import Banner from "./internal-components/banner";
import Separator from "./internal-components/separator";
import yoga from "./images/yoga.svg";
import Footer from "./internal-components/footer";

const HomePage = () => {
    return (
        <>            
            <div className="home_wrapper">
                <div className="home_background">
                    <div className="darkened_background d-flex flex-column justify-content-center align-items-center">
                        <div className="title text-dark">
                            ДОБРО ПОЖАЛОВАТЬ
                        </div>
                        
                        <div className="content text-light">
                            Вдохновляйтесь! Мотивируйтесь! Тренируйтесь! Правильно питайтесь! ЖИВИТЕ! 
                        </div>
                    </div>
                </div>
                
                <div className="home_content container-xxl">
                    <Separator image={yoga}/>
                    <Banner/>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default HomePage;