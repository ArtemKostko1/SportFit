import React from 'react';
import Banner from "./internal-components/banner";
import Separator from "./internal-components/separator";
import yoga from "./images/yoga.svg";

const HomePage = () => {
    return (
        <div className="home_wrapper container-xxl">
            <Separator image={yoga}/>
            <Banner/>
        </div>
    );
}

export default HomePage;