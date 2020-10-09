import React from 'react';
import doctor from '../../../images/5790-removebg.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className="appointment text-white">
            <div className="container mx-auto">
                <div className="row">
                    <div className="col-md-5">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 py-5">
                        <h6 className="h6-header" >APPOINTMENT</h6>
                        <h2 className="my-3" >Make an appointment <br/> Today</h2>
                        <p className="mb-4"><small >It is a long established fact that a reader will be distractedby the readable   content of a page when looking at its 
                        </small></p>
                        <button className="btn">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;