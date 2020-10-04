import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { register } from "../../actions/userActions";
import loginImg from "../../assets/login.svg";

const MySwal = withReactContent(Swal);

const Register = ({ setLogginActive }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const openTransactionPage = () => {
  // this.props.history.push("/transactions");
  // };

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, status } = userRegister;

  useEffect(() => {
    if (status === "success") {
      MySwal.fire({
        title: "Sukses",
        icon: "success",
        text: "Register berhasil. Silakan Login",
      }).then((result) => {
        if (result.isConfirmed) {
          setLogginActive();
        }
      });
    }
  }, [status, setLogginActive]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(username, password));
  };

  return (
    <div className="base-container">
      <div className="header">Register</div>
      {error && <h1>{error}</h1>}
      {loading && <h1>Loading...</h1>}
      <div className="content">
        <div className="image">
          <img src={loginImg} alt="login" />
        </div>
        <Form className="form" onSubmit={submitHandler}>
          <Form.Group controlId="username" className="form-group">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="name"
              placeholder="name"
            />
          </Form.Group>
          <Form.Group controlId="password" className="form-group">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              placeholder="password"
            />
          </Form.Group>
          <div className="footer">
            <Button type="submit" variant="default" className="btn">
              {/* <Link to="/transactions">Login</Link> */} Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

// function login(e) {
//   e.preventDefault();
//   let request = {
//     name: document.getElementById("name").value,
//     password: document.getElementById("password").value,
//   };
//   axios
//     .post("localhost:8080/api/v1/account/add", request)
//     .then((resp) => {
//       alert(resp.data.message);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

export default Register;
