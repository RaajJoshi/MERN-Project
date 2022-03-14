import React, { useState, useEffect } from 'react'
import Sidebar from '../faccomponents/Sidebar';
import Axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import * as BsIcons from 'react-icons/bs';
import * as ImIcons from 'react-icons/im';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';


const ModComp = () => {


  const [finalValue, setFinalValue] = useState([]);


  const [type, setType] = useState('All');

  let data = [];
  data = JSON.parse(localStorage.getItem("facInfo"));
  const uid = data[2];


  useEffect(() => {

    Axios.get(`/readcompbyid/${uid}`, {
    }).then((response) => {
      setFinalValue(response.data)
    })
      .catch(() => {
        console.log("error");
      });

  }, []);

  const updateComp = (id, props) => {
    const newDescr = prompt("Enter new Complain...");
    Axios.put("/updatecomp", {
      newDescr: newDescr,
      id: id
    }).then(() => {
      setFinalValue(finalValue.map((val) => {
        return val._id === id
          ? { _id: id, resno: val.resno, eqtype: val.eqtype, abeq: newDescr, status: val.status }
          : val;
      }));
    });
  };


  return (
    <>
      <Sidebar />
      <div className='updateinfocontainer'>
        <div className='ddmselect'>
          <Dropdown value={type} name='type'>
            <Dropdown.Toggle className='ddtselect' variant="secondary" id="dropdown-basic">
              <IconContext.Provider value={{ color: 'white' }}>
                <BsIcons.BsFilterSquare />&nbsp;&nbsp;Filter By&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </IconContext.Provider>
            </Dropdown.Toggle>
            <Dropdown.Menu className='ddmmselect'>
              <Dropdown.Item className='ddi' onClick={() => setType('All')}>All</Dropdown.Item>
              <Dropdown.Item className='ddi' onClick={() => setType('Lab')}>Lab</Dropdown.Item>
              <Dropdown.Item className='ddi' onClick={() => setType('Classroom')}>Classroom</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {finalValue.map((val) => {
          if (val.status === 'inprogress' || val.status === 'pending') {
            if (type === 'All') {
              if (val.comptype === 'lab') {
                return (
                  <div className='main'>
                    <div className='labtitle'>
                      <h3>Lab No : {val.resno}</h3>
                    </div>
                    <div className='mancomp'>
                      <div className='updateinfosubcontainer'>
                        <h3>Equipment : {val.eqtype}{"  "}</h3>
                        <h3>Description : {val.abeq}{"  "}</h3>
                        <h3>STATUS : {val.status}</h3>
                      </div>
                      <div id='upbtn' className='buttoncss'>
                        <button onClick={() => { updateComp(val._id) }}>Update</button>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className='main'>
                    <div className='labtitle'>
                      <h3>Classroom No : {val.resno}</h3>
                    </div>
                    <div className='mancomp'>
                      <div className='updateinfosubcontainer'>
                        <h3>Equipment : {val.eqtype}{"  "}</h3>
                        <h3>Description : {val.abeq}{"  "}</h3>
                        <h3>STATUS : {val.status}</h3>
                      </div>
                      <div id='upbtn' className='buttoncss'>
                        <button onClick={() => { updateComp(val._id) }}>Update</button>
                      </div>
                    </div>
                  </div>
                );
              }
            } else if (type === 'Lab') {
              if (val.comptype === 'lab') {
                return (
                  <div className='main'>
                    <div className='labtitle'>
                      <h3>Lab No : {val.resno}</h3>
                    </div>
                    <div className='mancomp'>
                      <div className='updateinfosubcontainer'>
                        <h3>Equipment : {val.eqtype}{"  "}</h3>
                        <h3>Description : {val.abeq}{"  "}</h3>
                        <h3>STATUS : {val.status}</h3>
                      </div>
                      <div id='upbtn' className='buttoncss'>
                        <button onClick={() => { updateComp(val._id) }}>Update</button>
                      </div>
                    </div>
                  </div>
                );
              }
            } else {
              if (val.comptype === 'classroom') {
                return (
                  <div className='main'>
                    <div className='labtitle'>
                      <h3>Classroom No : {val.resno}</h3>
                    </div>
                    <div className='mancomp'>
                      <div className='updateinfosubcontainer'>
                        <h3>Equipment : {val.eqtype}{"  "}</h3>
                        <h3>Description : {val.abeq}{"  "}</h3>
                        <h3>STATUS : {val.status}</h3>
                      </div>
                      <div id='upbtn' className='buttoncss'>
                        <button onClick={() => { updateComp(val._id) }}>Update</button>
                      </div>
                    </div>
                  </div>
                );
              }
            }
          }
        })}

        {(() => {
          if (finalValue.length === 0) {
            return (
              <div className='nocomp'>
                <IconContext.Provider value={{ className: 'icons' }}>
                  <ImIcons.ImFilesEmpty /><br /><br />
                  <h2>No Complains!!!</h2>
                  <h3>Want to Raise?? <Link style={{ textDecoration: 'none', color: 'hsl(29, 100%, 49%)' }} to={'/postcompf'}>Click Here</Link></h3>
                </IconContext.Provider>
              </div>
            );
          }
        })()}

      </div>
    </>
  );


};

export default ModComp;

