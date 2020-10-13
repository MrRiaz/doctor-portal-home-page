import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Doctor.css';


const Doctor = ({doctor}) => {
    return (
        <div className="col-md-4 mt-4">
            <div className="doctor-detail text-center">
                {
                    doctor.image ? <img style={{width: '200px'}} src={`data:image/jpeg;base64,${doctor.image.img}`} alt=""/> 
                    :
                    <img style={{width: '200px'}} src={`http://localhost:5000/${doctor.img}`} alt=""/>
                }
                <h6 style={{fontWeight: '700', marginTop: '7px'}}> {doctor.name} </h6>
                <p className="text-secondary"><FontAwesomeIcon className="phone-icon" icon={faPhoneAlt} />+880-188 200 126</p>
            </div>
        </div>
    );
};

export default Doctor;