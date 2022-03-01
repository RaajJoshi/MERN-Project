import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from '../components/Sidebar';

const Inprogresscomp = () => {


    const [finalValue, setFinalValue] = useState([]);
    

    useEffect(() => {
        Axios.get("/readcompinp", {
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
                                <div className='mancompin'>
                                    <div className='updateinfosubcontainer'>
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
                                <div className='mancompin'>
                                    <div className='updateinfosubcontainer'>
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

export default Inprogresscomp;

