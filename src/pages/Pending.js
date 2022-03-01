import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from '../components/Sidebar';
import { Dropdown } from 'react-bootstrap';
import * as GrIcons from 'react-icons/gr';
import { IconContext } from 'react-icons/lib';


const Pendingcomp = () => {


    const [finalValue, setFinalValue] = useState([]);

    const [type, setType] = useState('All');

    const updateStatus = (id) => {
        const newStatus = 'inprogress';
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
        Axios.get("/readcomp", {
        }).then((response) => {
            setFinalValue(response.data)
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
                        <GrIcons.GrSort />&nbsp;&nbsp;&nbsp;SORT BY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='ddmmselect'>
                            <Dropdown.Item className='ddi' onClick={() => setType('All')}>All</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => setType('Lab')}>Lab</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => setType('Classroom')}>Classroom</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div>
                    {finalValue.map((val) => {
                        if (type === 'All') {
                            if (val.comptype === 'lab') {
                                return (
                                    <div className='main'>
                                        <div className='labtitle'>
                                            <h3>Lab No : {val.resno}</h3>
                                        </div>
                                        <div className='mancomp'>
                                            <div className='updateinfosubcontainer'>
                                                <h3>Equipment : {val.eqtype}{"  "}</h3>
                                                <h3>Description : {val.abeq}{"  "}</h3>
                                                <h3>STATUS : {val.status}</h3>
                                            </div>

                                            <div>
                                                <button onClick={() => { updateStatus(val._id); }}>solve it</button>
                                            </div>

                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <div className='main'>
                                        <div className='labtitle'>
                                            <h3>Classroom No : {val.resno}</h3>
                                        </div>
                                        <div className='mancomp'>
                                            <div className='updateinfosubcontainer'>
                                                <h3>Equipment : {val.eqtype}{"  "}</h3>
                                                <h3>Description : {val.abeq}{"  "}</h3>
                                                <h3>STATUS : {val.status}</h3>
                                            </div>

                                            <div>
                                                <button onClick={() => { updateStatus(val._id); }}>solve it</button>
                                            </div>

                                        </div>
                                    </div>
                                );
                            }
                        } else if (type === 'Lab') {
                            if (val.comptype === 'lab') {
                                return (
                                    <div className='main'>
                                        <div className='labtitle'>
                                            <h3>Lab No : {val.resno}</h3>
                                        </div>
                                        <div className='mancomp'>
                                            <div className='updateinfosubcontainer'>
                                                <h3>Equipment : {val.eqtype}{"  "}</h3>
                                                <h3>Description : {val.abeq}{"  "}</h3>
                                                <h3>STATUS : {val.status}</h3>
                                            </div>

                                            <div>
                                                <button onClick={() => { updateStatus(val._id); }}>solve it</button>
                                            </div>

                                        </div>
                                    </div>
                                );
                            }
                        } else {
                            if (val.comptype === 'classroom') {
                                return (
                                    <div className='main'>
                                        <div className='labtitle'>
                                            <h3>Classroom No : {val.resno}</h3>
                                        </div>
                                        <div className='mancomp'>
                                            <div className='updateinfosubcontainer'>
                                                <h3>Equipment : {val.eqtype}{"  "}</h3>
                                                <h3>Description : {val.abeq}{"  "}</h3>
                                                <h3>STATUS : {val.status}</h3>
                                            </div>

                                            <div>
                                                <button onClick={() => { updateStatus(val._id); }}>solve it</button>
                                            </div>

                                        </div>
                                    </div>
                                );
                            }
                        }
                    })}
                </div>
            </div>
        </>
    );
};

export default Pendingcomp;

