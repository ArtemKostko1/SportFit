import React from 'react';

const Separator = ( {image} ) => {    
    return (
        <div className="separator_wrapper container-xxl d-flex justify-content-center align-items-center px-5">
            <hr className="bg-primary w-100 m-0"/>
            <img src={image} alt="" className="mx-5" width="200" height="200"/>
            <hr className="bg-primary w-100 m-0"/>
        </div>
    );
}

export default Separator;