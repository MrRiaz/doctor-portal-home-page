import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
        .catch(error => console.log(error))
    }, [])
    return (
        <section className="my-5 py-3">
            <div className="container">
                <h4 className="h6-header text-center mb-5">Our Doctors</h4>
                <div className="row">
                    {
                        doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;