import React, { useEffect, useState } from 'react';
import Slider from '../../Dashboard/Slider/Slider';
import PatientsData from '../PatientsData/PatientsData';

const AllPatients = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allPatients')
        .then(res => res.json())
        .then(data => setPatients(data))
        .catch(error => console.log(error));
    }, [])

    const style={
        backgroundColor: "#F4FDFB",
        marginLeft: '15px'
    }

    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Slider></Slider>
            </div>
            <div className="col-md-10 p-4 pr-5">
                <div style={style}>
                    <h6>Patients</h6>
                    <PatientsData patients={patients}></PatientsData>
                </div>
            </div>
        </div>
    );
};

export default AllPatients;