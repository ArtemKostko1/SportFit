import React from 'react';
import Banner from "./internal-components/banner";
import Separator from "./internal-components/separator";
import yoga from "./images/yoga.svg";
import Footer from "./internal-components/footer";

const HomePage = () => {
    return (
        <>
            <div className="home_wrapper container-xxl">
                <Separator image={yoga}/>
                <Banner/>
            </div>

            <Footer/>
        </>
    );
}

export default HomePage;