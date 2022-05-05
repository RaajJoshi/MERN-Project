import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Valdt from './valaddinfo';
import ValdtClass from './validationinfoclass';
import Sidebar from '../components/Sidebar';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addinfo = () => {

    const navigate = useNavigate();

    const [toogle, setToogle] = useState('');

    const [err, setErr] = useState('');
    const [mess, setMess] = useState('');

    const [valuesLab, setValuesLab] = useState([{
        labno: '',
        pcno: '',
        chrno: '',
        acno: '',
        fanno: '',
        lightno: '',
        ethr: '',
        projc: '',
        projno: '',
        projnm1: '',
        projnm2: '',
        Incharge: ''
    }]);


    const [valuesClass, setValuesClass] = useState([{
        classno: '',
        benchno: '',
        fannno: '',
        tubelightno: '',
        projec: '',
        Inchargeclass: ''
    }]);

    const [errors, setErrors] = useState({});


    const changeHandle = (e) => {
        setValuesLab({
            ...valuesLab, [e.target.name]: e.target.value.replace(/\D/g, '')
        });
        setValuesClass({
            ...valuesClass, [e.target.name]: e.target.value.replace(/\D/g, '')
        });
    };

    const changeHandleRadio = (e) => {
        setValuesLab({
            ...valuesLab, [e.target.name]: e.target.value
        });
        setValuesClass({
            ...valuesClass, [e.target.name]: e.target.value
        });
    };


    const postDataLab = async (e) => {
        e.preventDefault();
        setErrors(Valdt(valuesLab));
        if (valuesLab.projc === 'no') {
            const { labno, pcno, chrno, acno, fanno, lightno, ethr, projc, Incharge } = valuesLab;
            try {
                const config = {
                    headers: {
                        "Content-Type": "application/json"
                    }
                };
                const { data } = await Axios.post(
                    "/addreso",
                    {
                        labno,
                        pcno,
                        chrno,
                        acno,
                        fanno,
                        lightno,
                        ethr,
                        projc,
                        Incharge,
                    },
                    config
                );
                setErr('');
                setMess('Add LAB successfully');
                setValuesLab({ labno: '', pcno: '', chrno: '', acno: '', fanno: '', lightno: '', ethr: '', projc: '', Incharge: '' });
                console.log(data);
                navigate('/aview');
            } catch (errors) {
                console.log("Error");
                setMess('');
                setErr('Invalid Information');
            }
        } else {
            if (!valuesLab.projno) {
                setErrors({ ...errors, projno: "Plz, select option." });
            }
            if (valuesLab.projno === '1') {
                if (!valuesLab.projnm1) {
                    setErrors({ ...errors, projnm1: "This field is required." });
                } else {
                    const { labno, pcno, chrno, acno, fanno, lightno, ethr, projc, projno, projnm1, Incharge } = valuesLab;
                    try {
                        const config = {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        };
                        const { data } = await Axios.post(
                            "/addreso",
                            {
                                labno,
                                pcno,
                                chrno,
                                acno,
                                fanno,
                                lightno,
                                ethr,
                                projc,
                                projno,
                                projnm1,
                                Incharge,
                            },
                            config
                        );
                        setErr('');
                        setMess('Add LAB successfully');
                        setValuesLab({ labno: '', pcno: '', chrno: '', acno: '', fanno: '', lightno: '', ethr: '', projc: '', projno: '', projnm1: '', Incharge: '' });
                        console.log(data);
                        navigate('/aview');
                    } catch (errors) {
                        console.log("Error");
                        setMess('');
                        setErr('Invalid Information');
                    }
                }
            }
            else if (valuesLab.projno === '2') {
                if (!valuesLab.projnm1) {
                    setErrors({ ...errors, projnm1: "This field is required." });
                } else {
                    if (!valuesLab.projnm2) {
                        setErrors({ ...errors, projnm2: "This field is required." });
                    } else {
                        const { labno, pcno, chrno, acno, fanno, lightno, ethr, projc, projno, projnm1, projnm2, Incharge } = valuesLab;
                        try {
                            const config = {
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            };
                            const { data } = await Axios.post(
                                "/addreso",
                                {
                                    labno,
                                    pcno,
                                    chrno,
                                    acno,
                                    fanno,
                                    lightno,
                                    ethr,
                                    projc,
                                    projno,
                                    projnm1,
                                    projnm2,
                                    Incharge,
                                },
                                config
                            );
                            setErr('');
                            setMess('Add LAB successfully');
                            setValuesLab({ labno: '', pcno: '', chrno: '', acno: '', fanno: '', lightno: '', ethr: '', projc: '', projno: '', projnm1: '', projnm2: '', Incharge: '' });
                            console.log(data);
                            navigate('/aview');
                        } catch (errors) {
                            console.log("Error");
                            setMess('');
                            setErr('Invalid Information');
                        }
                    }
                }
            }
        }
    };


    const postDataClassroom = async (e) => {
        e.preventDefault();
        setErrors(ValdtClass(valuesClass));
        const { classno, benchno, fannno, tubelightno, projec, Inchargeclass } = valuesClass;
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };
            const { data } = await Axios.post(
                "/addresoclass",
                {
                    classno,
                    benchno,
                    fannno,
                    tubelightno,
                    projec,
                    Inchargeclass,
                },
                config
            );
            setErr('');
            setMess('Add Classroom successfully');
            setValuesClass({ classno: '', benchno: '', fannno: '', tubelightno: '', projec: '', Inchargeclass: '' });
            console.log(data);
            navigate('/aview');
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
                {err && <div id='errinfo' className="alert alert-warning" role="alert">{err}</div>}
                {mess && <div id='errinfo' className="alert alert-success" role="alert">{mess}</div>}
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
                                            <h2 className='title'>NEW LAB</h2>
                                        </div>
                                        <form method='POST'>
                                            <div className='labno'>
                                                <label htmlFor="labno">Lab no.</label>
                                                <input type="text" name="labno"
                                                    value={valuesLab.labno}
                                                    onChange={changeHandle}
                                                    className='input'
                                                    placeholder='Enter digits only...'
                                                    autoComplete='off'
                                                />
                                                {errors.labno && <p className='error'>{errors.labno}</p>}
                                            </div>
                                            <div className='pcno'>
                                                <label htmlFor="pcno">Total PCs</label>
                                                <input type="text" name="pcno"
                                                    value={valuesLab.pcno}
                                                    onChange={changeHandle}
                                                    className='input'
                                                    placeholder='Enter digits only...'
                                                    autoComplete='off'
                                                />
                                                {errors.pcno && <p className='error'>{errors.pcno}</p>}
                                            </div>
                                            <div className='chrno'>
                                                <label htmlFor="chrno">Total Chairs</label>
                                                <input type="text" name="chrno"
                                                    value={valuesLab.chrno}
                                                    onChange={changeHandle}
                                                    className='input'
                                                    placeholder='Enter digits only...'
                                                    autoComplete='off'
                                                />
                                                {errors.chrno && <p className='error'>{errors.chrno}</p>}
                                            </div>
                                            <div className='acno'>
                                                <label htmlFor="acno">Total ACs</label>
                                                <input type="text" name="acno"
                                                    value={valuesLab.acno}
                                                    onChange={changeHandle}
                                                    className='input'
                                                    placeholder='Enter digits only...'
                                                    autoComplete='off'
                                                />
                                                {errors.acno && <p className='error'>{errors.acno}</p>}
                                            </div>
                                            <div className='fanno'>
                                                <label htmlFor="fanno">Total Fans</label>
                                                <input type="text" name="fanno"
                                                    value={valuesLab.fanno}
                                                    onChange={changeHandle}
                                                    className='input'
                                                    placeholder='Enter digits only...'
                                                    autoComplete='off'
                                                />
                                                {errors.fanno && <p className='error'>{errors.fanno}</p>}
                                            </div>
                                            <div className='lightno'>
                                                <label htmlFor="lightno">Total Tubelights</label>
                                                <input type="text" name="lightno"
                                                    value={valuesLab.lightno}
                                                    onChange={changeHandle}
                                                    className='input'
                                                    placeholder='Enter digits only...'
                                                    autoComplete='off'
                                                />
                                                {errors.lightno && <p className='error'>{errors.lightno}</p>}
                                            </div>
                                            <div className='radiobutton'>
                                                <label>Is Ethernet available??</label><br />
                                                <label className='button'>
                                                    Yes
                                                    <input type="radio"
                                                        className="container"
                                                        value="yes"
                                                        name="ethr"
                                                        onClick={changeHandleRadio} />
                                                </label>
                                                <label className='button'>
                                                    No
                                                    <input type="radio"
                                                        className="container"
                                                        value="no"
                                                        name="ethr"
                                                        onClick={changeHandleRadio} />
                                                </label>
                                                {errors.ethr && <p className='error'>{errors.ethr}</p>}
                                            </div>
                                            <div className='radiobutton'>
                                                <label>Is Projector available??</label><br />
                                                <label className='button'>
                                                    Yes
                                                    <input type="radio"
                                                        className="container"
                                                        value="yes"
                                                        name="projc"
                                                        onClick={changeHandleRadio} />
                                                </label>
                                                <label className='button'>
                                                    No
                                                    <input type="radio"
                                                        className="container"
                                                        value="no"
                                                        name="projc"
                                                        onClick={changeHandleRadio} />
                                                </label>
                                                {errors.projc && <p className='error'>{errors.projc}</p>}
                                            </div>
                                            {(() => {
                                                if (valuesLab.projc === 'yes') {
                                                    return (
                                                        <div className='fanno'>
                                                            <label htmlFor="projno">Number of Projector</label>
                                                            <Dropdown value={valuesLab.projno} name='projno'>
                                                                <Dropdown.Toggle className='ddt' variant="secondary" id="dropdown-basic">
                                                                    Projectors : {valuesLab.projno}
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu className='ddm'>
                                                                    <Dropdown.Item className='ddi' onClick={() => setValuesLab({ ...valuesLab, projno: '1' })}>1</Dropdown.Item>
                                                                    <Dropdown.Item className='ddi' onClick={() => setValuesLab({ ...valuesLab, projno: '2' })}>2</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            {errors.projno && <p className='error'>{errors.projno}</p>}
                                                        </div>                                                      
                                                    );
                                                }
                                            })()}
                                            {(() => {
                                                if (valuesLab.projc === 'yes' && valuesLab.projno === '1') {
                                                    return (
                                                        <div className='fanno'>
                                                            <label htmlFor="projnm1">Company Name of Projector 1</label>
                                                            <input type="text" name="projnm1"
                                                                value={valuesLab.projnm1}
                                                                onChange={changeHandleRadio}
                                                                className='input'
                                                                autoComplete='off'
                                                            />
                                                            {errors.projnm1 && <p className='error'>{errors.projnm1}</p>}
                                                        </div>
                                                    );
                                                }
                                                else if (valuesLab.projc === 'yes' && valuesLab.projno === '2') {
                                                    return (
                                                        <>
                                                            <div className='fanno'>
                                                                <label htmlFor="projnm1">Company Name of Projector 1</label>
                                                                <input type="text" name="projnm1"
                                                                    value={valuesLab.projnm1}
                                                                    onChange={changeHandleRadio}
                                                                    className='input'
                                                                    autoComplete='off'
                                                                />
                                                                {errors.projnm1 && <p className='error'>{errors.projnm1}</p>}
                                                            </div>
                                                            <div className='fanno'>
                                                                <label htmlFor="projnm2">Company Name of Projector 2</label>
                                                                <input type="text" name="projnm2"
                                                                    value={valuesLab.projnm2}
                                                                    onChange={changeHandleRadio}
                                                                    className='input'
                                                                    autoComplete='off'
                                                                />
                                                                {errors.projnm2 && <p className='error'>{errors.projnm2}</p>}
                                                            </div>
                                                        </>
                                                    );
                                                }
                                            })()}
                                            <div className='lightno'>
                                                <label htmlFor="Incharge">Faculty Incharge</label>
                                                <input type="text" name="Incharge"
                                                    value={valuesLab.Incharge}
                                                    onChange={changeHandleRadio}
                                                    className='input'
                                                    autoComplete='off'
                                                />
                                                {errors.Incharge && <p className='error'>{errors.Incharge}</p>}
                                            </div>
                                            <div>
                                                <button type='submit' onClick={postDataLab} className="submit">Add</button>
                                            </div>
                                        </form>

                                    </>
                                )
                            }
                            else if (toogle === 'classroom') {

                                return (
                                    <>
                                        <div>
                                            <h2 className='title'>NEW CLASSROOM</h2>
                                        </div>
                                        <form method='POST'>
                                            <div className='classno'>
                                                <label htmlFor="classno">Classroom no.</label>
                                                <input type="text" name="classno"
                                                    value={valuesClass.classno}
                                                    onChange={changeHandle}
                                                    className='input'
                                                    placeholder='Enter digits only...'
                                                    autoComplete='off'
                                                />
                                                {errors.classno && <p className='error'>{errors.classno}</p>}
                                            </div>
                                            <div className='benchno'>
                                                <label htmlFor="benchno">Total Benches</label>
                                                <input type="text" name="benchno"
                                                    value={valuesClass.benchno}
                                                    onChange={changeHandle}
                                                    className='input'
                                                    placeholder='Enter digits only...'
                                                    autoComplete='off'
                                                />
                                                {errors.benchno && <p className='error'>{errors.benchno}</p>}
                                            </div>
                                            <div className='fannno'>
                                                <label htmlFor="fannno">Total Fans</label>
                                                <input type="text" name="fannno"
                                                    value={valuesClass.fannno}
                                                    onChange={changeHandle}
                                                    className='input'
                                                    placeholder='Enter digits only...'
                                                    autoComplete='off'
                                                />
                                                {errors.fannno && <p className='error'>{errors.fannno}</p>}
                                            </div>
                                            <div className='tubelightno'>
                                                <label htmlFor="tubelightno">Total Tubelights</label>
                                                <input type="text" name="tubelightno"
                                                    value={valuesClass.tubelightno}
                                                    onChange={changeHandle}
                                                    className='input'
                                                    placeholder='Enter digits only...'
                                                    autoComplete='off'
                                                />
                                                {errors.tubelightno && <p className='error'>{errors.tubelightno}</p>}
                                            </div>
                                            <div className='radiobutton'>
                                                <label>Is Projector available??</label><br />
                                                <label className='button'>
                                                    Yes
                                                    <input type="radio"
                                                        className="container"
                                                        value="yes"
                                                        name="projec"
                                                        onClick={changeHandleRadio} />
                                                </label>
                                                <label className='button'>
                                                    No
                                                    <input type="radio"
                                                        className="container"
                                                        value="no"
                                                        name="projec"
                                                        onClick={changeHandleRadio} />
                                                </label>
                                                {errors.projec && <p className='error'>{errors.projec}</p>}
                                            </div>
                                            <div className='lightno'>
                                                <label htmlFor="Inchargeclass">Faculty Incharge</label>
                                                <input type="text" name="Inchargeclass"
                                                    value={valuesClass.Inchargeclass}
                                                    onChange={changeHandleRadio}
                                                    className='input'
                                                    autoComplete='off'
                                                />
                                                {errors.Inchargeclass && <p className='error'>{errors.Inchargeclass}</p>}
                                            </div>
                                            <div>
                                                <button type='submit' name='class' onClick={postDataClassroom} className="submit">Add</button>
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

export default Addinfo;
