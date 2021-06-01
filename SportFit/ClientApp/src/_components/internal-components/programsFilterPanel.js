import React from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

const ProgramsFilterPanel = () => {
    return (
        <div className="programsFilterPanel_wrapper row">
            <div className="left_block col-6">
                <div className="programSearch_wrapper">
                    <Tippy content="Search the program by name">
                        <form className="programSearch_form shadow">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Type to search"/>
                        </form>
                    </Tippy>
                </div>
            </div>

            <div className="right_block col-6 d-flex justify-content-end">
                <div className="complexityLevelFilter_wrapper dropdown">
                    <Tippy content="Choose the program complexity level">
                        <button className="btn btn-primary dropdown-toggle shadow" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Complexity level
                        </button>
                    </Tippy>

                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                        <li className="dropdown-item">All</li>
                        <li className="dropdown-item">Easy</li>
                        <li className="dropdown-item">Medium</li>
                        <li className="dropdown-item">Hard</li>
                        <li className="dropdown-item">Professional</li>
                    </ul>
                </div>

                <div className="programTypeFilter_wrapper btn-group shadow" role="group" aria-label="Basic outlined example">
                    <Tippy content="Show all programs">
                        <button type="button" className="btn btn-outline-primary">All</button>
                    </Tippy>

                    <Tippy content="Show all training programs">
                        <button type="button" className="btn btn-outline-primary">Training</button>
                    </Tippy>

                    <Tippy content="Show all meal plans">
                        <button type="button" className="btn btn-outline-primary">Meal</button>
                    </Tippy>
                </div>
            </div>
        </div>
    );
};

export default ProgramsFilterPanel;
