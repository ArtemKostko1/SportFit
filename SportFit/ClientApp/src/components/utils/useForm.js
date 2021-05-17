import React, { useState, useEffect } from 'react';

function UseForm(initialInputValues) {
    const [values, setValues] = useState(initialInputValues);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }
    
    return {
        values,
        setValues,
        handleInputChange
    };
}

export default UseForm;