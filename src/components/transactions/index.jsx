import React, {useState, useEffect }  from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Navbar, Container, Form, Button, Row, Col, Dropdown } from "react-bootstrap";
import logoImg from "../../assets/simplebank.png";
import userImg from "../../assets/user.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../transactions/style.scss"
import { logout } from '../../actions/userActions';

const Transactions = ({ history }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    history.push('/login');
  }
  
  return (
    <Container>
      <Tabs>
        <Navbar bg="light">
          <Navbar.Collapse>
            <Navbar.Brand>
              <img
                src={logoImg}
                width="200"
                height="100"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Dropdown id="dropdown-basic">
                <Navbar.Brand>
                  <Dropdown.Toggle className="customDropdown">
                  <img
                    src={userImg}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="user"
                  />
                  </Dropdown.Toggle>
                </Navbar.Brand>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Navbar>
        <TabList>
          <Tab>Deposit</Tab>
          <Tab>Withdraw</Tab>
          <Tab>Transfer</Tab>
          <Tab>Mutasi Rekening</Tab>
        </TabList>
        <TabPanel>
          <div className="d-flex justify-content-center my-4">
            <h1>DEPOSIT</h1>
          </div>
          <Form className="mt-3">
            <Form.Group as={Row} controlId="formPlaintextAmount">
              <Form.Label column sm="2">
                Total Amount
              </Form.Label>
              <Col sm="10">
                <Form.Control 
                  type="amount" 
                  placeholder="Input the amount" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="exampleForm.ControlTextareaDesc">
              <Form.Label column sm="2">
                Description
              </Form.Label>
              <Col sm="10">
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                />
              </Col>
            </Form.Group>
            <Col sm={{ span: 10, offset: 11 }}>
              <Button variant="danger" type="submit">
                Send
              </Button>
            </Col>
          </Form>
        </TabPanel>
        <TabPanel>
          <div className="d-flex justify-content-center my-4">
            <h1>WITHDRAWAL</h1>
          </div>
          <Form className="mt-3">
            <Form.Group as={Row} controlId="formPlaintextAmountWithdraw">
              <Form.Label column sm="2">
                Total Amount
              </Form.Label>
              <Col sm="10">
                <Form.Control 
                  type="amount" 
                  placeholder="Input the amount" 
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="exampleForm.ControlTextareaDescWithdraw"
            >
              <Form.Label column sm="2">
                Description
              </Form.Label>
              <Col sm="10">
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                />
              </Col>
            </Form.Group>
            <Col sm={{ span: 10, offset: 11 }}>
              <Button variant="danger" type="submit">
                Withdraw
              </Button>
            </Col>
          </Form>
        </TabPanel>
        <TabPanel>
          <div className="d-flex justify-content-center my-4">
            <h1>TRANSFER</h1>
          </div>
          <Form className="mt-3">
            <Form.Group as={Row} controlId="formPlaintextRecepient">
              <Form.Label column sm="2">
                Recepient
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="account"
                  placeholder="Input the Recepient Account Number "
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextAmountTransfer">
              <Form.Label column sm="2">
                Total Amount
              </Form.Label>
              <Col sm="10">
                <Form.Control 
                  type="amount" 
                  placeholder="Input the amount" 
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="exampleForm.ControlTextareaDescTransfer"
            >
              <Form.Label column sm="2">
                Description
              </Form.Label>
              <Col sm="10">
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                  />
              </Col>
            </Form.Group>
            <Col sm={{ span: 10, offset: 11 }}>
              <Button variant="danger" type="submit">
                Transfer
              </Button>
            </Col>
          </Form>
        </TabPanel>
        <TabPanel>
          {/* isi code mutasi rekening disini */}
        </TabPanel>
      </Tabs>
    </Container>
  );
}

export default Transactions;
