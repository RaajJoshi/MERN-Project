import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from '../components/Sidebar';

const Deleteinfo = () => {


    const [finalValue, setFinalValue] = useState([]);
    const [finalValueClass, setFinalValueClass] = useState([]);

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
                {finalValue.map((val) => {
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
                })}
                {finalValueClass.map((val) => {
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
                })}
            </div>
        </>
    );
};

export default Deleteinfo;

