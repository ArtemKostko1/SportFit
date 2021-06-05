import React, { useState } from 'react';

const useForm = (initialInputValues, validate) => {
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

    const resetForm = () => {       
       setValues({
           ...initialInputValues
       });
       
       setErrors({
           
       })
    }
    
    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }
}

export default useForm;