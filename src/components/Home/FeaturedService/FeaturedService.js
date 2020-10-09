import React from 'react';
import featured from '../../../images/featured.png'

const FeaturedService = () => {
    return (
        <section className="d-flex justify-content-center my-5">
            <div className="row w-75 align-items-center my-5">
                <div className="col-md-5">
                    <img style={{ height: '450px' }} className="img-fluid" src={featured} alt="" />
                </div>
                <div className="col-md-6">
                    <h2 className="h2-header">Exceptional Dental <br /> Care, on Your Terms</h2>
                    <p className="text-secondary"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposedto using ‘Content here, readable English. Many desktop publishing packages and web page
                </p>
                    <button className="btn">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;