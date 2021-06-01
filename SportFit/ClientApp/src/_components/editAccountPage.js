import React, {useEffect} from 'react';
import {connect} from "react-redux";
import camera from "./images/camera.svg";
import * as programActions from "../_actions/program-actions";
import useForm from "./utils/useForm";
import checkValidation from "./utils/validators/validators";
import profile from "./images/profile.svg";
import emailIcon from "./images/email.svg";
import vkIcon from "./images/vk.svg";
import instagramIcon from "./images/instagram.svg";
import {Link} from "react-router-dom";
import {EDIT_ACCOUNT_ROUTE} from "../_routing/routerConsts";
import Tippy from "@tippy.js/react";

const EditAccountPage = ({...props}) => {
    const currentProgram = props.match.params;

    const initialInputValues = {
        FullName: '',
        ProgramTypeId: '',
        ComplexityLevelId: '',
        Description: '',
        Content: '',
        PreView: '',
        UserId: props.userItem.id
    }

    const resetValues = () => {
        values.Name = '';
        values.ProgramTypeId = '';
        values.ComplexityLevelId = '';
        values.Description = '';
        values.Content = '';
        values.PreView = '';
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
            if (currentProgram.id === undefined) {
                await props.createProgram(values, () => {window.alert('Inserted')});
            } else {
                await props.updateProgram(currentProgram.id, values, () => {window.alert('Updated')});
            }
            document.getElementById('createProgram_form').reset();
            resetValues();
        }
    }
    
    return (
        <div className="userAccountPage_wrapper container-xxl">
            <div className="userAccount_content row w-100">
                <div className="avatarAndSocialLinks_block col-3">
                    <div className="avatar_wrapper d-flex justify-content-center align-items-center shadow rounded-3">
                        <img className="avatar_photo rounded-3" src={avatar === null || avatar === '' ? profile : avatar} alt="avatar" width="auto" height="100%"/>
                    </div>

                    <div className="socialLinks_wrapper shadow p-3">
                        <div className="email_wrapper d-flex align-items-center">
                            <div className="email_icon">
                                <img src={emailIcon} alt="email" className="me-2" width="35" height="35"/>
                            </div>

                            <div className="email_link w-100">
                                <input type="text" className="email form-control" value={email}/>
                            </div>
                        </div>

                        <div className="socialNetworks_wrapper d-flex">
                            {
                                vk !== null ?
                                    <a className="socialNetwork-link me-2" href={vk}><img src={vkIcon} alt="" width="35" height="35"/></a> :
                                    null
                            }
                            {
                                instagram !== null ?
                                    <a className="socialNetwork-link me-2" href={instagram}><img src={instagramIcon} alt="" width="35" height="35"/></a> :
                                    null
                            }
                        </div>
                    </div>
                </div>

                <div className="userInfoAndPrograms col-9 ps-5">
                    <div className="userInfo_wrapper d-flex flex-column justify-content-between shadow row p-3">
                        <div className="top_block d-flex justify-content-between">
                            <div className="nickName fw-bold">{nickname}</div>

                            <Link to={`${EDIT_ACCOUNT_ROUTE}/${id}`}>
                                <Tippy content="Edit profile">
                                    <button className="btn btn-outline-secondary d-flex justify-content-center align-items-center p-0" type="button">
                                        <i className="fa fa-pencil"/>
                                    </button>
                                </Tippy>
                            </Link>
                        </div>

                        <div className="info_wrapper">
                            <div className="info_title fw-bold">Full name</div>
                            <div className="info_text d-flex align-items-center px-4">{fullName}</div>
                        </div>

                        <div className="info_wrapper">
                            <div className="info_title fw-bold">Birthday</div>
                            <div className="info_text d-flex align-items-center px-4">{birthDate}</div>
                        </div>

                        <div className="info_wrapper">
                            <div className="info_title fw-bold">Mobile phone</div>
                            <a className="info_text_link d-flex align-items-center px-4" href="tel: +375296354820">{mobilePhone}</a>
                        </div>
                    </div>

                    <div className="programs_wrapper row">

                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    userItem: state.userReducer.userItem
});

const mapActionToProps = {
    updateProgram: programActions.updateProgram
}

export default connect(mapStateToProps, mapActionToProps)(EditAccountPage);
