import React from 'react';
import {Carousel} from 'react-bootstrap';
import img2 from './images5.jpg';
import img3 from './images3.jpg';
import img4 from './fimg.jpg';

const Home = () => {
    return (
        <Carousel fade variant='dark'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2} height="300px" width="350px"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img4} height="300px" width="350px"
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3} height="300px" width="350px"
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    );
};

export default Home;
