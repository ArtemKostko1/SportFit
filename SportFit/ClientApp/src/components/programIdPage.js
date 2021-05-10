import React from 'react';

import profile from "./images/profile.svg";
import dumbbell from "./images/dumbbell.svg";
import muscles_hard from "./images/muscles_hard.png";
import camera from "./images/camera.svg";
import CommentsBlock from "./commentsBlock";

const ProgramIdPage = () => {
    return (
        <div className="programIdPage_wrapper container-xxl">
            <div className="programId_content">
                <div className="topInfo_wrapper row w-100">
                    <div className="user_wrapper col-11 d-flex align-items-center">
                        <img className="rounded-circle" src={profile} alt="ava" width="35" height="35"/>
                        <span className="fw-bold ms-2">artemkostko</span>
                    </div>
                    
                    <div className="likes_wrapper col-1 d-flex align-items-center">
                        <span className="likesCount fw-bold">610</span>

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
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur aut, cumque debitis explicabo facilis harum laborum magni natus possimus.</span>
                        </div>
                    </div>

                    <div className="programText_wrapper row w-100">
                        <div className="title col-1 fw-bold">Program:</div>
                        <div className="content col-11 ps-3">
                            <div className="content_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at facere id illum minima, necessitatibus nisi non optio placeat provident quae, repudiandae saepe voluptatum? Accusantium adipisci consequuntur corporis deleniti dignissimos dolorum ducimus eum id illo iure laborum libero minus molestias, odio qui quidem repellendus repudiandae saepe voluptas voluptatem? Alias aperiam aspernatur consequatur cumque delectus dolorem et explicabo inventore ipsa ipsam ipsum iste maiores maxime, molestias, non nulla odio officia omnis perspiciatis quae quaerat quo ratione recusandae reprehenderit repudiandae suscipit voluptates voluptatum. Ad aliquam asperiores corporis dolore doloribus dolorum earum eligendi expedita explicabo id incidunt ipsam, laudantium magnam maiores necessitatibus neque nesciunt, officiis optio perferendis reprehenderit veniam voluptas voluptates! Ab animi architecto at dolor dolorum eveniet expedita facere, impedit in ipsa magni nemo neque officia possimus quibusdam, quos rem repellat sequi similique tempora tenetur vel voluptate. Aliquam aut, expedita hic iste itaque magni quos ullam? Alias distinctio ducimus fuga harum ipsam libero magni nemo repellendus sed voluptas! Accusantium aperiam distinctio, dolorem doloremque in modi perspiciatis placeat quas qui reiciendis. At consectetur doloremque eum in inventore libero magnam neque odio provident, repellat sequi sunt, velit voluptatibus. Blanditiis doloremque enim esse excepturi incidunt. Accusantium alias assumenda aut consectetur corporis delectus deserunt, dicta esse exercitationem fugit hic iste laboriosam libero magnam magni maxime placeat quam quia rem, rerum sint sunt ut veniam? Beatae earum impedit obcaecati tenetur? Accusantium aut, culpa cum esse explicabo fugiat illo incidunt iusto minima, molestias mollitia nemo nulla odit perferendis praesentium quisquam ratione repellendus reprehenderit repudiandae similique tempora temporibus voluptatem!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <CommentsBlock/>
        </div>
    );
};

export default ProgramIdPage;
