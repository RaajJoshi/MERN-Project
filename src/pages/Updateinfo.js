import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from '../components/Sidebar';

const Updateinfo = () => {


    const [finalValue, setFinalValue] = useState([]);

    const updateLab = (id) => {
        const newPcno = prompt("Enter new PCs");
        Axios.put("/updatelab", {
            newPcno: newPcno,
            id: id
        }).then(() => {
            setFinalValue(finalValue.map((val) => {
                return val._id === id
                    ? { _id: id, labno: val.labno, pcno: newPcno }
                    : val;
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
                                <div id='upbtn' className='buttoncss'>
                                    <button onClick={() => { updateLab(val._id); }}>Update</button>
                                    <button onClick={() => { updateLab(val._id); }}>Update</button>
                                    <button onClick={() => { updateLab(val._id); }}>Update</button>
                                    <button onClick={() => { updateLab(val._id); }}>Update</button>
                                    <button onClick={() => { updateLab(val._id); }}>Update</button>
                                    <button onClick={() => { updateLab(val._id); }}>Update</button>
                                    <button onClick={() => { updateLab(val._id); }}>Update</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Updateinfo;

