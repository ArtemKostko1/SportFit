import React, { useState } from 'react';

function UseForm(initialInputValues) {
    const [values, setValues] = useState(initialInputValues);
    const [errors, setErrors] = useState({});

    const validate = (fieldValues = values) => {
        let temp = {};

        temp.name = fieldValues.name ? "" : "Please enter a program name";
        temp.programType = fieldValues.programType ? "" : "Program type not selected";
        temp.complexityLevel = fieldValues.complexityLevel ? "" : "Complexity level not selected";
        temp.description = fieldValues.description ? "" : "Please enter a program description";
        temp.programContent = fieldValues.programContent ? "" : "Please enter a program content";
        temp.programPreview = fieldValues.programPreview ? "" : "Please select the preview of the program";

        setErrors({
            ...temp
        });

        return Object.values(temp).every(x => x === "");
    }
    
    const handleInputChange = e => {
        const { name, value } = e.target;
        const fieldValues = {[name]: value}
        setValues({
            ...values,
            ...fieldValues
        });
    }
    
    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        validate
    };
}

export default UseForm;