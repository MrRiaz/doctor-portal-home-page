import React from 'react';
import './Testimonial.css';

const Testimonial = ({testimonial}) => {
    return (
        <div className="col-md-4 single-card">
            <div className="p-4 shadow">
                <p> {testimonial.quote} </p>
                <div className="container mt-5">
                    <div className="row">
                        <div className="patients-img">
                            <img src={testimonial.img} alt=""/>
                        </div>
                        <div className="patients-deatil ml-3">
                            <p> {testimonial.name} </p>
                            <p> <small> {testimonial.location} </small> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;