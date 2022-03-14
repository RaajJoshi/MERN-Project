import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from '../components/Sidebar';
import * as ImIcons from 'react-icons/im';
import { IconContext } from 'react-icons/lib';


const Feedabck = () => {

    const [finalValue, setFinalValue] = useState([]);


    useEffect(() => {
        Axios.get("/readfeedback", {
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
            <div className='feedbackcontainer'>
                {finalValue.map((val) => {
                    return (
                        <div className='main'>
                            <div className='labtitle'>
                                <h4>Feedabck from : {val.fname}{" "}{val.lname}</h4>
                                <h4>ID : {val.userID}</h4>
                            </div>
                            <div className='feedbackmain'>
                                <div className='feedbacksubcontainer'>
                                    <h4>{val.feedback}</h4>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {(() => {
                    if (finalValue.length === 0) {
                        return (
                            <div className='nocomp'>
                                <IconContext.Provider value={{ className: 'icons' }}>
                                    <ImIcons.ImFilesEmpty /><br /><br />
                                    <h2>No Feedbacks...</h2>
                                </IconContext.Provider>
                            </div>
                        );
                    }
                })()}


            </div>
        </>
    );
};

export default Feedabck;

