﻿import React, { useState, useEffect} from 'react';
import { connect } from "react-redux";
import * as programActions from "../_actions/program-actions";
import * as programTypeActions from "../_actions/programType-actions";
import * as complexityLevelActions from "../_actions/complexityLevel-actions";
import useForm from "./utils/useForm";

import camera from "./images/camera.svg";


const CreateProgramPage = ({...props}) => {
    const currentProgram = props.match.params;
    
    const initialInputValues = {
        Name: '',
        ProgramTypeId: '',
        ComplexityLevelId: '',
        Description: '',
        Content: '',
        PreView: '',
        UserId: props.userItem.id
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

        debugger
        if (validate()) {
            if (currentProgram.id === undefined) {
                await props.createProgram(values, () => {window.alert('Inserted')});
            } else {
                await props.updateProgram(currentProgram.id, values, () => {window.alert('Updated')});
            }
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
        
        debugger
        if (currentProgram.id !== undefined) {
            const editableProgram = props.programList.find(x => x.id === currentProgram.id);
            const programType = props.programTypesList.find(x => x.name === editableProgram.programType);
            const complexityLevel = props.complexityLevelsList.find(x => x.name === editableProgram.complexityLevel);
            
            const tempProgram = {
                Name: editableProgram.name,
                ProgramTypeId: programType.id,
                ComplexityLevelId: complexityLevel.id,
                Description: editableProgram.description,
                Content: editableProgram.content,
                PreView: editableProgram.preView
            }
            
            setValues({
                ...tempProgram
            })
        }
    }, [currentProgram.id]);

    return (
        <div className="createProgramPage_wrapper container-xxl">
            <div className="createProgram_content shadow">
                <form className="createProgram_form needs-validation" id="createProgram_form" autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <div className="top_block row">
                        <div className="left_block col-8 pe-5">
                            <div className="input_wrapper p-0">
                                <div className="form-floating">
                                    <input
                                        name="Name"
                                        type="text"
                                        className="form-control"
                                        id="validationCustomName"
                                        placeholder="Enter the name"
                                        value={values.Name}
                                        onChange={handleInputChange}
                                        required
                                        {...(errors.Name && { error: "true" })}/>

                                    <label htmlFor="validationCustomName" className="form-label fw-bold text-secondary">Name</label>
                                    <div className="invalid-feedback">{errors.Name}</div>
                                </div>
                            </div>

                            <div className="input_wrapper p-0">
                                <div className="form-floating">
                                    <select
                                        name="ProgramTypeId"
                                        className="form-select"
                                        id="validationCustomProgramTypeId"
                                        aria-label="select example"
                                        placeholder="Select program type"
                                        value={values.ProgramTypeId}
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

                                    <label htmlFor="validationCustomProgramTypeId" className="form-label fw-bold text-secondary">Type</label>
                                    <div className="invalid-feedback">{errors.ProgramTypeId}</div>
                                </div>
                            </div>

                            <div className="input_wrapper p-0">
                                <div className="form-floating">
                                    <select
                                        name="ComplexityLevelId"
                                        className="form-select"
                                        aria-label="select example"
                                        id="validationCustomComplexityLevelId"
                                        placeholder="Select complexity level"
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

                                    <label htmlFor="validationCustomComplexityLevelId" className="form-label fw-bold text-secondary">Complexity Level</label>
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
                                        value={values.Description}
                                        onChange={handleInputChange}
                                        required
                                        {...(errors.Description && { error: "true" })}/>
    
                                        <label htmlFor="validationCustomDescription" className="fw-bold text-secondary">Description</label>
                                    <div className="invalid-feedback">{errors.Description}</div>
                                </div>
                            </div>
                        </div>

                        <div className="right_block col-4">
                            <div className="preViewDownloadPhoto_block w-100">
                                <div className="preView_wrapper d-flex justify-content-center align-items-center">
                                    {
                                        values.PreView === null || values.PreView === '' || values.PreView === undefined ? 
                                            <img src={camera} alt="preView" width="187" height="141"/> : 
                                            <img className="preView_photo" src={values.PreView} alt="preView"/>
                                    }
                                </div>

                                <div className="input-group">
                                    <span className="input-group-text" id="validationCustomPreview">Url</span>
                                    <input
                                        name="PreView"
                                        className="downloadPhoto form-control" 
                                        type="text"
                                        id="validationCustomPreview"
                                        value={values.PreView}
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
                                    value={values.Content}
                                    onChange={handleInputChange}
                                    required
                                    {...(errors.Content && { error: "true" })}/>

                                <label htmlFor="validationCustomContent" className="form-label fw-bold text-secondary">Program content</label>
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
    programList: state.programReducer.programList,
    programTypesList: state.programTypeReducer.programTypesList,
    complexityLevelsList: state.complexityLevelReducer.complexityLevelsList
});

const mapActionToProps = {
    createProgram: programActions.createProgram,
    updateProgram: programActions.updateProgram,
    fetchAllProgramTypes: programTypeActions.fetchAllProgramTypes,
    fetchAllComplexityLevels: complexityLevelActions.fetchAllComplexityLevels
}

export default connect(mapStateToProps, mapActionToProps)(CreateProgramPage);