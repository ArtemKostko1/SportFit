import React from 'react';
import { connect } from "react-redux";
import UseForm from "./utils/useForm";
import camera from "./images/camera.svg";
import * as programActions from "../actions/program";
import * as programTypeActions from "../actions/programType";
import * as complexityLevelActions from "../actions/complexityLevel";

const initialInputValues = {
    name: '',
    programType: '',
    complexityLevel: '',
    description: '',
    programContent: ''
}

const CreateProgramPage = ({...props}) => {
        const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange, 
        validate
    } = UseForm(initialInputValues);

    const handleSubmit = e => {
        e.preventDefault();
        checkValidation();

        debugger
        if (validate()) {
            props.createProgram(values, () => {window.alert('Inserted')})
        }
    }

    function checkValidation() {
        'use strict'
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.querySelectorAll('.createProgram_form')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    }

    return (
        <div className="createProgramPage_wrapper container-xxl">
            <div className="createProgram_content">
                <form className="createProgram_form needs-validation" autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <div className="top_block row">
                        <div className="left_block col-7 pe-4">
                            <div className="input_wrapper p-0">
                                <label htmlFor="validationCustomName" className="form-label fw-bold">Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    id="validationCustomName"
                                    placeholder="Input name"
                                    value={values.name}
                                    onChange={handleInputChange}
                                    required
                                    {...(errors.name && { error: "true" })}/>

                                <div className="invalid-feedback">{errors.name}</div>
                            </div>

                            <div className="input_wrapper p-0">
                                <label htmlFor="validationCustomType" className="form-label fw-bold">Type</label>
                                <select
                                    name="programType"
                                    className="form-select"
                                    id="validationCustomType"
                                    aria-label="select example"
                                    value={values.programType}
                                    onChange={handleInputChange}
                                    required
                                    {...(errors.programType && { error: "true" })}>

                                    <option value="">Open this select menu</option>
                                    <option value="Training program">Training program</option>
                                    <option value="Meal plan">Meal plan</option>
                                </select>
                                <div className="invalid-feedback">{errors.programType}</div>
                            </div>

                            <div className="input_wrapper p-0">
                                <label htmlFor="validationCustomComplexityLevel" className="form-label fw-bold">Complexity Level</label>
                                <select
                                    name="complexityLevel"
                                    className="form-select"
                                    id="validationCustomComplexityLevel"
                                    aria-label="select example"
                                    value={values.complexityLevel}
                                    onChange={handleInputChange}
                                    required
                                    {...(errors.complexityLevel && { error: "true" })}>

                                    <option value="">Open this select menu</option>
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                    <option value="Professional">Professional</option>
                                </select>
                                <div className="invalid-feedback">{errors.complexityLevel}</div>
                            </div>

                            <div className="input_wrapper p-0">
                                <label htmlFor="validationCustomDescription" className="form-label fw-bold">Description</label>
                                <input
                                    name="description"
                                    type="text"
                                    className="form-control"
                                    id="validationCustomDescription"
                                    placeholder="Input description"
                                    value={values.description}
                                    onChange={handleInputChange}
                                    required
                                    {...(errors.description && { error: "true" })}/>

                                <div className="invalid-feedback">{errors.description}</div>
                            </div>
                        </div>

                        <div className="right_block col-5 ps-4">
                            <div className="content_block">
                                <div className="photo_wrapper d-flex justify-content-center align-items-center w-100">
                                    <img src={camera} alt="" width="187" height="141"/>
                                </div>

                                <input
                                    name="programPreview"
                                    className="downloadPhoto form-control" 
                                    type="file" 
                                    id="validationCustomPhoto"
                                    onChange={handleInputChange}
                                    required
                                    {...(errors.programPreview && { error: "true" })}/>
                                    
                                <div className="invalid-feedback">{errors.programPreview}</div>
                            </div>
                        </div>
                    </div>

                    <div className="bottom_block">
                        <div className="programContent_block row">
                            <label htmlFor="validationCustomProgramContent" className="form-label fw-bold">Program:</label>
                            <div className="form-floating">
                                <textarea
                                    name="programContent"
                                    className="form-control"
                                    id="validationCustomProgramContent"
                                    placeholder="Leave a comment here"
                                    value={values.programContent}
                                    onChange={handleInputChange}
                                    required
                                    {...(errors.programContent && { error: "true" })}/>
                                    
                                <label htmlFor="floatingTextarea2">Input program content</label>
                                <div className="invalid-feedback">{errors.programContent}</div>
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
                            <button type="reset" className="createProgram btn btn-outline-secondary w-100 fw-bold">
                                CLEAR
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = programState => ({
    programTypesList: programState.programTypeReducer.
    programList: programState.programReducer.programList,
    loading: programState.programReducer.loading
});

const mapActionToProps = {
    programType: programTypeActions.fetchAllProgramTypes,
    complexityLevel: complexityLevelActions.fetchAllComplexityLevels,
    createProgram: programActions.create,
    updateProgram: programActions.update
}

export default connect(mapStateToProps, mapActionToProps)(CreateProgramPage);