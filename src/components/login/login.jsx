import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { login } from "../../actions/userActions";
import loginImg from "../../assets/login.svg";

const MySwal = withReactContent(Swal);

const Login = ({ history }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, token } = userLogin;

  useEffect(() => {
    if (token) {
      history.push("/transactions");
    }
  }, [history, token]);

  useEffect(() => {
    if (error && error !== undefined) {
      MySwal.fire({
        icon: "error",
        title: error,
      }).then((result) => {
        if (result.isConfirmed) {
          setName("");
          setPassword("");
        }
      });
    }
  }, [error]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(name, password));
  };

  return (
    <div className="base-container">
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} alt="login" />
        </div>
        <Form onSubmit={submitHandler} className="form">
          <Form.Group controlId="name" className="form-group">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              placeholder="name"
            />
          </Form.Group>
          <Form.Group controlId="password" className="form-group">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              placeholder="password"
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
