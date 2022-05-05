import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Forgot = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');

    const otpSend = async (e)=>{
        e.preventDefault();
        try{
            const config = {
                headers:{
                    "Content-Type": "application/json"
                }
            };
            const {data} = await Axios.post(
                "/send",
                {
                    email,
                },
                config
            );
            console.log(data);
        } catch(errors){
            console.log("Error");
        }
    };

    const verifyOTP = async (e)=>{
        e.preventDefault();
        try{
            const config = {
                headers:{
                    "Content-Type": "application/json"
                }
            };
            const {data} = await Axios.post(
                "/verify",
                {
                    email,
                    otp,
                },
                config
            );
            localStorage.setItem("userEm",JSON.stringify(data));
            navigate('/newPass');
        } catch(errors){
            console.log("Error");
        }
    };


  return (
    <div className='ucontainer'>
            <div className='subcontainer'>
                <div>
                    <h2 className='title'>Forgot Password</h2>
                </div>
                <form method='POST'>
                    <div className='uid'>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            className='input'
                            autoComplete='off'
                        />
                        {/* {errors.userID && <p className='error'>{errors.userID}</p>} */}
                    </div>
                    <div>
                    <button onClick={otpSend} className='submit'>Send OTP</button>
                    </div>
                    <div className='password'>
                        <label htmlFor="password">OTP</label>
                        <input type="text" name="password"
                            value={otp}
                            onChange={(e)=>setOtp(e.target.value.replace(/\D/g, ''))}
                            className='input'
                            placeholder='Enter digits only...'
                            autoComplete='off'
                        />
                        {/* {errors.password && <p className='error'>{errors.password}</p>} */}
                    </div>
                    <div>
                        <button onClick={verifyOTP} className='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
  );
};

export default Forgot;