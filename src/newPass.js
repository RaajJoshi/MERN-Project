import React, {useState} from 'react';
//import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Valdt from './validationNP';

const NewPass = () => {

    //const navigate = useNavigate();

    const [pass, setPass] = useState('');
    const [cpass, setCpass] = useState('');

    const [errors, setErrors] = useState({});

    let data = [];
    data = JSON.parse(localStorage.getItem("userEm"));
    const email = data[0];

    
    const RstPass = async (e)=>{
        e.preventDefault();
        setErrors(Valdt({ pass, cpass }));
        try{
            const config = {
                headers:{
                    "Content-Type": "application/json"
                }
            };
            const {data} = await Axios.put(
                "/updatepass",
                {
                    email,
                    pass,
                    cpass,
                },
                config
            );
            console.log(data);
            localStorage.removeItem("userEm");
            //navigate('/ulogin');
        } catch(errors){
            console.log("Error");
        }
    };

  return (
    <div className='ucontainer'>
            <div className='subcontainer'>
                <div>
                    <h2 className='title'>New Password</h2>
                </div>
                <form method='POST'>
                    <div className='password'>
                        <label htmlFor="password">New Password</label>
                        <input type="text" name="password"
                            value={pass}
                            onChange={(e)=>setPass(e.target.value)}
                            className='input'
                            autoComplete='off'
                        />
                        {errors.pass && <p className='error'>{errors.pass}</p>}
                    </div>
                    <div className='cnfpassword'>
                        <label htmlFor="cnfpassword">Confirm Password</label>
                        <input type="text" name="cnfpassword"
                            value={cpass}
                            onChange={(e)=>setCpass(e.target.value)}
                            className='input'
                            autoComplete='off'
                        />
                        {errors.cpass && <p className='error'>{errors.cpass}</p>}
                    </div>
                    <div>
                        <button onClick={RstPass} className='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
  );
};

export default NewPass;