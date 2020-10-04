import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { login } from "../../actions/userActions";
import loginImg from "../../assets/login.svg";

const Login = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, token } = userLogin;

  useEffect(() => {
    if (token) {
      history.push("/transactions");
    }
  }, [history, token]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <div className="base-container">
      <div className="header">Login</div>
      {error && <h1>{error}</h1>}
      {loading && <h1>Loading...</h1>}
      <div className="content">
        <div className="image">
          <img src={loginImg} alt="login" />
        </div>
        <Form onSubmit={submitHandler} className="form">
          <Form.Group controlId="username" className="form-group">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="username"
              placeholder="username"
            />
          </Form.Group>
          <Form.Group controlId="password" className="form-group">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <div className="footer">
            <Button type="submit" variant="default" className="btn">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
