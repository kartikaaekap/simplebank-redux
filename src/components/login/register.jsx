import React from "react";
import loginImg from "../../assets/login.svg";
import axios from 'axios';
import { withRouter } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.openTransactionPage = this.openTransactionPage.bind(this)
  }

  openTransactionPage() {
    this.props.history.push('/transactions')
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="login" />
          </div>
          <div className="form" onSubmit={(e) => login(e)}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="name" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
            <div className="footer">
              <button type="button" className="btn" onClick={this.openTransactionPage}>
                {/* <Link to="/transactions">Login</Link> */} Register
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function login(e) {
  e.preventDefault();
  let request = {
    name : document.getElementById('name').value,
    password : document.getElementById('password').value
  }
  axios.post('localhost:8080/api/v1/account/add', request)
  .then( resp => {
    alert(resp.data.message);
  })
  .catch( err => {
    console.log(err);
  })
}

export default withRouter(Register);