import React, { useState } from 'react';
import HeroSection from './HeroSection';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDAte] = useState(new Date());

    return (
        <div>
            <HeroSection
                selectedDate={selectedDate}
                setSelectedDAte={setSelectedDAte}
            ></HeroSection>
            <AvailableAppointment
                selectedDate={selectedDate}
            ></AvailableAppointment>
        </div>
    );
};

export default Appointment;