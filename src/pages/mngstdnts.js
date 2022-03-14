import React, { useState } from 'react';
import Axios from 'axios';


export const MnSt = () => {

    const [stfile, setStfile] = useState(null);

    const ExcelChange = (e) => {
        setStfile(e.target.files[0]);
    }

    const checkData = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };
            const { data } = await Axios.post(
                "/addst",
                {
                    stfile,
                },
                config
            );
            console.log(data);
        } catch (errors) {
            console.log("Error");
        }
    };


    return (
        <div className='ucontainer'>
            <div className='subcontainer'>
                <div>
                    <h2 className='title'>Add Students</h2>
                </div>
                <form method='POST' onSubmit={checkData} encType="multipart/form-data">
                    <div className='uid'>
                        <label htmlFor="stdata">Chhose File</label>
                        <input type="file" name="stdata"
                            onChange={ExcelChange}
                            className='input'
                        />
                    </div>
                    
                    <div>
                        <button type='submit' className="submit">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MnSt;
