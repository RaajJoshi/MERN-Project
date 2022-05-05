import React, { useState, useEffect } from 'react';
import Sidebar from './infaccomponents/Sidebar';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import Axios from 'axios';


const Uview = () => {

  const [pen, setPen] = useState('');
  const [inp, setInp] = useState('');
  const [unp, setUnp] = useState('');
  const [cpt, setCpt] = useState('');
  const [work, setWork] = useState('');
  const [workC, setWorkC] = useState('');

  let data = [];
  data = JSON.parse(localStorage.getItem("facInfo"));
  const uid = data[2];
  const lab = data[6];
  const classroom = data[7];

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

    if(lab && !classroom){
    Axios.get(`/readcompinpbyresl/${lab}`, {
    }).then((response) => {
      setWork(response.data)
    })
      .catch(() => {
        console.log("error");
      });
    }else if(classroom && !lab){
      Axios.get(`/readcompinpbyresc/${classroom}`, {
      }).then((response) => {
        setWork(response.data)
      })
        .catch(() => {
          console.log("error");
        });
    }else{
      Axios.get(`/readcompinpbyresol/${lab}`, {
      }).then((response) => {
        setWork(response.data)
      })
        .catch(() => {
          console.log("error");
        });
        Axios.get(`/readcompinpbyresoc/${classroom}`, {
        }).then((response) => {
          setWorkC(response.data)
        })
          .catch(() => {
            console.log("error");
          });
    }

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
            </IconContext.Provider>
          </div>
          <div className='admnreso'>
            <IconContext.Provider value={{ className: 'icons' }}>
              <div className='sicon'>
                <AiIcons.AiOutlineFileText />
                <p style={{ fontSize: '13px', color: '#ECF0F5' }}>Completed</p>
                <div className='countbox'>
                  <span className='dot'><p style={{ margin: 'auto' }}>{cpt.length}</p></span>
                </div>
              </div>
              <div className='sicon'>
                <AiIcons.AiOutlineFileText />
                <p style={{ fontSize: '13px', color: '#ECF0F5' }}>To-Do</p>               
                <div className='countbox'>
                  <span className='dot'><p style={{ margin: 'auto' }}>{work.length + workC.length}</p></span>
                </div>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Uview;

