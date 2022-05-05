import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import Axios from 'axios';


const Aview = () => {

  const [pen, setPen] = useState('');
  const [inp, setInp] = useState('');
  const [unp, setUnp] = useState('');
  const [cpt, setCpt] = useState('');
  const [lab, setLab] = useState('');
  const [croom, setCroom] = useState('');
  const [fdbk, setFdbk] = useState('');
  const [students, setStudents] = useState('');

  useEffect(() => {

    Axios.get("/readcomp", {
    }).then((response) => {
      setPen(response.data)
    })
      .catch(() => {
        console.log("error");
      });

    Axios.get("/readcompinp", {
    }).then((response) => {
      setInp(response.data)
    })
      .catch(() => {
        console.log("error");
      });

    Axios.get("/readcompup", {
    }).then((response) => {
      setUnp(response.data)
    })
      .catch(() => {
        console.log("error");
      });

    Axios.get("/readcompcmp", {
    }).then((response) => {
      setCpt(response.data)
    })
      .catch(() => {
        console.log("error");
      });

    Axios.get("/readlab", {
    }).then((response) => {
      setLab(response.data)
    })
      .catch(() => {
        console.log("error");
      });

    Axios.get("/readclass", {
    }).then((response) => {
      setCroom(response.data)
    })
      .catch(() => {
        console.log("error");
      });

    Axios.get("/readfeedback", {
    }).then((response) => {
      setFdbk(response.data)
    })
      .catch(() => {
        console.log("error");
      });

    Axios.get("/readstd", {
    }).then((response) => {
      setStudents(response.data)
    })
      .catch(() => {
        console.log("error");
      });

  }, []);

  return (
    <>
      <Sidebar />
      <div className='admndashboard'>
        <h3>Dashboard</h3>
        <div className='admndashbox'>
          <div className='admncomp'>
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
                <p style={{ fontSize: '13px', color: '#ECF0F5' }}>Completed</p>
                <div className='countbox'>
                  <span className='dot'><p style={{ margin: 'auto' }}>{cpt.length}</p></span>
                </div>
              </div>
            </IconContext.Provider>
          </div>
          <div className='admnreso'>
            <IconContext.Provider value={{ className: 'icons' }}>
              <div className='sicon'>
                <AiIcons.AiOutlineFileText />
                <p style={{ fontSize: '13px', color: '#ECF0F5' }}>Total Labs</p>
                <div className='countbox'>
                  <span className='dot'><p style={{ margin: 'auto' }}>{lab.length}</p></span>
                </div>
              </div>
              <div className='sicon'>
                <AiIcons.AiOutlineFileText />
                <p style={{ fontSize: '13px', color: '#ECF0F5' }}>Total Classrooms</p>
                <div className='countbox'>
                  <span className='dot'><p style={{ margin: 'auto' }}>{croom.length}</p></span>
                </div>
              </div>
              <div className='sicon'>
                <AiIcons.AiOutlineFileText />
                <p style={{ fontSize: '13px', color: '#ECF0F5' }}>Feedbacks</p>
                <div className='countbox'>
                  <span className='dot'><p style={{ margin: 'auto' }}>{fdbk.length}</p></span>
                </div>
              </div>
              <div className='sicon'>
                <BsIcons.BsPeopleFill />
                <p style={{ fontSize: '13px', color: '#ECF0F5' }}>Total Students</p>
                <div className='countbox'>
                  <span className='dot'><p style={{ margin: 'auto' }}>{students.length}</p></span>
                </div>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aview;
