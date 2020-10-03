import React from "react";
import loginImg from "../../assets/login.svg";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
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
          <button type="button" className="btn" onClick={this.openTransactionPage}>
            {/* <Link to="/transactions">Login</Link> */} Login
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login)