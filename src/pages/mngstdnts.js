import React, {useState} from "react";
import Axios from "axios";
import Sidebar from "../components/Sidebar";
//import { useNavigate } from "react-router-dom";


class MnSt extends React.Component {

  // const [err, setErr] = useState('');
  // const [mess, setMess] = useState('');

  constructor() {
    super();
    this.state = {
      selectedFile: "",
      err: '',
      mess: '',
      //navigate: useNavigate()
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      selectedFile: event.target.files[0],
    });
  }

  submit() {

    const data = new FormData();
    console.log(this.state.selectedFile.name);
    data.append("stdata", this.state.selectedFile);
    console.warn(this.state.selectedFile);
    let url = "/addst";

    try {
      Axios.post(url, data, {
      }).then((res) => {
        console.warn(res);
        this.state.err = '';
        this.state.mess = 'Register Students successfully';
        //this.navigate('/aview');
      });
    } catch {
      this.state.mess = '';
      this.state.err = 'Invalid Information';
    }

  }

  render() {
    return (
      <>
        <Sidebar />
        <div className="ucontainer">
          {this.state.mess !== '' && <div id='errinfo' className="alert alert-success" role="alert">{this.state.mess}</div>}
          {this.state.err !== '' && <div id='errinfo' className="alert alert-warning" role="alert">{this.state.err}</div>}
          <div className="subcontainer">
            <h3 className="title">Register Students</h3>
            <div className="uid">
              <label
                htmlFor="stdata"
                style={{ fontSize: "large", marginBottom: "10px" }}
              >
                Select File :
              </label>
              <input
                type="file"
                className="input1"
                name="stdata"
                onChange={this.handleInputChange}
              />
            </div>

            <div>
              <button
                type="submit"
                className="submit"
                onClick={() => this.submit()}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MnSt;