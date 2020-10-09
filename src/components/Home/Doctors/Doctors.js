import React from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    return (
        <section className="my-5 py-3">
            <div className="container">
                <h6 className="h6-header text-center">Our Doctors</h6>
                <div className="row">
                    <Doctor />
                    <Doctor />
                    <Doctor />
                </div>
            </div>
        </section>
    );
};

export default Doctors;