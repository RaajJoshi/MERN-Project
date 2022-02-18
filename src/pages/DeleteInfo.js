import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from '../components/Sidebar';

const Deleteinfo = () => {


    const [finalValue, setFinalValue] = useState([]);

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





    return (
        <>
        <Sidebar />
        <div className='updateinfocontainer'>
            {finalValue.map((val) => {
                return (
                    <div className='mancomp'>
                        <div className='updateinfosubcontainer'>
                            <h3>{val.labno}{"  "}</h3>
                            <h3>{val.pcno}</h3>
                        </div>
                        <div>
                            <button onClick={() => { deleteLab(val._id); }}>Remove</button>
                        </div>
                    </div>
                );
            })}
        </div>
        </>
    );
};

export default Deleteinfo;

