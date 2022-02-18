import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from '../components/Sidebar';

const Feedabck = () => {

    /*
    const [feedback, setFeedback] = useState('');

    const postFeedback = async (e) => {
        e.preventDefault();
        //setErrors(Valdt({email,password}));
        try{
            const config = {
                headers:{
                    "Content-Type": "application/json"
                }
            };
            const {data} = await Axios.post(
                "/feedback",
                {
                    feedback,
                },
                config
            );
            console.log(data);
        } catch(errors){
            console.log("Error");
        }
    };
    */

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
        /*
        <>
            <Sidebar />
            <div className='addinfocontainer'>
                <div className='addinfosubcontainer'>
                    <form method='POST'>
                        <div className='feedback'>
                            <label htmlFor="feedback">Feedabck</label>
                            <textarea name="feedback"
                                value={feedback}
                                onChange={(e)=>setFeedback(e.target.value)}
                                className='inputtxt'
                                placeholder='Enter your Feedback...'
                                autoComplete='off'
                            />
                            {errors.labno && <p className='error'>{errors.labno}</p>}
                        </div>
                        <div>
                            <button type='submit' onClick={postFeedback} className="submit">Submit feedback</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
        */

        <>
        <Sidebar />
        <div className='feedbackcontainer'>
            {finalValue.map((val) => {
                return (
                    <div className='feedbackmain'>
                        <div className='feedbacksubcontainer'>
                            <h4>{val.feedback}</h4>
                        </div>
                    </div>
                );
            })}
        </div>
        </>
    );
};

export default Feedabck;

