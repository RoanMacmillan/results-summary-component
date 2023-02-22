import React from 'react';
import './Data.css'
import iconReaction from '../../images/icon-reaction.svg';
import iconMemory from '../../images/icon-memory.svg';
import iconVerbal from '../../images/icon-verbal.svg';
import iconVisual from '../../images/icon-visual.svg';

const Data = () => {

    const JsonData = [
        {
            "category": "Reaction",
            "score": 80,
            "icon": iconReaction
        },
        {
            "category": "Memory",
            "score": 92,
            "icon": iconMemory
        },
        {
            "category": "Verbal",
            "score": 61,
            "icon": iconVerbal
        },
        {
            "category": "Visual",
            "score": 72,
            "icon": iconVisual
        }
    ];



    return (
        <div className='Data'>
            {JsonData.map(item => (
                <div key={item.category} className={`DataChild ${item.category}`}>
                    <img src={item.icon} alt={item.category} />
                    <p className='CategoryP'>{item.category}</p>
                    <p> {item.score}<span> / 100</span></p>
                </div>
            ))}
        </div>
    );
};

export default Data;