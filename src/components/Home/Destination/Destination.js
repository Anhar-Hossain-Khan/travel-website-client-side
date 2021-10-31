import React from 'react';
import sajek5 from '../../../images/bali3.jpg';
import './Destination.css'

const Destination = () => {
    return (
        <div className="container">
           <div className="travel">
            <h2>Travel Your Destination</h2>
           </div>
            <img className="mb-5" src={sajek5} alt="" />
         
            
        </div>
    );
};

export default Destination;