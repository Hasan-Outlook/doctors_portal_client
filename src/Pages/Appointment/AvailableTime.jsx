import React from 'react';

const AvailableTime = ({ AvailableTime, setTreatment }) => {
    const { name, slots } = AvailableTime
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <div className="text-center">
                    <h2 className="text-center text-2xl text-secondary">{name}</h2>
                    <p>
                        {
                            slots.length > 0 ? slots[0] : 'Try Another Day'
                        }
                    </p>
                    <p>
                        {slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available
                    </p>
                </div>
                <label disabled={slots.length === 0} htmlFor="booking-modal" className="btn bg-gradient-to-r from-secondary to-primary text-white" onClick={ () => setTreatment(AvailableTime)}>Book Appointment</label>
            </div>
        </div>
    );
};

export default AvailableTime;