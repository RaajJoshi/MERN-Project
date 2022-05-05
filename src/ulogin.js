import React, { useState, useEffect, useContext } from 'react';
import Valdt from './validation';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { UserContext } from './App';
import * as AiIcons from 'react-icons/ai';


export const Ulogin = () => {

    const navigate = useNavigate();

    const { state, dispatch } = useContext(UserContext);

    const [pass, setPass] = useState(false);


    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");
        if (userInfo) {
            navigate('/uview');
        }

    }, []);


    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const [errors, setErrors] = useState({});

    const resetHandle = (e) => {
        e.preventDefault();
        setUserID('');
        setPassword('');
    }

    const checkData = async (e) => {
        e.preventDefault();
        setErrors(Valdt({ userID, password }));
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };
            const { data } = await Axios.post(
                "/usrlogin",
                {
                    userID,
                    password,
                },
                config
            );
            localStorage.setItem("userInfo", JSON.stringify(data));
            dispatch({ type: 'USER', payload: true });
            setUserID('');
            setPassword('');
            console.log(data);
            navigate("/uview");
        } catch (errors) {
            console.log("Error");
            setErr('Invalid Credential');
        }
    };


    return (
        <div className='ucontainer'>
            {err && <div className="alert alert-warning" role="alert">{err}</div>}
            <div className='subcontainer'>
                <div>
                    <h2 className='title'>Sign-in</h2>
                </div>
                <form method='POST' onSubmit={checkData}>
                    <div className='uid'>
                        <label htmlFor="userID">UserID</label>
                        <input type="text" name="uid"
                            value={userID}
                            onChange={(e) => setUserID(e.target.value)}
                            className='input'
                            autoComplete='off'
                        />
                        {errors.userID && <p className='error'>{errors.userID}</p>}
                    </div>
                    <div className='password'>
                        <label htmlFor="password">password</label>
                        <div className='password-icon'>
                            <input type={pass ? "text" : "password"} name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='inputf'
                                placeholder='dd-mm-yyyy'
                                autoComplete='off'
                            />
                            {!pass && <AiIcons.AiFillEye className='eye' onClick={() => setPass(!pass)} />}
                            {pass && <AiIcons.AiFillEyeInvisible className='eye' onClick={() => setPass(!pass)} />}
                        </div>
                        <p style={{textAlign:'center'}}>NOTE : password for this application is student's birth date</p>
                        {errors.password && <p className='error'>{errors.password}</p>}
                    </div>
                    
                    <div>
                        <button type='submit' className="submit">Login</button>
                    </div>
                    <div>
                        <button type='btn' className="rstbtn" onClick={resetHandle}>cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Ulogin;
