import React from 'react';
import Footer from "./internal-components/footer";

const SupportPage = ({...props}) => {
    return (
        <div className="supportPage_wrapper container-xxl d-flex justify-content-center">
            <div className="supportPage_content d-flex flex-column align-items-center w-100">
                <div className="contactLinks_block shadow">
                    <div className="title d-flex justify-content-center w-100 fw-bold">
                        Вы всегда можете обратиться в службу поддержки!
                    </div>
                    
                    <div className="contactLink_wrapper d-flex flex-column">
                        <span className="fw-bold">Почта разработчика: </span>
                        <a className="content d-flex align-items-center w-100 px-3" href="mailto: artem.kostko@mail.ru">
                            artem.kostko@mail.ru
                        </a>
                    </div>
    
                    <div className="contactLink_wrapper d-flex flex-column">
                        <span className="fw-bold">Почта форума: </span>
                        <a className="content d-flex align-items-center w-100 px-3" href="mailto: artem.kostko@mail.ru">
                            SportFit@mail.ru
                        </a>
                    </div>
    
                    <div className="contactLink_wrapper d-flex flex-column">
                        <span className="fw-bold">Контактный номер разработчика: </span>
                        <a className="content d-flex align-items-center w-100 px-3" href="tel: +375296354820">
                            +375(29)635-48-20
                        </a>
                    </div>
                </div>
                
                <div className="address">
                    <h1>Наш адресс</h1>
                </div>
    
                <div className="map container-xxl shadow">
                    <div>
                        <a
                            target="_blank"
                            href="https://yandex.by/maps/org/minskiy_gosudarstvenny_kolledzh_elektroniki/1018469854/?utm_medium=mapframe&utm_source=maps">
                            Минский государственный колледж электроники
                        </a>
    
                        <iframe
                            src="https://yandex.by/map-widget/v1/-/CCUaN4aIcB"
                            width="100%" height="600"
                            allowFullScreen="true"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
