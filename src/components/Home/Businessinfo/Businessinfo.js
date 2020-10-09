import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faPhone, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons'

const Businessinfo = () => {
    const infoData = [
        {
            title : 'Opening Hours',
            description: 'Lorem Ipsum is simply dummy text of the pri',
            icon: faClock,
            background: 'primary'
        },
        {
            title : 'Visit our location',
            description: 'Brooklyn, NY 10036, United States',
            icon: faMapMarkerAlt,
            background: 'dark'
        },
        {
            title : 'Contact us now',
            description: '+000 123 456789',
            icon: faPhone,
            background: 'primary'
        },
    ]
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
                {
                    infoData.map(info => <InfoCard info={info} ></InfoCard>)
                }
            </div>
        </section>
    );
};

export default Businessinfo;