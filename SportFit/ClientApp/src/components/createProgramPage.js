import React from 'react';
import UseForm from "./utils/useForm";
import camera from "./images/camera.svg";

const initialInputValues = {
    name: '',
    programType: '',
    complexityLevel: '',
    description: '',
    program: ''
}

const CreateProgramPage = ({...props}) => {
    const validate = () => {
        let temp = {};
        
        temp.name = values.name ? "" : "This field is required.";
        temp.programType = values.programType ? "" : "This field is required.";
        temp.complexityLevel = values.complexityLevel ? "" : "This field is required.";
        temp.description = values.description ? "" : "This field is required.";
        temp.program = values.program ? "" : "This field is required.";
        
        setErrors({
            ...temp
        });
        
        return Object.values(temp).every(x => x === "");
    }
    
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = UseForm(initialInputValues);
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(values);
        if (validate()) {
            window.alert('Validation succeeded');
        }
    }

    return (
        <div className="createProgramPage_wrapper container-xxl">
            <div className="createProgram_content">
                <form className="was-validated" autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <div className="top_block row">
                        <div className="left_block col-7 pe-4">
                            <div className="input_wrapper p-0">
                                <label htmlFor="formGroupExampleInput2" className="form-label fw-bold">Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="Input name"
                                    value={values.name}
                                    onChange={handleInputChange}
                                    required/>
                                    
                                <div className="invalid-feedback">
                                    Please enter a program name.
                                </div>
                            </div>

                            <div className="input_wrapper p-0">
                                <label htmlFor="type" className="form-label fw-bold">Type</label>
                                <select 
                                    name="programType" 
                                    className="form-select" 
                                    id="type" 
                                    aria-label="select example" 
                                    value={values.programType}
                                    onChange={handleInputChange}
                                    required>
                                    
                                    <option value="">Open this select menu</option>
                                    <option value="Training program">Training program</option>
                                    <option value="Meal plan">Meal plan</option>
                                </select>
                                <div className="invalid-feedback">Program type not selected</div>
                            </div>

                            <div className="input_wrapper p-0">
                                <label htmlFor="complexityLevel" className="form-label fw-bold">Complexity Level</label>
                                <select 
                                    name="complexityLevel" 
                                    className="form-select" 
                                    aria-label="select example" 
                                    value={values.complexityLevel}
                                    onChange={handleInputChange}
                                    required>
                                    
                                    <option value="">Open this select menu</option>
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                    <option value="Professional">Professional</option>
                                </select>
                                <div className="invalid-feedback">Complexity level not selected</div>
                            </div>

                            <div className="input_wrapper p-0">
                                <label htmlFor="formGroupExampleInput2" className="form-label fw-bold">Description</label>
                                <input
                                    name="description"
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="Input description"
                                    value={values.description}
                                    onChange={handleInputChange}
                                    required/>

                                <div className="invalid-feedback">
                                    Please enter a program description.
                                </div>
                            </div>
                        </div>

                        <div className="right_block col-5 ps-4">
                            <div className="content_block">
                                <div className="photo_wrapper d-flex justify-content-center align-items-center w-100">
                                    <img src={camera} alt="" width="187" height="141"/>
                                </div>

                                <input className="downloadPhoto form-control" type="file" id="formFile" required/>
                                <div className="invalid-feedback">
                                    Please select a program description.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bottom_block">
                        <div className="programContent_block row">
                            <label htmlFor="validationTextarea" className="form-label fw-bold">Program:</label>
                            <div className="form-floating">
                                <textarea
                                    name="program"
                                    className="form-control is-invalid"
                                    id="validationTextarea"
                                    placeholder="Leave a comment here"
                                    value={values.program}
                                    onChange={handleInputChange}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter a program content.
                                </div>
                                <label htmlFor="floatingTextarea2">Input program content</label>
                            </div>
                        </div>
                    </div>

                    <div className="actions_block row">
                        <div className="col-11 pe-3">
                            <button type="submit" className="createProgram btn btn-primary w-100 fw-bold">
                                CREATE
                            </button>
                        </div>
                        <div className="col-1">
                            <button type="button" className="createProgram btn btn-outline-secondary w-100 fw-bold" >
                                CLEAR
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateProgramPage;