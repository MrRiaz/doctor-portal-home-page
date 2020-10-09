import React from 'react';
import './Testimonials.css';
import ellipe1 from '../../../images/Ellipse 1.png';
import ellipe2 from '../../../images/Ellipse 2.png';
import ellipe3 from '../../../images/Ellipse 3.png';
import Testimonial from '../Testimonial/Testimonial';

const testimonialsData = [
    {
        quote: "It is a long established fact that by the readable content of a lot layout. The point of a more-or-less normal distribu to using ‘Content here, content",
        name: 'Winson Herry',
        location: "California",
        img: ellipe1
    },
    {
        quote: "It is a long established fact that by the readable content of a lot layout. The point of a more-or-less normal distribu to using ‘Content here, content",
        name: 'Winson Herry',
        location: "California",
        img: ellipe2
    },
    {
        quote: "It is a long established fact that by the readable content of a lot layout. The point of a more-or-less normal distribu to using ‘Content here, content",
        name: 'Winson Herry',
        location: "California",
        img: ellipe3
    },
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5">
            <div className="container-fluid">
                <div className="section-header">
                    <p style={{fontWeight: 'bold', color: '#6ACECE'}}>TESTIMONIAL</p>
                    <h2 className="h2-header">What’s Our Patients <br/> Says</h2>
                </div>
                <div className="card-deck mt-5 row">
                    {
                        testimonialsData.map(testimonial => 
                            <Testimonial testimonial={testimonial}></Testimonial> 
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;