import React from 'react';
import Clock from '../../../assets/icons/clock.svg';
import Marker from '../../../assets/icons/marker.svg';
import Phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardInfo = [
        {
            _id: 1,
            name: 'Opening Hours',
            desc: 'Open At 9.00AM to 9.00PM',
            icon: Clock,
            bgClass: 'bg-primary'
        },
        {
            _id: 2,
            name: 'Visit our location',
            desc: 'Brooklyn, NY 10036, United States',
            icon: Marker,
            bgClass: 'bg-accent'
        },
        {
            _id: 1,
            name: 'Contact Us',
            desc: '+000 123 456789',
            icon: Phone,
            bgClass: 'bg-primary'
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mr-4 ml-4'>
            {
                cardInfo.map( card =><InfoCard
                    key={card._id}
                    card={card}
                ></InfoCard> )
            }
        </div>
    );
};

export default InfoCards;