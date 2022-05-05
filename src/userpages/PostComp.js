import React, { useState, useEffect } from 'react'
import Sidebar from '../usercomponents/Sidebar';
import { Dropdown } from 'react-bootstrap';
import Axios from 'axios';
import Valdt from './validationLab';
import ValdtClass from './validationClass';


const PostComp = () => {

  const [toogle, setToogle] = useState('');

  const [err, setErr] = useState('');
  const [mess, setMess] = useState('');

  const [compLab, setCompLab] = useState([{
    comptype: '',
    resno: '',
    eqtype: '',
    eqno: '',
    abeq: '',
    userID: '',
    status: ''
  }]);


  const [compClass, setCompClass] = useState([{
    comptype: '',
    resno: '',
    eqtype: '',
    eqno: '',
    abeq: '',
    userID: '',
    status: ''
  }]);

  const [errors, setErrors] = useState({});

  const [finalValue, setFinalValue] = useState([]);
  const [labValues, setLabValues] = useState([{}]);

  const [finalValueClass, setFinalValueClass] = useState([]);
  const [classValues, setClassValues] = useState([{}]);

  const [fac, setFac] = useState([]);

  const setLab = (rsno) => {
    Axios.get(`/readlabbyid/${rsno}`, {
    }).then((response) => {
      setLabValues(response.data)
      console.log(response.data);
    })
      .catch(() => {
        console.log("error");
      });
  };

  const setLabFac = () => {
    let fid;
    labValues.map((val) => {
      fid = val.Incharge;
    });

    Axios.get(`/readfacbyid/${fid}`, {
    }).then((response) => {
      setFac(response.data)
      console.log(response.data);
    })
      .catch(() => {
        console.log("error");
      });
  };

  const setClass = (rsno) => {

    Axios.get(`/readclassbyid/${rsno}`, {
    }).then((response) => {
      setClassValues(response.data)
      console.log(response.data);
    })
      .catch(() => {
        console.log("error");
      });



  };

  const setClassFac = () => {
    let fid;
    classValues.map((val) => {
      fid = val.Inchargeclass;
    });

    Axios.get(`/readfacbyid/${fid}`, {
    }).then((response) => {
      setFac(response.data)
      console.log(response.data);
    })
      .catch(() => {
        console.log("error");
      });
  };

  useEffect(() => {
    Axios.get("/readlab", {
    }).then((response) => {
      setFinalValue(response.data)
    })
      .catch(() => {
        console.log("error");
      });
  }, []);

  useEffect(() => {

    Axios.get("/readclass", {
    }).then((response) => {
      setFinalValueClass(response.data)
    })
      .catch(() => {
        console.log("error");
      });

  }, []);

  const changeHandleDescr = (e) => {
    setCompLab({
      ...compLab, [e.target.name]: e.target.value
    });
    setCompClass({
      ...compClass, [e.target.name]: e.target.value
    });
  };

  const changeHandle = (e) => {
    setCompLab({
      ...compLab, [e.target.name]: e.target.value.replace(/\D/g, '')
    });
    setCompClass({
      ...compClass, [e.target.name]: e.target.value.replace(/\D/g, '')
    });
  };


  let data = [];
  data = JSON.parse(localStorage.getItem("userInfo"));
  compLab.userID = data[2];
  compClass.userID = data[2];

  let f = 0;
  const postCompLab = async (e) => {

    e.preventDefault();
    setErrors(Valdt(compLab));
    // if (compLab.eqtype === 'Ethernet') {
    //   const { resno, eqtype, abeq, eqno, userID } = compLab;

    //   let eid;
    //   fac.map((val) => {
    //     eid = val.email;
    //   });

    //   try {
    //     const config = {
    //       headers: {
    //         "Content-Type": "application/json"
    //       }
    //     };
    //     const { data } = await Axios.post(
    //       "/addcomp",
    //       {
    //         comptype: 'lab',
    //         resno,
    //         eqtype,
    //         abeq,
    //         eqno,
    //         status: 'pending',
    //         userID,
    //         eid,
    //       },
    //       config
    //     );
    //     setErr('');
    //     setMess('Add Complain successfully');
    //     setCompLab({ resno: '', eqtype: '', eqno: '', abeq: '' });
    //     console.log(data);
    //   } catch (errors) {
    //     console.log("Error");
    //     setMess('');
    //     setErr('Invalid Information');
    //   }
    // } else {
      labValues.map((val) => {
        if (!compLab.eqno) {
          setErrors({ ...errors, eqno: "This field is required." });
          f = 1;
        }
        else if (compLab.eqtype === 'Pc') {
          if (compLab.eqno > val.pcno) {
            setErrors({ ...errors, eqno: "plz, Enter number limit" });
            f = 1;
          }
        }
        else if (compLab.eqtype === 'Ac') {
          if (compLab.eqno > val.acno) {
            setErrors({ ...errors, eqno: "plz, Enter number limit" });
            f = 1;
          }
        }
        else if (compLab.eqtype === 'Chair') {
          if (compLab.eqno > val.chrno) {
            setErrors({ ...errors, eqno: "plz, Enter number limit" });
            f = 1;
          }
        }
        else if (compLab.eqtype === 'Fan') {
          if (compLab.eqno > val.fanno) {
            setErrors({ ...errors, eqno: "plz, Enter number limit" });
            f = 1;
          }
        }
        else if (compLab.eqtype === 'Tubelight') {
          if (compLab.eqno > val.lightno) {
            setErrors({ ...errors, eqno: "plz, Enter number limit" });
            f = 1;
          }
        }
        else if (compLab.eqtype === 'Projector') {
          if (compLab.eqno > val.projno) {
            setErrors({ ...errors, eqno: "plz, Enter number limit" });
            f = 1;
          }
        }
        else if (compLab.eqtype === 'Ethernet') {
          if (compLab.eqno > val.pcno) {
            setErrors({ ...errors, eqno: "plz, Enter number limit" });
            f = 1;
          }
        }
      })
      if (f === 0) {
        const { resno, eqtype, abeq, eqno, userID } = compLab;

        let eid;
        fac.map((val) => {
          eid = val.email;
        });

        try {
          const config = {
            headers: {
              "Content-Type": "application/json"
            }
          };
          const { data } = await Axios.post(
            "/addcomp",
            {
              comptype: 'lab',
              resno,
              eqtype,
              abeq,
              eqno,
              status: 'pending',
              userID,
              eid,
            },
            config
          );
          setErr('');
          setMess('Add Complain successfully');
          setCompLab({ resno: '', eqtype: '', eqno: '', abeq: '' });
          console.log(data);
        } catch (errors) {
          console.log("Error");
          setMess('');
          setErr('Invalid Information');
        }
      //}
    }

  };

  let fc = 0;
  const postCompClassroom = async (e) => {
    e.preventDefault();
    setErrors(ValdtClass(compClass));
    if (compClass.eqtype === 'Projector') {
      const { resno, eqtype, abeq, eqno, userID } = compClass;

      let eid;
      fac.map((val) => {
        eid = val.email;
      });

      try {
        const config = {
          headers: {
            "Content-Type": "application/json"
          }
        };
        const { data } = await Axios.post(
          "/addcomp",
          {
            comptype: 'classroom',
            resno,
            eqtype,
            abeq,
            eqno,
            status: 'pending',
            userID,
            eid,
          },
          config
        );
        setErr('');
        setMess('Add Complain successfully');
        setCompClass({ resno: '', eqtype: '', eqno: '', abeq: '' });
        console.log(data);
      } catch (errors) {
        console.log("Error");
        setMess('');
        setErr('Invalid Information');
      }
    } else {
      classValues.map((val) => {
        if (!compClass.eqno) {
          setErrors({ ...errors, eqno: "This field is required." });
          fc = 1;
        }
        else if (compClass.eqtype === 'Bench') {
          if (compClass.eqno > val.benchno) {
            setErrors({ ...errors, eqno: "plz, Enter number limit" });
            fc = 1;
          }
        }
        else if (compClass.eqtype === 'Fan') {
          if (compClass.eqno > val.fannno) {
            setErrors({ ...errors, eqno: "plz, Enter number limit" });
            fc = 1;
          }
        }
        else if (compClass.eqtype === 'Tubelight') {
          if (compClass.eqno > val.fannno) {
            setErrors({ ...errors, eqno: "plz, Enter number limit" });
            fc = 1;
          }
        }
      })

      if (fc === 0) {
        const { resno, eqtype, abeq, eqno, userID } = compClass;

        let eid;
        fac.map((val) => {
          eid = val.email;
        });

        try {
          const config = {
            headers: {
              "Content-Type": "application/json"
            }
          };
          const { data } = await Axios.post(
            "/addcomp",
            {
              comptype: 'classroom',
              resno,
              eqtype,
              abeq,
              eqno,
              status: 'pending',
              userID,
              eid,
            },
            config
          );
          setErr('');
          setMess('Add Complain successfully');
          setCompClass({ resno: '', eqtype: '', eqno: '', abeq: '' });
          console.log(data);
        } catch (errors) {
          console.log("Error");
          setMess('');
          setErr('Invalid Information');
        }
      }
    }
  };


  return (
    <>
      <Sidebar />
      <div className='addinfocontainer'>
        {mess && <div id='errinfo' className="alert alert-success" role="alert">{mess}</div>}
        {err && <div id='errinfo' className="alert alert-warning" role="alert">{err}</div>}
        <div className='addinfosubcontainer'>
          <div className='selectresouece'>
            <label style={{ fontSize: "16px" }}>Select Resource</label><br />
            <label className='button'>
              LAB
              <input type="radio"
                className="container"
                value="lab"
                name="res"
                onClick={() => setToogle('lab')} />
            </label>
            <label className='button'>
              Classroom
              <input type="radio"
                className="container"
                value="classroom"
                name="res"
                onClick={() => setToogle('classroom')} />
            </label>
          </div>
          <div className='radiobutton'>
            {(() => {
              if (toogle === 'lab') {
                return (
                  <>
                    <div>
                      <h2 className='title'>ABOUT LAB</h2>
                    </div>
                    <form method='POST'>
                      <div className='resno'>
                        <label htmlFor="resno">Lab no.</label>
                        <Dropdown value={compLab.resno} name='eqtype'>
                          <Dropdown.Toggle className='ddt' variant="secondary" id="dropdown-basic">
                            Lab No : {compLab.resno}
                          </Dropdown.Toggle>
                          <Dropdown.Menu className='ddm'>

                            {finalValue.map((val) => {
                              return (
                                <Dropdown.Item className='ddi' onClick={() => { setCompLab({ ...compLab, resno: val.labno }); setLab(val.labno); }}>{val.labno}</Dropdown.Item>
                              );
                            })}

                          </Dropdown.Menu>
                        </Dropdown>
                        {errors.resno && <p className='error'>{errors.resno}</p>}
                      </div>

                      <div className='eqtype'>
                        <label htmlFor="eqtype">Select Equipment</label>
                        <Dropdown value={compLab.eqtype} name='eqtype'>
                          <Dropdown.Toggle className='ddt' variant="secondary" id="dropdown-basic">
                            Equipment : {compLab.eqtype}
                          </Dropdown.Toggle>
                          <Dropdown.Menu className='ddm'>
                            <Dropdown.Item className='ddi' onClick={() => { setCompLab({ ...compLab, eqtype: 'Pc' }); setLabFac(); }}>PC</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => { setCompLab({ ...compLab, eqtype: 'Ac' }); setLabFac(); }}>AC</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => { setCompLab({ ...compLab, eqtype: 'Chair' }); setLabFac(); }}>Chair</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => { setCompLab({ ...compLab, eqtype: 'Fan' }); setLabFac(); }}>Fan</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => { setCompLab({ ...compLab, eqtype: 'TubeLight' }); setLabFac(); }}>TubeLight</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => { setCompLab({ ...compLab, eqtype: 'Ethernet' }); setLabFac(); }}>Etherner</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => { setCompLab({ ...compLab, eqtype: 'Projector' }); setLabFac(); }}>Projector</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        {errors.eqtype && <p className='error'>{errors.eqtype}</p>}
                      </div>

                      <div className='fanno'>
                        <label htmlFor="eqno">Equipment Number</label>
                        <input type="text" name="eqno"
                          value={compLab.eqno}
                          onChange={changeHandle}
                          className='input'
                          placeholder='Enter digits only...'
                          autoComplete='off'
                        />
                        {errors.eqno && <p className='error'>{errors.eqno}</p>}
                      </div>

                      <div className='abeq'>
                        <label htmlFor="abeq">Description</label>
                        <textarea name="abeq"
                          value={compLab.abeq}
                          onChange={changeHandleDescr}
                          className='inputtxt'
                          placeholder='Enter complain...'
                          autoComplete='off'
                        />
                        {errors.abeq && <p className='error'>{errors.abeq}</p>}
                      </div>
                      <div>
                        <button type='submit' onClick={postCompLab} className="submit">Add</button>
                      </div>
                    </form>

                  </>
                )
              }
              else if (toogle === 'classroom') {

                return (
                  <>
                    <div>
                      <h2 className='title'>ABOUT CLASSROOM</h2>
                    </div>
                    <form method='POST'>
                      <div className='resno'>
                        <label htmlFor="resno">Classroom no.</label>
                        <Dropdown value={compClass.resno} name='resno'>
                          <Dropdown.Toggle className='ddt' variant="secondary" id="dropdown-basic">
                            Class No : {compClass.resno}
                          </Dropdown.Toggle>
                          <Dropdown.Menu className='ddm'>

                            {finalValueClass.map((val) => {
                              return (
                                <Dropdown.Item className='ddi' onClick={() => { setCompClass({ ...compClass, resno: val.classno }); setClass(val.classno); }}>{val.classno}</Dropdown.Item>
                              );
                            })}

                          </Dropdown.Menu>
                        </Dropdown>
                        {errors.resno && <p className='error'>{errors.resno}</p>}
                      </div>

                      <div className='eqtype'>
                        <label htmlFor="eqtype">Select Equipments</label>
                        <Dropdown value={compClass.eqtype} name='eqtype'>
                          <Dropdown.Toggle className='ddt' variant="secondary" id="dropdown-basic">
                            Equipment : {compClass.eqtype}
                          </Dropdown.Toggle>
                          <Dropdown.Menu className='ddm'>
                            <Dropdown.Item className='ddi' onClick={() => { setCompClass({ ...compClass, eqtype: 'Bench' }); setClassFac(); }}>Bench</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => { setCompClass({ ...compClass, eqtype: 'Fan' }); setClassFac(); }}>Fan</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => { setCompClass({ ...compClass, eqtype: 'TubeLight' }); setClassFac(); }}>TubeLight</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => { setCompClass({ ...compClass, eqtype: 'Projector' }); setClassFac(); }}>Projector</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        {errors.eqtype && <p className='error'>{errors.eqtype}</p>}
                      </div>

                      {compClass.eqtype !== 'Projector' &&

                        <div className='fanno'>
                          <label htmlFor="eqno">Equipment Number</label>
                          <input type="text" name="eqno"
                            value={compClass.eqno}
                            onChange={changeHandle}
                            className='input'
                            placeholder='Enter digits only...'
                            autoComplete='off'
                          />
                          {errors.eqno && <p className='error'>{errors.eqno}</p>}
                        </div>

                      }

                      <div className='abeq'>
                        <label htmlFor="abeq">Description</label>
                        <textarea name="abeq"
                          value={compClass.abeq}
                          onChange={changeHandleDescr}
                          className='inputtxt'
                          placeholder='Enter complain...'
                          autoComplete='off'
                        />
                        {errors.abeq && <p className='error'>{errors.abeq}</p>}
                      </div>
                      <div>
                        <button type='submit' name='class' onClick={postCompClassroom} className="submit">Add</button>
                      </div>
                    </form>
                  </>
                )
              }
            })()}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostComp;
