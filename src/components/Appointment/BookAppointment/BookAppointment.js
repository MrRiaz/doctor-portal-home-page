import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        _id: '5e8df50be6e8231764dc23de',
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        spaces: '10 SPACES AVAILABLE'
    },{
        _id: '5e8df50be6e8231764dc23df',
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:05 am – 11:30 am',
        spaces: '10 SPACES AVAILABLE'
    },{
        _id: '5e8df50be6e8231764dc23e0',
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '  5:00 pm – 6:30 pm',
        spaces: '10 SPACES AVAILABLE'
    },{
        _id: '5e8df50be6e8231764dc23e1',
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: ' 7:00 am – 8:30 am',
        spaces: '10 SPACES AVAILABLE'
    },{
        _id: '5e8df50be6e8231764dc23e2',
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        spaces: '10 SPACES AVAILABLE'
    },{
        _id: '5e8df50be6e8231764dc23e3',
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        spaces: '10 SPACES AVAILABLE'
    },
]

const BookAppointment = ({date}) => {
    return (
        <section className="py-4">
            <h2 className="appointment-header text-center">
                Available Appointments on {date.toDateString()}
            </h2>
            <div className="container mx-auto row">
                {
                    bookingData.map(book => <BookingCard booking={book} date={date} ></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;