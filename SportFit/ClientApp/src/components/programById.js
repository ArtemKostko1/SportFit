import React from 'react';
import profile from "./images/profile.svg";
import dumbbell from "./images/dumbbell.svg";
import muscles_hard from "./images/muscles_hard.png";
import camera from "./images/camera.svg";
import CommentsBlock from "./commentsBlock";

const ProgramById = () => {
    return (
        <>
            <div className="programId_content">
                <div className="topInfo_wrapper row w-100">
                    <div className="user_wrapper col-11 d-flex align-items-center">
                        <img className="rounded-circle" src={profile} alt="ava" width="35" height="35"/>
                        <span className="fw-bold ms-2">artemkostko</span>
                    </div>
    
                    <div className="likes_wrapper col-1 d-flex align-items-center">
                        <span className="likesCount fw-bold">0</span>
    
                        <button className="likeProgram rounded-circle shadow-sm rounded ms-2">
                            <i className="bi bi-suit-heart"></i>
                        </button>
                    </div>
                </div>
    
                <div className="mainContent_wrapper">
                    <div className="typesCharacterization_wrapper row w-100">
                        <div className="programType_wrapper col-6 d-flex align-items-center justify-content-start">
                            <div className="badge d-flex align-items-center justify-content-center me-3">Training ptogram</div>
                            <img src={dumbbell} alt="ava" width="42" height="42"/>
                        </div>
    
                        <div className="complexityLevel_wrapper col-6 d-flex align-items-center justify-content-end">
                            <img src={muscles_hard} alt="ava"/>
                            <div className="badge d-flex align-items-center justify-content-center ms-3">Hard</div>
                        </div>
                    </div>
    
                    <div className="gallery_wrapper d-flex align-items-center shadow-sm rounded">
                        <div className="photosGallery_wrapper d-flex row w-100">
                            <div className="col-4">
                                <div className="photo_wrapper d-flex justify-content-center align-items-center w-100 h-100 bg-dark">
                                    <img src={camera} alt="" width="187" height="141"/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="photo_wrapper d-flex justify-content-center align-items-center w-100 h-100 bg-primary">
                                    <img src={camera} alt="" width="187" height="141"/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="photo_wrapper d-flex justify-content-center align-items-center w-100 h-100 bg-secondary">
                                    <img src={camera} alt="" width="187" height="141"/>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="name_wrapper">
                        <span className="fw-bold">Program name</span>
                    </div>
    
                    <div className="description_wrapper row w-100">
                        <div className="title col-1 fw-bold">Description:</div>
                        <div className="content col-11 ps-3">
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi consequatur dicta fuga in iure magnam nemo omnis placeat, possimus qui quos sapiente velit voluptatem.</span>
                        </div>
                    </div>
    
                    <div className="programText_wrapper row w-100">
                        <div className="title col-1 fw-bold">Program:</div>
                        <div className="content col-11 ps-3">
                            <div className="content_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequatur dolore dolorem doloribus earum, eveniet excepturi expedita, inventore ipsa perferendis reiciendis sit voluptate voluptatem? Eum nam, nostrum. A accusantium aut autem beatae deleniti, deserunt exercitationem illum laboriosam minima nisi officia, repellat temporibus veritatis voluptas voluptates? A ad alias beatae corporis debitis dignissimos dolorem eos ipsum magni, officia quae, quam recusandae reiciendis sint voluptatibus? Blanditiis corporis cupiditate dignissimos ea error expedita laboriosam obcaecati perspiciatis quae quasi, quidem quos repellat repellendus sit ut. Accusantium adipisci at deleniti earum in minima voluptates? Aut consequatur eius laborum placeat porro quae quod repellat similique, voluptatum!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <CommentsBlock/>
        </>
    );
};

export default ProgramById;
