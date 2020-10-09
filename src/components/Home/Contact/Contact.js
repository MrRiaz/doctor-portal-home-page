import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section row">
            <div className="container col-md-6">
                <div className="form-header text-center">
                    <h6 className="h6-header">Contact us</h6>
                    <h2 className="text-white">Always Connect with us</h2>
                </div>
                <div className="form mt-5 text-center">
                    <input className="form-control p-4 mb-3" type="text" placeholder="Email Address*" required/>
                    <input className="form-control p-4 mb-3" type="text" placeholder="Subject*" required/>
                    <textarea className="form-control p-4" rows="4" placeholder="Your Message"/>
                    <button className="btn submit  mt-4">Submit</button>
                </div>
            </div>
        </section>
    );
};

export default Contact;