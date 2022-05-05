import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img2 from './images5.jpg';
import img3 from './images3.jpg';
import img4 from './fimg.jpg';

const Home = () => {

    const [showHide, setShowHide] = useState(false);

    return (
        <>
            <h3 style={{textAlign:'center'}} className='my-3'>Welcome To Online College Complaint System</h3>
            <Carousel fade variant='dark'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2} height="350px" width="350px"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4} height="350px" width="350px"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3} height="350px" width="350px"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
            <div className='showHide'>
                <button className='shbtn' onClick={() => setShowHide(!showHide)}>
                    {showHide ? "Click to Hide guidelines" : "Click to Show Details"}
                </button>
                {showHide && <div>
                    <table className='table'>
                        <tr><td>If you want to post complaint then Login into <Link style={{textDecoration:'none'}} to='/ulogin'>Student Login</Link></td></tr>
                        <tr><td>Now raise your complain/(s) and submit it.</td></tr>
                        <tr><td>You can see status of your complain/(s) in View Complains.</td></tr>
                        <tr><td>Also you can modify it in Modify Complain.</td></tr>
                        <tr><td>If you want to send your feddback then you can do it from Feedback option.</td></tr>
                        <tr><td>You are also able to modify your details.</td></tr>
                    </table>
                </div>}
            </div>
        </>
    );
};

export default Home;
