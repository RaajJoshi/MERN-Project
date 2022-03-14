import React, { useState, useEffect } from 'react'
import Sidebar from '../infaccomponents/Sidebar';
import { Dropdown } from 'react-bootstrap';
import Axios from 'axios';
import Valdt from '../userpages/validationLab';
import ValdtClass from '../userpages/validationClass';


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
    classno: '',
    eqtype: '',
    abeq: '',
    userID: '',
    status: ''
  }]);

  const [errors, setErrors] = useState({});

  const [finalValue, setFinalValue] = useState([]);
  const [labValues, setLabValues] = useState([{}]);

  const [finalValueClass, setFinalValueClass] = useState([]);

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
  };


  let data = [];
  data = JSON.parse(localStorage.getItem("facInfo"));
  compLab.userID = data[2];
  compClass.userID = data[2];

  let f = 0;
  const postCompLab = async (e) => {
    
    e.preventDefault();
    setErrors(Valdt(compLab));
    if(compLab.eqtype === 'Ethernet'){
      const { resno, eqtype, abeq, eqno, userID } = compLab;

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
    }else{
    labValues.map((val) => {
      if(!compLab.eqno){
        setErrors({ ...errors, eqno: "This field is required." });
        f = 1;
      }
      else if (compLab.eqno > val.pcno) {
        setErrors({ ...errors, eqno: "plz, Enter number limit" });
        f = 1;
      }
    })
    if (f === 0) {
      const { resno, eqtype, abeq, eqno, userID } = compLab;

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
    }
  }

  };


  const postCompClassroom = async (e) => {
    e.preventDefault();
    setErrors(ValdtClass(compClass));
    const { resno, eqtype, abeq, userID } = compClass;
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
          status: 'pending',
          userID,
        },
        config
      );
      setErr('');
      setMess('Add Complain successfully');
      setCompClass({ resno: '', eqtype: '', abeq: '' });
      console.log(data);
    } catch (errors) {
      console.log("Error");
      setMess('');
      setErr('Invalid Information');
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
                            Dropdown Button
                          </Dropdown.Toggle>
                          <Dropdown.Menu className='ddm'>
                            <Dropdown.Item className='ddi' onClick={() => setCompLab({ ...compLab, eqtype: 'Pc' })}>PC</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => setCompLab({ ...compLab, eqtype: 'Ac' })}>AC</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => setCompLab({ ...compLab, eqtype: 'Chair' })}>Chair</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => setCompLab({ ...compLab, eqtype: 'Fan' })}>Fan</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => setCompLab({ ...compLab, eqtype: 'TubeLight' })}>TubeLight</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => setCompLab({ ...compLab, eqtype: 'Ethernet' })}>Etherner</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => setCompLab({ ...compLab, eqtype: 'Projector' })}>Projector</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        {errors.eqtype && <p className='error'>{errors.eqtype}</p>}
                      </div>
                      
                        {(()=>{if (compLab.eqtype !== 'Ethernet') {
                          return (
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
                          );
                        }})()}
                      

                      <div className='abeq'>
                        <label htmlFor="abeq">Descripation</label>
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
                            Dropdown Button
                          </Dropdown.Toggle>
                          <Dropdown.Menu className='ddm'>

                            {finalValueClass.map((val) => {
                              return (
                                <Dropdown.Item className='ddi' onClick={() => setCompClass({ ...compClass, resno: val.classno })}>{val.classno}</Dropdown.Item>
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
                            Dropdown Button
                          </Dropdown.Toggle>
                          <Dropdown.Menu className='ddm'>
                            <Dropdown.Item className='ddi' onClick={() => setCompClass({ ...compClass, eqtype: 'Pc' })}>PC</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => setCompClass({ ...compClass, eqtype: 'Bench' })}>Bench</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => setCompClass({ ...compClass, eqtype: 'Fan' })}>Fan</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => setCompClass({ ...compClass, eqtype: 'TubeLight' })}>TubeLight</Dropdown.Item>
                            <Dropdown.Item className='ddi' onClick={() => setCompClass({ ...compClass, eqtype: 'Projector' })}>Projector</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        {errors.eqtype && <p className='error'>{errors.eqtype}</p>}
                      </div>

                      <div className='abeq'>
                        <label htmlFor="abeq">Descripation</label>
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
