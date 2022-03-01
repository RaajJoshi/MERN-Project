import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from '../infaccomponents/Sidebar';

const Work = () => {


    const [finalValue, setFinalValue] = useState([]);

    let data = [];
    data = JSON.parse(localStorage.getItem("userInfo"));
    const lab = data[6];
    console.log(lab);

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
        Axios.get(`/readcompinpbyres/${lab}`, {
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
    
                                    <div>
                                        <button onClick={() => { updateStatus(val._id); }}>Solve it</button>
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
    
                                    <div>
                                        <button onClick={() => { updateStatus(val._id); }}>complete it</button>
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

export default Work;

