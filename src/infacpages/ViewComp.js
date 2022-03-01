import React, { useState, useEffect } from 'react'
import Sidebar from '../infaccomponents/Sidebar';
import Axios from 'axios';
/*
<div className='updateinfocontainer'>
            <div className='updateinfosubcontainer'>
                <h3>No Complains...</h3>
            </div>
        </div>
*/

const ViewComp = () => {


    const [finalValue, setFinalValue] = useState([]);

    const [finalValueClass, setFinalValueClass] = useState([]);

    let data = [];
    data = JSON.parse(localStorage.getItem("userInfo"));
    const uid = data[2];
    
    useEffect(() => {

        Axios.get(`/readcompbyid/${uid}`, {
        }).then((response) => {
            setFinalValue(response.data)
        })
            .catch(() => {
                console.log("error");
            });
    }, []);

    useEffect(() => {
        Axios.get(`/readcompbyidclass/${uid}`, {
        }).then((response) => {
            setFinalValueClass(response.data)
        })
            .catch(() => {
                console.log("error");
            });
    }, [])


    return (
        <>
            <Sidebar />
            <div className='updateinfocontainer'>
                {finalValue.map((val) => {
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
                })}

                {finalValueClass.map((val) => {
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
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );


};

export default ViewComp;

