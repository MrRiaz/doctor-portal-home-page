import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 info-container text-white">
            <div className={`info-card d-flex justify-content-center ${info.background}`}>
                <div className="mr-3">
                    <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h6> {info.title} </h6>
                    <small> {info.description} </small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;