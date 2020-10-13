import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faUsers, faCalendar, faCog, faFileAlt, faSignOutAlt, faHome, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Slider = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(response => response.json())
        .then(data => setIsDoctor(data))
    }, []);

    return (
        <section className="slider d-flex flex-column justify-content-between col-md-2 py-5 px-4">
            <ul className="list-unstyled">
                <li className="mb-5">
                    <Link to="/"><FontAwesomeIcon className="text-white mr-3" icon={faHome} /> <span> Back to Home</span> </Link>
                </li>
                <li>
                    <Link to="/dashboard"> <FontAwesomeIcon className="text-white mr-3" icon={faTh} /> <span>Dashboard</span></Link>
                </li>
                { isDoctor && <div>
                    <li>
                        <Link to="/allPatients"> <FontAwesomeIcon className="text-white mr-3" icon={faCalendar} /> <span>Appoinrment</span></Link>
                    </li>
                    <li>
                        <Link to="/doctor/patients"> <FontAwesomeIcon className="text-white mr-2" icon={faUsers} /> <span>Patients</span></Link>
                    </li>
                    <li>
                        <Link to="/doctor/prescriptions"> <FontAwesomeIcon className="text-white mr-3" icon={faFileAlt} /> <span>Prescriptions</span></Link>
                    </li>
                    <li>
                        <Link to="/addDoctor"> <FontAwesomeIcon className="text-white mr-3" icon={faUserPlus} /> <span>Add Doctor</span></Link>
                    </li>
                    <li>
                        <Link to="/doctor/setting"> <FontAwesomeIcon className="text-white mr-3" icon={faCog} /> <span>Setting</span></Link>
                    </li>
                </div>}
            </ul>
            <Link to="/login"><FontAwesomeIcon className="text-white mr-3" icon={faSignOutAlt} /> <span className="text-white">Log Out</span></Link>
        </section>
    );
};

export default Slider;