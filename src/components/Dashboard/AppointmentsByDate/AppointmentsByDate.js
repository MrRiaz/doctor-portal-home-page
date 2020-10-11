import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div className="pt-3">
            <div className="d-flex justify-content-between">
                <h5 className="h6-header">Appointments</h5>
                <p className="text-secondary"> <span>{(new Date()).toDateString()}</span> </p>
            </div>
            {
                appointments.length ? 
                <AppointmentShortList appointments={appointments}></AppointmentShortList>
                : 
                <div className="text-center p-5">
                    <h4 className="text-secondary">No appointment for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;