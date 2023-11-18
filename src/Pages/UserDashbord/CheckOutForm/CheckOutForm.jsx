import React, { Fragment, useContext, useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../../Components/Shared/Loadar/Loading';

const CheckOutForm = ({ appointment }) => {
    const stripe = useStripe();
    const { loding } = useContext(AuthContext);
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const { price } = appointment;
    const [cardError, setCardError] = useState();

    useEffect(() => {
        if(loding){
            return <Loading></Loading>
        }
        // Create PaymentIntent as soon as the page loads
        fetch(`http://localhost:5000/create-payment-intent`, {
           
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        } else {
            setCardError('');
        }
    }
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe || clientSecret} className='btn btn-sm mx-auto my-5 btn-outline btn-success'>
                    Pay
                </button>
            </form>
            {
                cardError &&
                <div className="alert alert-warning" hidden>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span>{cardError}</span>
                </div>
            }
        </Fragment>
    );
};

export default CheckOutForm;