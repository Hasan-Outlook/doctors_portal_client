import React from 'react';

const ServiceCard = ({ card }) => {

    const { name, desc, icon } = card;
    return (
        <div className="card  bg-base-200 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={icon} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default ServiceCard;