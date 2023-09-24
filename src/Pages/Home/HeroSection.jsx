import React from 'react';
import HeroImage from '../../assets/images/chair.png';
import PrimaryBtn from '../../Components/Button/PrimaryBtn';

const HeroSection = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt='HeroImage' src={HeroImage} className="w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                    <PrimaryBtn>Get Start</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;