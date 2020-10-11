import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { register } from "../../actions/userActions";
import loginImg from "../../assets/login.svg";
import { USER_REGISTER_STATUS_RESET } from "../../constants/userConstants";

const MySwal = withReactContent(Swal);

const Register = ({ setLogginActive }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, status } = userRegister;

  useEffect(() => {
    if (status === "success") {
      MySwal.fire({
        title: "Sukses",
        icon: "success",
        text: "Register berhasil. Silakan Login",
      }).then((result) => {
        if (result.isConfirmed) {
          setLogginActive();
          dispatch({ type: USER_REGISTER_STATUS_RESET });
        }
      });
    }
  }, [status, setLogginActive, dispatch]);

  useEffect(() => {
    if (error !== undefined) {
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
    dispatch(register(name, password));
  };

  return (
    <div className="base-container">
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} alt="login" />
        </div>
        <Form className="form" onSubmit={submitHandler}>
          <Form.Group controlId="username" className="form-group">
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
              Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
