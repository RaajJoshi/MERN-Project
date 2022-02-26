import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from '../components/Sidebar';

const Completedcomp = () => {


    const [finalValue, setFinalValue] = useState([]);


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
                {finalValue.map((val) => {
                    if(val.comptype === 'lab'){
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
                    }else{
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
                })}
            </div>
        </>
    );
};

export default Completedcomp;

