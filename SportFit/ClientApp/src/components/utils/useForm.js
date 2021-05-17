import React, { useState } from 'react';

function UseForm(initialInputValues) {
    const [values, setValues] = useState(initialInputValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }
    
    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    };
}

export default UseForm;