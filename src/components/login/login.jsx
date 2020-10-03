import React, { useState } from "react";
import loginImg from "../../assets/login.svg";
import { withRouter } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState({});

  const openTransactionPage = () => {
    // this.props.history.push("/transactions");
    setLogin({
      message: "Hello",
    });
  };

  return (
    <div className="base-container">
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} alt="login" />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn" onClick={openTransactionPage}>
          {/* <Link to="/transactions">Login</Link> */} Login
        </button>
      </div>
    </div>
  );
};

export default withRouter(Login);
