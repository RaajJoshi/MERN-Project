import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from '../components/Sidebar';
import { Dropdown } from 'react-bootstrap';
import * as BsIcons from 'react-icons/bs';
import * as ImIcons from 'react-icons/im';
import { IconContext } from 'react-icons/lib';

const Completedcomp = () => {


    const [finalValue, setFinalValue] = useState([]);

    const [type, setType] = useState('All');


    useEffect(() => {
        Axios.get("/readcompcmp", {
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
                    if (type === 'All') {
                        if (val.comptype === 'lab') {
                            return (
                                <div className='main'>
                                    <div className='labtitle'>
                                        <h3>Lab No : {val.resno}</h3>
                                    </div>
                                    <div className='mancomp'>
                                        <div className='updateinfosubcontainer'>
                                            {/*<h3>{val.comptype}{"  "}</h3>*/}
                                            <h3>Equipment : {val.eqtype}{"  "}</h3>
                                            <h3>Description : {val.abeq}{"  "}</h3>
                                            <h3>STATUS : {val.status}</h3>
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
                                            {/*<h3>{val.comptype}{"  "}</h3>*/}
                                            <h3>Equipment : {val.eqtype}{"  "}</h3>
                                            <h3>Description : {val.abeq}{"  "}</h3>
                                            <h3>STATUS : {val.status}</h3>
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
                                            {/*<h3>{val.comptype}{"  "}</h3>*/}
                                            <h3>Equipment : {val.eqtype}{"  "}</h3>
                                            <h3>Description : {val.abeq}{"  "}</h3>
                                            <h3>STATUS : {val.status}</h3>
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
                                            {/*<h3>{val.comptype}{"  "}</h3>*/}
                                            <h3>Equipment : {val.eqtype}{"  "}</h3>
                                            <h3>Description : {val.abeq}{"  "}</h3>
                                            <h3>STATUS : {val.status}</h3>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    }
                })}

                {(() => {
                    if (finalValue.length === 0) {
                        return (
                            <div className='nocomp'>
                                <IconContext.Provider value={{ className: 'icons' }}>
                                    <ImIcons.ImFilesEmpty /><br /><br />
                                    <h2>Not Any complaint completed</h2>
                                </IconContext.Provider>
                            </div>
                        );
                    }
                })()}

            </div>
        </>
    );
};

export default Completedcomp;

