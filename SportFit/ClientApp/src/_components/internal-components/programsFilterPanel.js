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
                                placeholder="Введите, чтобы найти"/>
                        </form>
                    </Tippy>
                </div>
            </div>

            <div className="right_block col-6 d-flex justify-content-end">
                <div className="complexityLevelFilter_wrapper dropdown">
                    <Tippy content="Choose the program complexity level">
                        <button className="btn btn-primary dropdown-toggle shadow" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Степень сложности
                        </button>
                    </Tippy>

                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                        <li className="dropdown-item">Все</li>
                        <li className="dropdown-item">Легко</li>
                        <li className="dropdown-item">Средне</li>
                        <li className="dropdown-item">Сложно</li>
                        <li className="dropdown-item">Профессионально</li>
                    </ul>
                </div>

                <div className="programTypeFilter_wrapper btn-group shadow" role="group" aria-label="Basic outlined example">
                    <Tippy content="Show all programs">
                        <button type="button" className="btn btn-outline-primary">Все</button>
                    </Tippy>

                    <Tippy content="Show all training programs">
                        <button type="button" className="btn btn-outline-primary">Тренировка</button>
                    </Tippy>

                    <Tippy content="Show all meal plans">
                        <button type="button" className="btn btn-outline-primary">Питание</button>
                    </Tippy>
                </div>
            </div>
        </div>
    );
};

export default ProgramsFilterPanel;
