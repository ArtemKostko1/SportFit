import React, {useEffect} from 'react';
import { connect } from "react-redux";
import useForm from "./utils/useForm";
import camera from "./images/camera.svg";
import * as programActions from "../_actions/program-actions";
import * as programTypeActions from "../_actions/programType-actions";
import * as complexityLevelActions from "../_actions/complexityLevel-actions";

const initialInputValues = {
    Name: '',
    UserId: '051262e3-0d27-4168-bbc1-83b353d4c795',
    ProgramTypeId: '',
    ComplexityLevelId: '',
    Description: '',
    ProgramContent: ''
}

const CreateProgramPage = ({...props}) => {
    const validate = (fieldValues = values) => {
        let temp = {};

        if('Name' in fieldValues)
            temp.Name = fieldValues.Name ? "" : "Please enter a program name";
        if('ProgramTypeId' in fieldValues)
            temp.ProgramTypeId = fieldValues.ProgramTypeId ? "" : "Program type not selected";
        if('ComplexityLevelId' in fieldValues)
            temp.ComplexityLevelId = fieldValues.ComplexityLevelId ? "" : "Complexity level not selected";
        if('Description' in fieldValues)    
            temp.Description = fieldValues.Description ? "" : "Please enter a program description";
        if('ProgramContent' in fieldValues)    
            temp.ProgramContent = fieldValues.ProgramContent ? "" : "Please enter a program content";
        if('ProgramPreview' in fieldValues)    
            temp.ProgramPreview = fieldValues.ProgramPreview ? "" : "Please select the preview of the program";

        setErrors({
            ...temp
        });
        
        if (fieldValues === values)
            return Object.values(temp).every(x => x === "");
    }
    
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialInputValues, validate);

    const handleSubmit = e => {
        e.preventDefault();
        checkValidation();
        
        if (validate()) {
            props.createProgram(values, () => {window.alert('Inserted')});
            values.Name = '';
            values.UserId = '';
            values.ProgramTypeId = '';
            values.ComplexityLevelId = '';
            values.Description = '';
            values.ProgramContent = '';
        }
    }

    function checkValidation() {
        'use strict'
        let forms = document.querySelectorAll('.createProgram_form')

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
    
    useEffect(() => {
        props.fetchAllProgramTypes();
        props.fetchAllComplexityLevels();
    }, []);

    return (
        <div className="createProgramPage_wrapper container-xxl">
            <div className="createProgram_content">
                <form className="createProgram_form needs-validation" autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <div className="top_block row">
                        <div className="left_block col-7 pe-4">
                            <div className="input_wrapper p-0">
                                <label htmlFor="validationCustomName" className="form-label fw-bold">Name</label>
                                <input
                                    name="Name"
                                    type="text"
                                    className="form-control"
                                    id="validationCustomName"
                                    placeholder="Input name"
                                    value={values.name}
                                    onChange={handleInputChange}
                                    required
                                    {...(errors.Name && { error: "true" })}/>

                                <div className="invalid-feedback">{errors.Name}</div>
                            </div>

                            <div className="input_wrapper p-0">
                                <label htmlFor="validationCustomType" className="form-label fw-bold">Type</label>
                                <select
                                    name="ProgramTypeId"
                                    className="form-select"
                                    id="validationCustomType"
                                    aria-label="select example"
                                    value={values.programType}
                                    onChange={handleInputChange}
                                    required
                                    {...(errors.ProgramTypeId && { error: "true" })}>

                                    <option selected value="">Open this select menu</option>
                                    {
                                        props.programTypesList.map((programType, index) => {
                                            const { id, name } = programType;
                                            return (
                                                <option
                                                    key={index}
                                                    value={id}>
                                                    
                                                    {name}
                                                </option>
                                            );
                                        }
                                    )}
                                </select>
                                <div className="invalid-feedback">{errors.ProgramTypeId}</div>
                            </div>

                            <div className="input_wrapper p-0">
                                <label htmlFor="validationCustomComplexityLevel" className="form-label fw-bold">Complexity Level</label>
                                <select
                                    name="ComplexityLevelId"
                                    className="form-select"
                                    id="validationCustomComplexityLevel"
                                    aria-label="select example"
                                    value={values.ComplexityLevelId}
                                    onChange={handleInputChange}
                                    required
                                    {...(errors.ComplexityLevelId && { error: "true" })}>

                                    <option selected value="">Open this select menu</option>
                                    {
                                        props.complexityLevelsList.map((complexityLevel, index) => {
                                                const { id, name } = complexityLevel;
                                                return (
                                                    <option
                                                        key={index}
                                                        value={id}>

                                                        {name}
                                                    </option>
                                                );
                                            }
                                        )}
                                </select>
                                <div className="invalid-feedback">{errors.ComplexityLevelId}</div>
                            </div>

                            <div className="input_wrapper p-0">
                                <label htmlFor="validationCustomDescription" className="form-label fw-bold">Description</label>
                                <input
                                    name="Description"
                                    type="text"
                                    className="form-control"
                                    id="validationCustomDescription"
                                    placeholder="Input description"
                                    value={values.description}
                                    onChange={handleInputChange}
                                    required
                                    {...(errors.Description && { error: "true" })}/>

                                <div className="invalid-feedback">{errors.Description}</div>
                            </div>
                        </div>

                        <div className="right_block col-5 ps-4">
                            <div className="content_block">
                                <div className="photo_wrapper d-flex justify-content-center align-items-center w-100">
                                    <img src={camera} alt="" width="187" height="141"/>
                                </div>

                                <input
                                    name="ProgramPreview"
                                    className="downloadPhoto form-control" 
                                    type="file" 
                                    id="validationCustomPhoto"
                                    onChange={handleInputChange}
                                    required
                                    {...(errors.ProgramPreview && { error: "true" })}/>
                                    
                                <div className="invalid-feedback">{errors.ProgramPreview}</div>
                            </div>
                        </div>
                    </div>

                    <div className="bottom_block">
                        <div className="programContent_block row">
                            <label htmlFor="validationCustomProgramContent" className="form-label fw-bold">Program:</label>
                            <div className="form-floating">
                                <textarea
                                    name="ProgramContent"
                                    className="form-control"
                                    id="validationCustomProgramContent"
                                    placeholder="Leave a comment here"
                                    value={values.programContent}
                                    onChange={handleInputChange}
                                    required
                                    {...(errors.ProgramContent && { error: "true" })}/>
                                    
                                <label htmlFor="floatingTextarea2">Input program content</label>
                                <div className="invalid-feedback">{errors.ProgramContent}</div>
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
    programList: programState.programReducer.programList,
    programTypesList: programState.programTypeReducer.programTypesList,
    complexityLevelsList: programState.complexityLevelReducer.complexityLevelsList,
});

const mapActionToProps = {
    createProgram: programActions.createProgram,
    fetchAllProgramTypes: programTypeActions.fetchAllProgramTypes,
    fetchAllComplexityLevels: complexityLevelActions.fetchAllComplexityLevels,
}

export default connect(mapStateToProps, mapActionToProps)(CreateProgramPage);