import React, { useState } from 'react';
import Valdt from './validation';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';


export const Ulogin = () => {
    let history = useHistory();

    
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
    
    const [errors, setErrors] = useState({});

    /*
    const [values, setValues] = useState([{
        userID: '',
        password: '',
    }]);

    

    const changeHandle = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value
        });
    };
    

    

    
    const checkData = async (e) => {
        e.preventDefault();
        setErrors(Valdt(values));
        const { email, password } = values;
        const res = await fetch('http://localhost:5000/usrlogin', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, 
                password,
            }),
        });
        setValues({ userID: '', password: '' });
        const data = await res.json();
        if (data.status === 400 || !data) {
            window.alert("Invalid Login");
        } else {
            window.alert("Valid Login");
            history.push("/uview");
        }
    };
    */

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
                "/usrlogin",
                {
                    userID,
                    password,
                },
                config
            );
            setUserID('');
            setPassword('');
            console.log(data);
            history.push("/uview");
        } catch(errors){
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
                            onChange={(e)=>setUserID(e.target.value)}
                            className='input'
                            autoComplete='off'
                        />
                        {errors.userID && <p className='error'>{errors.userID}</p>}
                    </div>
                    <div className='password'>
                        <label htmlFor="password">password</label>
                        <input type="password" name="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            className='input'
                            autoComplete='off'
                        />
                        {errors.password && <p className='error'>{errors.password}</p>}
                    </div>
                    <div>
                        <button type='submit' className="submit">Login</button>
                    </div>
                    <div>
                        <button type='btn' className="rstbtn" onClick={resetHandle}>cancel</button>
                        <button onClick={() => {
                            history.push("/reg");
                        }} className='logtoreg'>new user??</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Ulogin;
