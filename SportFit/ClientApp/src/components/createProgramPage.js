import React, { useState } from 'react';
import camera from "./images/camera.svg";

const initialInputValues = {
    name: '',
    description: '',
    programType: '',
    complexityLevel: '',
    program: ''
}

const CreateProgramPage = (props) => {
    const [values, setValues] = useState(initialInputValues);    
    
    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }
    
    return (
        <div className="createProgramPage_wrapper container-xxl">
            <div className="createProgram_content">
                <form autoComplete="off" noValidate action="">
                    <div className="top_block row">
                        <div className="left_block col-7 pe-4">
                            <div className="input_wrapper p-0">
                                <label htmlFor="formGroupExampleInput2" className="form-label fw-bold">Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="formGroupExampleInput2" 
                                    placeholder="Input name"
                                    value={values.name}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="input_wrapper p-0">
                                <label htmlFor="type" className="form-label fw-bold">Type</label>
                                <select className="form-select" id="type" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">Treining program</option>
                                    <option value="2">Meal plan</option>
                                </select>
                            </div>

                            <div className="input_wrapper p-0">
                                <label htmlFor="complexityLevel" className="form-label fw-bold">Complexity Level</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">Easy</option>
                                    <option value="2">Medium</option>
                                    <option value="3">Hard</option>
                                    <option value="4">Professional</option>
                                </select>
                            </div>

                            <div className="input_wrapper p-0">
                                <label htmlFor="formGroupExampleInput2" className="form-label fw-bold">Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="Input description"
                                    value={values.description}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="right_block col-5 ps-4">
                            <div className="content_block">
                                <div className="photo_wrapper d-flex justify-content-center align-items-center w-100">
                                    <img src={camera} alt="" width="187" height="141"/>
                                </div>

                                <input className="downloadPhoto form-control" type="file" id="formFile"/>
                            </div>
                        </div>
                    </div>

                    <div className="bottom_block">
                        <div className="programContent_block row">
                            <label htmlFor="floatingTextarea" className="form-label fw-bold">Program:</label>
                            <div className="form-floating">
                                <textarea 
                                    className="form-control" 
                                    id="floatingTextarea"
                                    placeholder="Leave a comment here" 
                                    value={values.program}
                                    onChange={handleInputChange}/>
                                <label htmlFor="floatingTextarea2">Input program content</label>
                            </div>
                        </div>
                    </div>

                    <div className="actions_block">
                        <button type="button" className="createProgram btn btn-primary w-100 fw-bold">
                            CREATE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateProgramPage;