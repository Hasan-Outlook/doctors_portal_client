import React from 'react';
import HeroSection from './HeroSection';
import InfoCards from './InfoCard/InfoCards';
import ServiceCards from './Services/ServiceCards';
import AboutSection from './AboutSection';
import Appointment from './Appointment';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <InfoCards></InfoCards>
            <ServiceCards></ServiceCards>
            <AboutSection></AboutSection>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;