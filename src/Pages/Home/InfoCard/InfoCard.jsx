import React from 'react';

const InfoCard = ({ card }) => {
    const { name, desc, icon, bgClass } = card;
    return (
        <div className={`card card-side shadow-xl ${bgClass} text-white p-4`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default InfoCard;