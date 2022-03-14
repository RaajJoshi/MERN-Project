import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from '../components/Sidebar';
import { Dropdown } from 'react-bootstrap';
import * as BsIcons from 'react-icons/bs';
import * as ImIcons from 'react-icons/im';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

const Deleteinfo = () => {


    const [finalValue, setFinalValue] = useState([]);
    const [finalValueClass, setFinalValueClass] = useState([]);

    const [type, setType] = useState('All');

    const deleteLab = (id) => {
        Axios.delete(`/deletelab/${id}`).then(() => {
            setFinalValue(finalValue.filter((val) => {
                return val._id !== id;
            }));
        });
    };

    useEffect(() => {
        Axios.get("/readlab", {
        }).then((response) => {
            setFinalValue(response.data)
        })
            .catch(() => {
                console.log("error");
            });
    }, []);

    useEffect(() => {
        Axios.get("/readclass", {
        }).then((response) => {
            setFinalValueClass(response.data)
        })
            .catch(() => {
                console.log("error");
            });
    }, []);



    return (
        <>
            <Sidebar />
            <div className='updateinfocontainer'>
                <div className='ddmselect'>
                    <Dropdown value={type} name='type'>
                        <Dropdown.Toggle className='ddtselect' variant="secondary" id="dropdown-basic">
                            <IconContext.Provider value={{ color: 'white' }}>
                                <BsIcons.BsFilterSquare />&nbsp;&nbsp;Filter By&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </IconContext.Provider>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='ddmmselect'>
                            <Dropdown.Item className='ddi' onClick={() => setType('All')}>All</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => setType('Lab')}>Lab</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => setType('Classroom')}>Classroom</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                {finalValue.map((val) => {
                    if (type === 'All' || type === "Lab") {
                        return (
                            <div className='main'>
                                <div className='labtitle'>
                                    <h3>Lab No : {val.labno}</h3>
                                </div>
                                <div className='mancomp'>
                                    <div className='updateinfosubcontainer'>
                                        <h3>Toatl PCs : {val.pcno}</h3>
                                        <h3>Total Chairs : {val.chrno}</h3>
                                        <h3>Total ACs : {val.acno}</h3>
                                        <h3>Total Fans : {val.fanno}</h3>
                                        <h3> Total Tubelights : {val.lightno}</h3>
                                        <h3>Ethernet Availability : {val.ethr}</h3>
                                        <h3>Projector Availability : {val.projc}</h3>
                                    </div>
                                    <div>
                                        <button onClick={() => { deleteLab(val._id); }}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
                {finalValueClass.map((val) => {
                    if (type === 'All' || type === 'Classroom') {
                        return (
                            <div className='main'>
                                <div className='labtitle'>
                                    <h3>Classroom No : {val.classno}</h3>
                                </div>
                                <div className='mancomp'>
                                    <div className='updateinfosubcontainer'>
                                        <h3>Toatl Benches : {val.benchno}</h3>
                                        <h3>Total Fans : {val.fannno}</h3>
                                        <h3> Total Tubelights : {val.tubelightno}</h3>
                                        <h3>Projector Availability : {val.projec}</h3>
                                    </div>
                                    <div>
                                        <button onClick={() => { deleteLab(val._id); }}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}

                {(() => {
                    if ((finalValue.length + finalValueClass.length) === 0) {
                        return (
                            <div className='nocomp'>
                                <IconContext.Provider value={{ className: 'icons' }}>
                                    <ImIcons.ImFilesEmpty /><br /><br />
                                    <h2>No Resources!!!</h2>
                                    <h3>Want to Add?? <Link style={{ textDecoration: 'none', color: 'hsl(29, 100%, 49%)' }} to={'/addInfo'}>Click Here</Link></h3>
                                </IconContext.Provider>
                            </div>
                        );
                    } else if (finalValue.length === 0 && type === 'Lab') {
                        return (
                            <div className='nocomp'>
                                <IconContext.Provider value={{ className: 'icons' }}>
                                    <ImIcons.ImFilesEmpty /><br /><br />
                                    <h2>No Labs!!!</h2>
                                    <h3>Want to Add?? <Link style={{ textDecoration: 'none', color: 'hsl(29, 100%, 49%)' }} to={'/addInfo'}>Click Here</Link></h3>
                                </IconContext.Provider>
                            </div>
                        );
                    } else if (finalValueClass.length === 0 && type === 'Classroom') {
                        return (
                            <div className='nocomp'>
                                <IconContext.Provider value={{ className: 'icons' }}>
                                    <ImIcons.ImFilesEmpty /><br /><br />
                                    <h2>No Classrooms!!!</h2>
                                    <h3>Want to Add?? <Link style={{ textDecoration: 'none', color: 'hsl(29, 100%, 49%)' }} to={'/addInfo'}>Click Here</Link></h3>
                                </IconContext.Provider>
                            </div>
                        );
                    }
                })()}


            </div>
        </>
    );
};

export default Deleteinfo;

