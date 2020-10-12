import React from 'react';
import { Link } from 'react-router-dom';
import './Slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faUsers, faCalendar, faCog, faFileAlt, faSignOutAlt, faHome } from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
    return (
        <section className="slider d-flex flex-column justify-content-between col-md-2 py-5 px-4">
            <ul className="list-unstyled">
                <li className="mb-5">
                    <Link to="/"><FontAwesomeIcon className="text-white mr-3" icon={faHome} /> <span> Back to Home</span> </Link>
                </li>
                <li>
                    <Link to="/doctor/dashboard"> <FontAwesomeIcon className="text-white mr-3" icon={faTh} /> <span>Dashboard</span></Link>
                </li>
                <li>
                    <Link to="/dashboard/appointment"> <FontAwesomeIcon className="text-white mr-3" icon={faCalendar} /> <span>Appoinrment</span></Link>
                </li>
                <li>
                    <Link to="/dashboard/allPatients"> <FontAwesomeIcon className="text-white mr-2" icon={faUsers} /> <span>Patients</span></Link>
                </li>
                <li>
                    <Link to="/doctor/prescriptions"> <FontAwesomeIcon className="text-white mr-3" icon={faFileAlt} /> <span>Prescriptions</span></Link>
                </li>
                <li>
                    <Link to="/doctor/setting"> <FontAwesomeIcon className="text-white mr-3" icon={faCog} /> <span>Setting</span></Link>
                </li>
            </ul>
            <Link to="/login"><FontAwesomeIcon className="text-white mr-3" icon={faSignOutAlt} /> <span className="text-white">Log Out</span></Link>
        </section>
    );
};

export default Slider;