import React from 'react'


const About = () => {

    return (
      <>
        <section className="background firstsection">
          <div className="box-main">
            <div className="firstHalf">
              <p className="text-big">About Us</p>
              <p className="text-small">
                This system is Devloped by Raj Joshi and Ketan Khatwani.
              </p>
              <br />
              <p className="text-small">
                Both are students of I.T Department at Dharmsinh Desai University.
              </p>
            </div>
          </div>
        </section>
        <section className="service">
          <h1 className="h-primary center" style={{ marginTop: '30px' }}>
            Our Team
          </h1>
          <div className="detail">
            <div className="box center">
              <p className="text-big">
                Raj Joshi
              </p>
              <p>Devloper</p>
              <p>He is currently studying I.T Department at D.D. University.</p>
              <div style={{ display: 'inline-flex' }}>
                <p style={{ fontWeight: 'bold' }}>Email :</p>&nbsp;
                <p>joshiraj282002@gmail.com</p>
              </div>
              <div style={{ display: 'inline-flex' }}>
                <p style={{ fontWeight: 'bold' }}>Contact :</p>&nbsp;
                <p>7046178405</p>
              </div>
            </div>
            <div className="box center">
              <p className="text-big">
                Ketan Khatwani
              </p>
              <p>Devloper</p>
              <p>He is currently studying I.T Department at D.D. University.</p>
              <div style={{ display: 'inline-flex' }}>
                <p style={{ fontWeight: 'bold' }}>Email :</p>&nbsp;
                <p>ketankhatwani@gmail.com</p>
              </div>
              <div style={{ display: 'inline-flex' }}>
                <p style={{ fontWeight: 'bold' }}>Contact :</p>&nbsp;
                <p>9173998127</p>
              </div>
            </div>
          </div>
        </section>
      </>
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