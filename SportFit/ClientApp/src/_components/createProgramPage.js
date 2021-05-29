import React, {useEffect} from 'react';
import { connect } from "react-redux";
import * as programActions from "../_actions/program-actions";
import * as programTypeActions from "../_actions/programType-actions";
import * as complexityLevelActions from "../_actions/complexityLevel-actions";
import useForm from "./utils/useForm";

import camera from "./images/camera.svg";


const CreateProgramPage = ({...props}) => {
    const initialInputValues = {
        Name: '',
        UserId: props.userItem.id,
        ProgramTypeId: '',
        ComplexityLevelId: '',
        Description: '',
        Content: '',
        PreView: ''
    }
    
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
        if('Content' in fieldValues)    
            temp.Content = fieldValues.Content ? "" : "Please enter a program content";

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

    const handleSubmit = async e => {
        e.preventDefault();
        
        if (validate()) {
            debugger
            await props.createProgram(values, () => {window.alert('Inserted')});
            document.getElementById('createProgram_form').reset();
            resetValues();
        }
    }
    
    const resetValues = () => {
        values.Name = '';
        values.ProgramTypeId = '';
        values.ComplexityLevelId = '';
        values.Description = '';
        values.Content = '';
        values.PreView = '';
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
                <form className="createProgram_form needs-validation" id="createProgram_form" autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <div className="top_block row">
                        <div className="left_block col-7 pe-4">
                            <div className="input_wrapper p-0">
                                <div className="form-floating">
                                    <input
                                        name="Name"
                                        type="text"
                                        className="form-control"
                                        id="validationCustomName" 
                                        placeholder="Enter the name"
                                        onChange={handleInputChange}
                                        required
                                        {...(errors.Name && { error: "true" })}/>

                                    <label htmlFor="validationCustomName" className="form-label fw-bold">Name</label>
                                    <div className="invalid-feedback">{errors.Name}</div>
                                </div>
                            </div>

                            <div className="input_wrapper p-0">
                                <div className="form-floating">
                                    <select
                                        name="ProgramTypeId"
                                        className="form-select"
                                        id="validationCustomProgramTypeId"
                                        placeholder="Select program type"
                                        aria-label="select example"
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

                                    <label htmlFor="validationCustomProgramTypeId" className="form-label fw-bold">Type</label>
                                    <div className="invalid-feedback">{errors.ProgramTypeId}</div>
                                </div>
                            </div>

                            <div className="input_wrapper p-0">
                                <div className="form-floating">
                                    <select
                                        name="ComplexityLevelId"
                                        className="form-select"
                                        id="validationCustomComplexityLevelId"
                                        placeholder="Select complexity level"
                                        aria-label="select example"
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

                                    <label htmlFor="validationCustomComplexityLevelId" className="form-label fw-bold">Complexity Level</label>
                                    <div className="invalid-feedback">{errors.ComplexityLevelId}</div>
                                </div>
                            </div>

                            <div className="input_wrapper p-0">
                                <div className="form-floating">
                                    <input
                                        name="Description"
                                        type="text"
                                        className="form-control"
                                        id="validationCustomDescription"
                                        placeholder="Enter description"
                                        onChange={handleInputChange}
                                        required
                                        {...(errors.Description && { error: "true" })}/>
    
                                        <label htmlFor="validationCustomDescription" className="fw-bold">Description</label>
                                    <div className="invalid-feedback">{errors.Description}</div>
                                </div>
                            </div>
                        </div>

                        <div className="right_block col-5 ps-5">
                            <div className="preViewDownloadPhoto_block d-flex flex-column align-items-end justify-content-start w-100 h-100">
                                <div className="preView_wrapper d-flex justify-content-center align-items-center w-100">
                                    {
                                        values.PreView === null || values.PreView === '' ? 
                                            <img src={camera} alt="preView" width="187" height="141"/> : 
                                            <img className="preView_photo" src={values.PreView} alt="preView" width="auto" height="100%"/>
                                    }
                                </div>

                                <div className="input-group">
                                    <span className="input-group-text" id="validationCustomPreview">Url</span>
                                    <input
                                        name="PreView"
                                        className="downloadPhoto form-control" 
                                        type="text" 
                                        id="validationCustomPreview"
                                        onChange={handleInputChange}
                                        required/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bottom_block">
                        <div className="programContent_block row">
                            <div className="form-floating">
                                <textarea
                                    name="Content"
                                    className="form-control"
                                    id="validationCustomContent"
                                    placeholder="Enter program content"
                                    onChange={handleInputChange}
                                    required
                                    {...(errors.Content && { error: "true" })}/>

                                <label htmlFor="validationCustomContent" className="form-label fw-bold">Program content</label>
                                <div className="invalid-feedback">{errors.Content}</div>
                            </div>
                        </div>
                    </div>

                    <div className="actions_block row">
                        <div className="col-11 pe-3">
                            <button 
                                type="submit" 
                                className="createProgram btn btn-primary w-100 fw-bold"
                                onClick={checkValidation}>
                                CREATE
                            </button>
                        </div>
                        <div className="col-1">
                            <button 
                                type="reset" 
                                className="createProgram btn btn-outline-secondary w-100 fw-bold"
                                onClick={resetValues}>
                                CLEAR
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    userItem: state.userReducer.userItem,
    programTypesList: state.programTypeReducer.programTypesList,
    complexityLevelsList: state.complexityLevelReducer.complexityLevelsList,
});

const mapActionToProps = {
    createProgram: programActions.createProgram,
    fetchAllProgramTypes: programTypeActions.fetchAllProgramTypes,
    fetchAllComplexityLevels: complexityLevelActions.fetchAllComplexityLevels,
}

export default connect(mapStateToProps, mapActionToProps)(CreateProgramPage);