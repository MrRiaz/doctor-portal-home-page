import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking, date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    return (
        <section className="col-md-4 my-4">
            <div className="shadow-sm text-center p-3">
                <h5 className="appointment-header"> {booking.subject} </h5>
                <p className="font-weight-bolder mb-1"> {booking.visitingHour} </p>
                <p className="text-secondary"> <small> {booking.spaces} </small> </p>
                <button onClick={openModal} className="btn"> BOOK APPOINTMENT </button>
                <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal} date={date}></AppointmentForm>
            </div>
        </section>
    );
};

export default BookingCard;