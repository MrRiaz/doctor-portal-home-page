import React from 'react';
import doctor from '../../../images/Mask Group 8.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Doctor.css';


const Doctor = () => {
    return (
        <div className="col-md-4 mt-4">
            <div className="doctor-detail text-center">
                <img src={doctor} alt=""/>
                <h6 style={{fontWeight: '700', marginTop: '7px'}}>Dr. Caudi</h6>
                <p className="text-secondary"><FontAwesomeIcon className="phone-icon" icon={faPhoneAlt} />+61 452 200 126</p>
            </div>
        </div>
    );
};

export default Doctor;