import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from '../CheckOutForm/CheckOutForm';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../../Components/Shared/Loadar/Loading';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PKEY);
// console.log(stripePromise);

const Payment = () => {
    const appointment = useLoaderData();
    const {loding} = useContext(AuthContext);
    const { service, price, selectedDate, slot } = appointment;
    // console.log('Appointment Booking Data', appointment);

    if(loding){
        return <Loading></Loading>
    }
    
    return (
        <div>
            <h1 className='text-3xl text-center mt-5'>Payment for {service}</h1>
            <h1 className='text-xl mt-10 text-center'>Please pay <strong>${price}</strong> for confirm your appointment on <strong>{selectedDate}</strong> at <strong>{slot}</strong></h1>
            <div className='w-96 mx-auto my-20'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm 
                        appointment={appointment}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;