import React from 'react';
import Icon1 from '../../../assets/images/fluoride.png'
import Icon2 from '../../../assets/images/cavity.png'
import Icon3 from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const ServiceCards = () => {
    const cardInfo = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: Icon1
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: Icon2
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: Icon3
        }
    ]
    return (
        <div className='text-center mt-20'>
            <h1 className='text-sm text-primary'>OUR SERVICES</h1>
            <h1 className='text-xl font-bold mb-10'>Services We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mr-4 ml-4'>
                {
                    cardInfo.map(card => <ServiceCard
                        key={card._id}
                        card={card}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default ServiceCards;