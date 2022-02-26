import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from '../components/Sidebar';

const Updateinfo = () => {


    const [finalValue, setFinalValue] = useState([]);
    const [finalValueClass, setFinalValueClass] = useState([]);

    const updateLabPc = (id, props) => {
        const newPcno = prompt("Enter new PCs");
        Axios.put("/updatelabpc", {
            newPcno: newPcno,
            id: id
        }).then(() => {
            setFinalValue(finalValue.map((val) => {
                return val._id === id
                    ? { _id: id, labno: val.labno, pcno: newPcno, chrno: val.chrno, acno: val.acno, fanno: val.fanno, lightno: val.lightno, ethr: val.ethr, projc: val.projc }
                    : val;
            }));
        });
    };
    
    const updateLabChr = (id) => {
        const newChrno = prompt("Enter new Chairs");
        Axios.put("/updatelabchr", {
            newChrno: newChrno,
            id: id
        }).then(() => {
            setFinalValue(finalValue.map((val) => {
                return val._id === id
                    ? { _id: id, labno: val.labno, pcno: val.pcno, chrno: newChrno, acno: val.acno, fanno: val.fanno, lightno: val.lightno, ethr: val.ethr, projc: val.projc }
                    : val;
            }));
        });
    };
    const updateLabAc = (id) => {
        const newAcno = prompt("Enter new ACs");
        Axios.put("/updatelabac", {
            newAcno: newAcno,
            id: id
        }).then(() => {
            setFinalValue(finalValue.map((val) => {
                return val._id === id
                    ? { _id: id, labno: val.labno, pcno: val.pcno, chrno: val.chrno, acno: newAcno, fanno: val.fanno, lightno: val.lightno, ethr: val.ethr, projc: val.projc }
                    : val;
            }));
        });
    };const updateLabFan = (id) => {
        const newFanno = prompt("Enter new Fans");
        Axios.put("/updatelabfan", {
            newFanno: newFanno,
            id: id
        }).then(() => {
            setFinalValue(finalValue.map((val) => {
                return val._id === id
                    ? { _id: id, labno: val.labno, pcno: val.pcno, chrno: val.chrno, acno: val.acno, fanno: newFanno, lightno: val.lightno, ethr: val.ethr, projc: val.projc }
                    : val;
            }));
        });
    };const updateLabLight = (id) => {
        const newLghtno = prompt("Enter new Tubelights");
        Axios.put("/updatelablght", {
            newLghtno: newLghtno,
            id: id
        }).then(() => {
            setFinalValue(finalValue.map((val) => {
                return val._id === id
                    ? { _id: id, labno: val.labno, pcno: val.pcno, chrno: val.chrno, acno: val.acno, fanno: val.fanno, lightno: newLghtno, ethr: val.ethr, projc: val.projc }
                    : val;
            }));
        });
    };const updateLabEthr = (id) => {
        const newEthr = prompt("Enter new Ethernet");
        Axios.put("/updatelabethr", {
            newEthr: newEthr,
            id: id
        }).then(() => {
            setFinalValue(finalValue.map((val) => {
                return val._id === id
                    ? { _id: id, labno: val.labno, pcno: val.pcno, chrno: val.chrno, acno: val.acno, fanno: val.fanno, lightno: val.lightno, ethr: newEthr, projc: val.projc }
                    : val;
            }));
        });
    };
    const updateLabProj = (id) => {
        const newProjc = prompt("Enter new Projector");
        Axios.put("/updatelabproj", {
            newProjc: newProjc,
            id: id
        }).then(() => {
            setFinalValue(finalValue.map((val) => {
                return val._id === id
                    ? { _id: id, labno: val.labno, pcno: val.pcno, chrno: val.chrno, acno: val.acno, fanno: val.fanno, lightno: val.lightno, ethr: val.ethr, projc: newProjc }
                    : val;
            }));
        });
    };
    const updateClassBnch = (id) => {
        const newBenchno = prompt("Enter new Benches");
        Axios.put("/updateclassbch", {
            newBenchno: newBenchno,
            id: id
        }).then(() => {
            setFinalValueClass(finalValueClass.map((val) => {
                return val._id === id
                    ? { _id: id, classno: val.classno, benchno: newBenchno, fannno: val.fannno, tubelightno: val.tubelightno,  projec: val.projec }
                    : val;
            }));
        });
    };
    const updateClassfan = (id) => {
        const newFannno = prompt("Enter new Fans");
        Axios.put("/updateclassfan", {
            newFannno: newFannno,
            id: id
        }).then(() => {
            setFinalValueClass(finalValueClass.map((val) => {
                return val._id === id
                    ? { _id: id, classno: val.classno, benchno: val.benchno, fannno: newFannno, tubelightno: val.tubelightno,  projec: val.projec }
                    : val;
            }));
        });
    };
    const updateClasstbl = (id) => {
        const newLightno = prompt("Enter new Tubelights");
        Axios.put("/updateclasslight", {
            newLightno: newLightno,
            id: id
        }).then(() => {
            setFinalValueClass(finalValueClass.map((val) => {
                return val._id === id
                    ? { _id: id, classno: val.classno, benchno: val.benchno, fannno: val.fannno, tubelightno: newLightno,  projec: val.projec }
                    : val;
            }));
        });
    };
    const updateClassproj = (id) => {
        const newProj = prompt("Enter new Projector");
        Axios.put("/updateclassproj", {
            newProj: newProj,
            id: id
        }).then(() => {
            setFinalValueClass(finalValueClass.map((val) => {
                return val._id === id
                    ? { _id: id, classno: val.classno, benchno: val.benchno, fannno: val.fannno, tubelightno: val.tubelightno,  projec: newProj }
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
                                <div id='upbtn' className='buttoncss'>
                                    <button onClick={() => { updateLabPc(val._id) }}>Update</button>
                                    <button onClick={() => { updateLabChr(val._id) }}>Update</button>
                                    <button onClick={() => { updateLabAc(val._id); }}>Update</button>
                                    <button onClick={() => { updateLabFan(val._id); }}>Update</button>
                                    <button onClick={() => { updateLabLight(val._id); }}>Update</button>
                                    <button onClick={() => { updateLabEthr(val._id); }}>Update</button>
                                    <button onClick={() => { updateLabProj(val._id); }}>Update</button>
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
                                <div id='upbtn' className='buttoncss'>
                                    <button onClick={() => { updateClassBnch(val._id) }}>Update</button>
                                    <button onClick={() => { updateClassfan(val._id) }}>Update</button>
                                    <button onClick={() => { updateClasstbl(val._id); }}>Update</button>
                                    <button onClick={() => { updateClassproj(val._id); }}>Update</button>
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

