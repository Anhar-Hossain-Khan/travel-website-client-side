import React from 'react';
import './Banner.css'
import sajek1 from '../../../images/sajek1.jpg';
import bali1 from '../../../images/bali1.jpg';
import thailand3 from '../../../images/thailand3.jpg';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
        <Carousel>
         <Carousel.Item interval={2000}>
           <img
             className="d-block w-100"
             src={bali1}
             alt="First slide"
           />
           <Carousel.Caption>
           <h3>Bali, Indonesia</h3>
           <p>We are committed to providing exceptional services, <br /> every details and true support from the start of your journey until the end.</p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item interval={2000}>
           <img
             className="d-block w-100"
             src={sajek1}
             alt="Second slide"
           />
           <Carousel.Caption>
           <h3>Sajek, Bangladesh</h3>
           <p>We are committed to providing exceptional services, <br /> every details and true support from the start of your journey until the end.</p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item interval={2000}>
           <img
             className="d-block w-100"
             src={thailand3}
             alt="Third slide"
           />
           <Carousel.Caption>
           <h3>Phuket Island, Thailand</h3>
           <p>We are committed to providing exceptional services, <br /> every details and true support from the start of your journey until the end.</p>
           </Carousel.Caption>
         </Carousel.Item>
       </Carousel>
       </div>
    );
};

export default Banner;