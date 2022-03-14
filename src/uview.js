import React, { useState, useEffect } from 'react';
import Sidebar from './usercomponents/Sidebar';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import Axios from 'axios';


const Uview = () => {

  const [pen, setPen] = useState('');
  const [inp, setInp] = useState('');
  const [unp, setUnp] = useState('');
  const [cpt, setCpt] = useState('');

  let data = [];
  data = JSON.parse(localStorage.getItem("userInfo"));
  const uid = data[2];

  useEffect(() => {

    Axios.get(`/readcompno/${uid}`, {
    }).then((response) => {
      setPen(response.data)
    })
      .catch(() => {
        console.log("error");
      });

    Axios.get(`/readcompnoinp/${uid}`, {
    }).then((response) => {
      setInp(response.data)
    })
      .catch(() => {
        console.log("error");
      });

    Axios.get(`/readcompnounp/${uid}`, {
    }).then((response) => {
      setUnp(response.data)
    })
      .catch(() => {
        console.log("error");
      });

    Axios.get(`/readcompnocpt/${uid}`, {
    }).then((response) => {
      setCpt(response.data)
    })
      .catch(() => {
        console.log("error");
      });

  }, []);

  return (
    <>
      <Sidebar />
      <div className='dashboard'>
        <h3>Dashboard</h3>
        <div className='dashbox'>
          <IconContext.Provider value={{ className: 'icons' }}>
            <div className='sicon'>
              <AiIcons.AiOutlineFileText />
              <p style={{ fontSize: '13px', color: '#ECF0F5' }}>Pennding</p>
              <div className='countbox'>
                <span className='dot'><p style={{ margin: 'auto' }}>{pen.length}</p></span>
              </div>
            </div>
            <div className='sicon'>
              <AiIcons.AiOutlineFileText />
              <p style={{ fontSize: '13px', color: '#ECF0F5' }}>Inprogress</p>
              <div className='countbox'>
                <span className='dot'><p style={{ margin: 'auto' }}>{inp.length}</p></span>
              </div>
            </div>
            <div className='sicon'>
              <AiIcons.AiOutlineFileText />
              <p style={{ fontSize: '13px', color: '#ECF0F5' }}>Under Process</p>
              <div className='countbox'>
                <span className='dot'><p style={{ margin: 'auto' }}>{unp.length}</p></span>
              </div>
            </div>
            <div className='sicon'>
              <AiIcons.AiOutlineFileText />
              <p style={{ fontSize: '13px', color: '#ECF0F5' }}>completed</p>
              <div className='countbox'>
                <span className='dot'><p style={{ margin: 'auto' }}>{cpt.length}</p></span>
              </div>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
};

export default Uview;

