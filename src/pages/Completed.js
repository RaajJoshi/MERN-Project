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
                return (
                    <div className='mancomp'>
                        <div className='updateinfosubcontainer'>
                            <h3>{val.comptype}{"  "}</h3>
                            <h3>{val.resno}{"  "}</h3>
                            <h3>{val.eqtype}{"  "}</h3>
                            <h3>{val.abeq}{"  "}</h3>
                            <h3>{val.status}</h3>
                        </div>
                    </div>
                );
            })}
        </div>
        </>
    );
};

export default Completedcomp;

