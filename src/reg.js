import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Valdt from './validationreg';
import Axios from 'axios';
import * as AiIcons from 'react-icons/ai';

const Reg = () => {

    const navigate = useNavigate();

    const [err, setErr] = useState('');
    const [mess, setMess] = useState('');

    const [pass, setPass] = useState(false);
    const [cnpass, setCnpass] = useState(false);

    const [valuesReg, setValuesReg] = useState([{
        fname: '',
        lname: '',
        userID: '',
        email: '',
        phone: '',
        password: '',
        cnfpasswd: ''
    }]);

    const [errors, setErrors] = useState({});

    const changeHandle = (e) => {
        setValuesReg({
            ...valuesReg, [e.target.name]: e.target.value
        });
    };

    const changeHandlePhone = (e) => {
        setValuesReg({
            ...valuesReg, [e.target.name]: e.target.value.replace(/\D/g, '')
        });
    };

    const resetHandle = (e) => {
        e.preventDefault();
        setValuesReg({ fname: '', lname: '', userID: '', email: '', phone: '', password: '', cnfpasswd: '' });
    }


    const postData = async (e) => {
        e.preventDefault();
        setErrors(Valdt(valuesReg));
        const { fname, lname, userID, email, phone, password, cnfpasswd } = valuesReg;
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };
            const { data } = await Axios.post(
                "/regtr",
                {
                    fname,
                    lname,
                    userID,
                    email,
                    phone,
                    password,
                    cnfpasswd,
                },
                config
            );
            setErr('');
            setMess('Registered successfully');
            setValuesReg({ fname: '', lname: '', userID: '', email: '', phone: '', password: '', cnfpasswd: '' });
            console.log(data);
            navigate("/ulogin");
        } catch (errors) {
            console.log("Error");
            setMess('');
            setErr('Invalid Credential');
        }
    };

    return (
        <div className='regcontainer'>
            {mess && <div id='errinforeg' className="alert alert-success" role="alert">{mess}</div>}
            {err && <div id='errinforeg' className="alert alert-warning" role="alert">{err}</div>}
            <div className='reg-subcontainer'>
                <div>
                    <h2 className='title'>Sign-up</h2>
                </div>
                <form method='POST'>
                    <div className='fname'>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" name="fname"
                            value={valuesReg.fname}
                            onChange={changeHandle}
                            className='input'
                            autoComplete='off'
                            required
                        />
                        {errors.fname && <p className='error'>{errors.fname}</p>}
                    </div>
                    <div className='lname'>
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" name="lname"
                            value={valuesReg.lname}
                            onChange={changeHandle}
                            className='input'
                            autoComplete='off'
                            required
                        />
                        {errors.lname && <p className='error'>{errors.lname}</p>}
                    </div>
                    <div className='uid'>
                        <label htmlFor="userID">UserID</label>
                        <input type="text" name="userID"
                            value={valuesReg.userID}
                            onChange={changeHandle}
                            className='input'
                            autoComplete='off'
                            required
                        />
                        {errors.userID && <p className='error'>{errors.userID}</p>}
                    </div>
                    <div className='email'>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email"
                            value={valuesReg.email}
                            onChange={changeHandle}
                            className='input'
                            autoComplete='off'
                            required
                        />
                        {errors.email && <p className='error'>{errors.email}</p>}
                    </div>
                    <div className='phone'>
                        <label htmlFor="phone">Phone no.</label>
                        <input type="text" name="phone"
                            value={valuesReg.phone}
                            onChange={changeHandlePhone}
                            className='input'
                            minLength='10'
                            maxLength='10'
                            placeholder='Enter digits only...'
                            autoComplete='off'
                            required
                        />
                        {errors.phone && <p className='error'>{errors.phone}</p>}
                    </div>
                    <div className='password'>
                        <label htmlFor="password">password</label>
                        <div className='password-icon'>
                            <input type={pass ? "text" : "password"} name="password"
                                value={valuesReg.password}
                                onChange={changeHandle}
                                className='input'
                                autoComplete='off'
                                required
                            />
                            {!pass && <AiIcons.AiFillEye className='eye' onClick={() => setPass(!pass)} />}
                            {pass && <AiIcons.AiFillEyeInvisible className='eye' onClick={() => setPass(!pass)} />}
                        </div>
                        {errors.password && <p className='error'>{errors.password}</p>}
                    </div>
                    <div className='cnfpassword'>
                        <label htmlFor="cnfpasswd">Confirm password</label>
                        <div className='password-icon'>
                            <input type={cnpass ? "text" : "password"} name="cnfpasswd"
                                value={valuesReg.cnfpasswd}
                                onChange={changeHandle}
                                className='input'
                                autoComplete='off'
                                required
                            />
                            {!cnpass && <AiIcons.AiFillEye className='eye' onClick={() => setCnpass(!pass)} />}
                            {cnpass && <AiIcons.AiFillEyeInvisible className='eye' onClick={() => setCnpass(!pass)} />}
                        </div>
                        {errors.cnfpasswd && <p className='error'>{errors.cnfpasswd}</p>}
                    </div>
                    <div>
                        <button type='submit' className="submit" onClick={postData}>Sign-up</button>
                    </div>
                    <div>
                        <button type='btn' className="rstbtn" onClick={resetHandle}>cancel</button>
                        <button onClick={() => {
                            navigate("/ulogin");
                        }} className='regtolog'>already account??</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Reg;
