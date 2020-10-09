import React from 'react';
import ServicesDetail from '../ServicesDetail/ServicesDetail';
import './Services.css';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import tooth from '../../../images/whitenning.png';

const servicesData = [
    {
        title: 'Fluoride Treatment',
        img: fluoride,
    },
    {
        title: 'Cavity Filling',
        img: cavity,
    },
    {
        title: 'Teath Whitening',
        img: tooth,
    },
]

const Services = () => {
    return (
        <section>
            <div className="services-container mt-5 text-center">
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2 className="h2-header">Services We Provide</h2>
            </div>
            <div className="d-flex mt-5 justify-content-center">
                <div className="row mt-5 w-75">
                    {
                        servicesData.map(service => <ServicesDetail service={service}></ServicesDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;