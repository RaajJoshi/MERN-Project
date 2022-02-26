import React from 'react'
//import Axios from 'axios';


const About = () => {

  /*
  const [finalValue, setFinalValue] = useState([]);

  let data = [];
  data = JSON.parse(localStorage.getItem("userInfo"));
  const uid = data[2];

  useEffect(() => {

    Axios.get(`/readcompbyidcnt/${uid}`, {
    }).then((response) => {
      setFinalValue(response.data)
    })
      .catch(() => {
        console.log("error");
      });
  }, []);
*/
  return (

    /*
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
            </div>
          </div>
        );
      })}
    </div>
      */
      <h3>Contact Us</h3>
  );
}
export default About


/*
class About extends React.Component {

  handleChange = (e) => {
    const {name,value} = e.target
    this.setState({
      [name] : value
    })
  }

  configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        this.onSignInSubmit();
      },
      defaultCountry : 'IN'
    });
    
  }

  onSignInSubmit = () => {

  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSignInSubmit}>
          <div id='sign-in-button'></div>
          <input type='number' name='mobile' onChange={this.handleChange} placeholder='Enter mobile Number...' required />
          <button type='submit'>Submit</button>
        </form>

        <form>
          <input type='number' name='otp' onChange={this.handleChange} placeholder='Enter OTP...' required />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default About
*/