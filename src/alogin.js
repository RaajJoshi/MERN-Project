import React, { useState } from 'react';
import Valdt from './validation';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';

export const Alogin = () => {
    let history = useHistory();

    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const [errors, setErrors] = useState({});

    const resetHandle = (e) => {
        e.preventDefault();
        setUserID('');
        setPassword('');
    }

    const checkData= async (e)=>{
        e.preventDefault();
        setErrors(Valdt({userID,password}));
        try{
            const config = {
                headers:{
                    "Content-Type": "application/json"
                }
            };
            const {data} = await Axios.post(
                "/admnlogin",
                {
                    userID,
                    password,
                },
                config
            );
            setUserID('');
            setPassword('');
            console.log(data);
            history.push("/aview");
        } catch(errors){
            console.log("Error");
            setErr('Invalid Credential');           
        }
    };

    return (
        <div className='admncontainer'>
            {err && <div className="alert alert-warning" role="alert">{err}</div>}
            <div className='admnsubcontainer'>
                <div>
                    <h2 className='admntitle'>ADMIN PANEL</h2>
                </div>
                <form method='POST' onSubmit={checkData}>
                    <div className='admnuid'>
                        <label htmlFor="userID">UserID</label>
                        <input type="text" name="userID"
                            value={userID}
                            onChange={(e)=>setUserID(e.target.value)}
                            className='admninput'
                            autoComplete='off'
                        />
                        {errors.userID && <p className='admnerror'>{errors.userID}</p>}
                    </div>
                    <div className='admnpassword'>
                        <label htmlFor="password">password</label>
                        <input type="password" name="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            className='admninput'
                            autoComplete='off'
                        />
                        {errors.password && <p className='admnerror'>{errors.password}</p>}
                    </div>
                    <div>
                        <button type='submit' className="admnsubmit">Login</button>
                    </div>
                    <div>
                        <button type='btn' className="admnrst" onClick={resetHandle}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Alogin;
