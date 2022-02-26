import React, { useState, useEffect } from 'react'
import Sidebar from '../usercomponents/Sidebar';
import Axios from 'axios';
/*
<div className='updateinfocontainer'>
            <div className='updateinfosubcontainer'>
                <h3>No Complains...</h3>
            </div>
        </div>
*/

const ModComp = () => {


  const [finalValue, setFinalValue] = useState([]);

  const [finalValueClass, setFinalValueClass] = useState([]);

  let data = [];
  data = JSON.parse(localStorage.getItem("userInfo"));
  const uid = data[2];
  console.log(uid);


  useEffect(() => {
    Axios.get(`/readcompbyid/${uid}`, {
    }).then((response) => {
      setFinalValue(response.data)
    })
      .catch(() => {
        console.log("error");
      });
  }, []);


  useEffect(() => {
    Axios.get(`/readcompbyidclass/${uid}`, {
    }).then((response) => {
      setFinalValueClass(response.data)
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

const updateCompClass = (id, props) => {
  const newDescr = prompt("Enter new Complain...");
  Axios.put("/updatecomp", {
      newDescr: newDescr,
      id: id
  }).then(() => {
      setFinalValueClass(finalValueClass.map((val) => {
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

        {finalValue.map((val) => {
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
        })}


        {finalValueClass.map((val) => {
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
                  <button onClick={() => { updateCompClass(val._id) }}>Update</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );


};

export default ModComp;

