import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Slider from '../Slider/Slider';

const containerStyle = {
    backgroundColor: '#F4FDF8',
    height: '100%'
}

const calendarStyle = {
    backgroundColor: '#fff'
}

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const handleChangeDate = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type' : 'application/json'},
            body: JSON.stringify({date: selectedDate})
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [selectedDate])

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Slider></Slider>
                </div>
                <div className="col-md-5 d-flex justify-content-center">
                    <div style={calendarStyle} className="p-4 my-5 shadow-sm">
                        <Calendar
                            onChange={handleChangeDate}
                            value={new Date()}
                        />
                    </div>
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;