import React from 'react';
import AboutImage from '../../assets/images/treatment.png';

const AboutSection = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-20 mb-20">
            <div className="hero-content flex-col lg:flex-row">
                <img alt='AboutImage' src={AboutImage} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms!</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <button className="btn bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;