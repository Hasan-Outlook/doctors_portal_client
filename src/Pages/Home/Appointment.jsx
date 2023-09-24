import React from 'react';
import DoctorImg from '../../assets/images/doctor.png';
import AppointmentImg from '../../assets/images/appointment.png';
import { Link } from 'react-router-dom';
import PrimaryBtn from '../../Components/Button/PrimaryBtn';

const Appointment = () => {
    return (
        <section className='mt-20'
            style={{
                background: `url(${AppointmentImg})`
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt='DoctorImage' src={DoctorImg} className="lg:w-3/5 rounded-lg  hidden lg:block -mt-32 -mb-4" />
                    <div>
                        <h1 className="text-md font-bold text-primary">Appointment</h1>
                        <h1 className="text-2xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Link to='/appointment'> <PrimaryBtn>Appointment</PrimaryBtn> </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;