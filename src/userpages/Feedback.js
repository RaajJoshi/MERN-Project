import React, { useState } from 'react';
import Axios from 'axios';
import Valdt from './validationFdbk';
import Sidebar from '../usercomponents/Sidebar';

const Feedabck = () => {

    const [feedback, setFeedback] = useState('');
    const [errors, setErrors] = useState({});
    const [mess, setMess] = useState('');
    let data = [];
    data = JSON.parse(localStorage.getItem("userInfo"));
    const uid = data[2];
    const fname = data[3];
    const lname = data[4];

    const postFeedback = async (e) => {
        e.preventDefault();
        setErrors(Valdt({feedback}));
        try{
            const config = {
                headers:{
                    "Content-Type": "application/json"
                }
            };
            const {data} = await Axios.post(
                `/feedbackbe/${uid}`,
                {
                    feedback,
                    fname,
                    lname,
                },
                config
            );
            setFeedback('');
            setMess('Add Feedback successfully');
            console.log(data);
        } catch(errors){
            console.log("Error");
            setMess('');
        }
    };

    return (
        <>
            <Sidebar />
            <div className='addinfocontainer'>
                {mess && <div id='errinfo' className="alert alert-success" role="alert">{mess}</div>}
                <div className='addinfosubcontainer'>
                    <div>
                      <h2 className='title'>FEEDBACK</h2>
                    </div>
                    <form method='POST'>
                        <div className='feedback'>
                            <textarea name="feedback"
                                value={feedback}
                                onChange={(e)=>setFeedback(e.target.value)}
                                className='inputtxt'
                                placeholder='Enter your Feedback...'
                                autoComplete='off'
                            />
                            {errors.feedback && <p className='error'>{errors.feedback}</p>}
                        </div>
                        <div>
                            <button type='submit' onClick={postFeedback} className="submit">Submit feedback</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Feedabck;

