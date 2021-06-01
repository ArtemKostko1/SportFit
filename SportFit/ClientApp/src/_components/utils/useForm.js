import React, { useState } from 'react';

const useForm = (initialInputValues, validate) => {
    debugger
    const [values, setValues] = useState(initialInputValues);
    const [errors, setErrors] = useState({});
    
    const handleInputChange = e => {
        const { name, value } = e.target;
        const fieldValues = {[name]: value}
        setValues({
            ...values,
            ...fieldValues
        })
        validate(fieldValues)
    }
    
    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    }
}

export default useForm;