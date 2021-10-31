import React from 'react';
import About from '../About/About';
import Activities from '../Activities/Activities';
import Banner from '../Banner/Banner';
import Destination from '../Destination/Destination';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Activities></Activities>
            <Destination></Destination>
            <About></About>
        </div>
    );
};

export default Home;