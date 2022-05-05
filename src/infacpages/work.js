import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from '../infaccomponents/Sidebar';
import { Dropdown } from 'react-bootstrap';
import * as BsIcons from 'react-icons/bs';
import * as ImIcons from 'react-icons/im';
import { IconContext } from 'react-icons/lib';



const Work = () => {


    const [finalValue, setFinalValue] = useState([]);
    const [finalValueClass, setFinalValueClass] = useState([]);

    const [type, setType] = useState('All');

    let data = [];
    data = JSON.parse(localStorage.getItem("facInfo"));
    const lab = data[6];
    const classroom = data[7];
    let flag = 0;
    if (lab && classroom) {
        flag = 1;
    }

    const updateStatus = (id) => {
        const newStatus = 'under process';
        Axios.put("/updatecompsts", {
            newStatus: newStatus,
            id: id
        }).then(() => {
            setFinalValue(finalValue.map((val) => {
                return val._id === id
                    ? { _id: id, comptype: val.comptype, resno: val.resno, eqtype: val.eqtype, abeq: val.abeq, status: newStatus }
                    : val;
            }));
        });
    };

    useEffect(() => {
        if (lab && !classroom) {
            Axios.get(`/readcompinpbyresl/${lab}`, {
            }).then((response) => {
                setFinalValue(response.data)
            })
                .catch(() => {
                    console.log("error");
                });
        } else if (classroom && !lab) {
            Axios.get(`/readcompinpbyresc/${classroom}`, {
            }).then((response) => {
                setFinalValue(response.data)
            })
                .catch(() => {
                    console.log("error");
                });
        }
        else {
            Axios.get(`/readcompinpbyresol/${lab}`, {
            }).then((response) => {
                setFinalValue(response.data)
            })
                .catch(() => {
                    console.log("error");
                });
            Axios.get(`/readcompinpbyresoc/${classroom}`, {
            }).then((response) => {
                setFinalValueClass(response.data)
            })
                .catch(() => {
                    console.log("error");
                });
        }
    }, []);





    return (
        <>
            <Sidebar />
            <div className='updateinfocontainer'>
                <div className='ddmselect'>
                    {flag === 1 && <Dropdown value={type} name='type'>
                        <Dropdown.Toggle className='ddtselect' variant="secondary" id="dropdown-basic">
                            <IconContext.Provider value={{ color: 'white' }}>
                                <BsIcons.BsFilterSquare />&nbsp;&nbsp;Filter By&nbsp;&nbsp;&nbsp;
                            </IconContext.Provider>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='ddmmselect'>
                            <Dropdown.Item className='ddi' onClick={() => setType('All')}>All</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => setType('Lab')}>Lab</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => setType('Classroom')}>Classroom</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>}
                </div>
                {lab && !classroom &&
                    finalValue.map((val) => {
                        if (val.comptype === 'lab') {
                            return (
                                <div className='main'>
                                    <div className='labtitle'>
                                        <h3>Lab No : {val.resno}</h3>
                                    </div>
                                    <div className='mancompin'>
                                        <div className='updateinfosubcontainer'>
                                            <h3>Equipment : {val.eqtype}{"  "}</h3>
                                            <h3>Equipment No : {val.eqno}{"  "}</h3>
                                            <h3>Description : {val.abeq}{"  "}</h3>
                                            <h3>STATUS : {val.status}</h3>
                                        </div>

                                        <div>
                                            <button onClick={() => { updateStatus(val._id); }}>Solve it</button>
                                        </div>

                                    </div>
                                </div>
                            );
                        }
                    })
                }
                {!lab && classroom &&
                    finalValue.map((val) => {
                        if (val.comptype === 'classroom') {
                            return (
                                <div className='main'>
                                    <div className='labtitle'>
                                        <h3>Classroom No : {val.resno}</h3>
                                    </div>
                                    <div className='mancompin'>
                                        <div className='updateinfosubcontainer'>
                                            <h3>Equipment : {val.eqtype}{"  "}</h3>
                                            <h3>Equipment No : {val.eqno}{"  "}</h3>
                                            <h3>Description : {val.abeq}{"  "}</h3>
                                            <h3>STATUS : {val.status}</h3>
                                        </div>

                                        <div>
                                            <button onClick={() => { updateStatus(val._id); }}>Solve it</button>
                                        </div>

                                    </div>
                                </div>
                            );
                        }
                    })
                }
                {lab && classroom &&
                    finalValue.map((val) => {
                        if (type === 'All' || type === 'Lab') {
                            if (val.comptype === 'lab') {
                                return (
                                    <div className='main'>
                                        <div className='labtitle'>
                                            <h3>Lab No : {val.resno}</h3>
                                        </div>
                                        <div className='mancompin'>
                                            <div className='updateinfosubcontainer'>
                                                <h3>Equipment : {val.eqtype}{"  "}</h3>
                                                <h3>Equipment No : {val.eqno}{"  "}</h3>
                                                <h3>Description : {val.abeq}{"  "}</h3>
                                                <h3>STATUS : {val.status}</h3>
                                            </div>

                                            <div>
                                                <button onClick={() => { updateStatus(val._id); }}>Solve it</button>
                                            </div>

                                        </div>
                                    </div>
                                );
                            }
                        }
                    })} 
                    {lab && classroom && 
                    finalValueClass.map((val) => {
                        if (type === 'All' || type === 'Classroom') {
                            if (val.comptype === 'classroom') {
                                return (
                                    <div className='main'>
                                        <div className='labtitle'>
                                            <h3>Classroom No : {val.resno}</h3>
                                        </div>
                                        <div className='mancompin'>
                                            <div className='updateinfosubcontainer'>
                                                <h3>Equipment : {val.eqtype}{"  "}</h3>
                                                <h3>Equipment No : {val.eqno}{"  "}</h3>
                                                <h3>Description : {val.abeq}{"  "}</h3>
                                                <h3>STATUS : {val.status}</h3>
                                            </div>

                                            <div>
                                                <button onClick={() => { updateStatus(val._id); }}>Solve it</button>
                                            </div>

                                        </div>
                                    </div>
                                );
                            }
                        }
                    })}
                

                {(() => {
                    if ((finalValue.length + finalValueClass.length === 0)) {
                        return (
                            <div className='nocomp'>
                                <IconContext.Provider value={{ className: 'icons' }}>
                                    <ImIcons.ImFilesEmpty /><br /><br />
                                    <h2>No Work Soon...</h2>
                                </IconContext.Provider>
                            </div>
                        );
                    } else if (finalValue.length === 0 && type === 'Lab') {
                        return (
                            <div className='nocomp'>
                                <IconContext.Provider value={{ className: 'icons' }}>
                                    <ImIcons.ImFilesEmpty /><br /><br />
                                    <h2>No Work For Lab...</h2>
                                </IconContext.Provider>
                            </div>
                        );
                    } else if (finalValueClass.length === 0 && type === 'Classroom') {
                        return (
                            <div className='nocomp'>
                                <IconContext.Provider value={{ className: 'icons' }}>
                                    <ImIcons.ImFilesEmpty /><br /><br />
                                    <h2>No Work For Classroom...</h2>
                                </IconContext.Provider>
                            </div>
                        );
                    }
                })()}

            </div>
        </>
    );
};

export default Work;

