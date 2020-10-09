import React from 'react';

const ServicesDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '80px'}} src={service.img} alt=""/>
            <h6 className="mt-4 mb-4"> {service.title} </h6>
            <p className="text-secondary"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe eos magnam quas quos incidunt. Veritatis. </p>
        </div>
    );
};

export default ServicesDetail;