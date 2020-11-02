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
import { deposit, withdrawal, transfer, saldo } from '../../actions/transactionActions';

const Transactions = ({ history }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    history.push('/login');
  }

  const userLogin = useSelector((state) => state.userLogin)
  const { token } = userLogin

  const [accountDeposit, setAccountDeposit] = useState("");
  const [amountDeposit, setAmountDeposit] = useState("");
  const [descDeposit, setDescDeposit] = useState("");
  const [accountWithdrawal, setAccountWithdrawal] = useState("");
  const [amountWithdrawal, setAmountWithdrawal] = useState("");
  const [descWithdrawal, setDescWithdrawal] = useState("");
  const [accountTransfer, setAccountTransfer] = useState("");
  const [amountTransfer, setAmountTransfer] = useState("");
  const [descTransfer, setDescTransfer] = useState("");

  useEffect(() => {
    setAccountDeposit("");
    setAmountDeposit("");
    setDescDeposit("");
    setAccountWithdrawal("");
    setAmountWithdrawal("");
    setDescWithdrawal("");
    setAccountTransfer("");
    setAmountTransfer("");
    setDescTransfer("");
  }, [])

  useEffect(() => {
    if (token) {
      dispatch(saldo())
    } 
  }, [dispatch, history, token])

  const transactionSaldo = useSelector((state) => state.transactionSaldo)
  const { saldoTotal } = transactionSaldo

  const submitDepositHandler = (e) => {
    e.preventDefault();
    dispatch(deposit(accountDeposit, amountDeposit, descDeposit));
  };
  const submitWithdrawalHandler = (e) => {
    e.preventDefault();
    dispatch(withdrawal(accountWithdrawal, amountWithdrawal, descWithdrawal));
  };
  const submitTransferHandler = (e) => {
    e.preventDefault();
    dispatch(transfer(accountTransfer, amountTransfer, descTransfer));
  };
  
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
          <div className="mb-5">
            <h4>Total Saldo : {saldoTotal != null && saldoTotal.account ? saldoTotal.account.saldo : 0} </h4>
          </div>
          <Form onSubmit={submitDepositHandler} className="mt-3">
            <Form.Group as={Row} controlId="formPlaintextAccount">
              <Form.Label column sm="2">
                Account Number
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="account"
                  value={accountDeposit}
                  onChange={(e) => setAccountDeposit(e.target.value)}
                  placeholder="Input the destination account number"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextAmount">
              <Form.Label column sm="2">
                Total Amount
              </Form.Label>
              <Col sm="10">
                <Form.Control 
                  type="amount" 
                  value={amountDeposit}
                  onChange={(e) => setAmountDeposit(e.target.value)}
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
                  value={descDeposit}
                  onChange={(e) => setDescDeposit(e.target.value)}
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
          {/* <div className="mb-5">
            <h4>Total Saldo : {saldoTotal.account.saldo} </h4>
          </div> */}
          <Form onSubmit={submitWithdrawalHandler} className="mt-3">
            <Form.Group as={Row} controlId="formPlaintextAccountWithdraw">
              <Form.Label column sm="2">
                Account Number
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="account"
                  value={accountWithdrawal}
                  onChange={(e) => setAccountWithdrawal(e.target.value)}
                  placeholder="Input the destination account number"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextAmountWithdraw">
              <Form.Label column sm="2">
                Total Amount
              </Form.Label>
              <Col sm="10">
                <Form.Control 
                  type="amount" 
                  placeholder="Input the amount" 
                  value={amountWithdrawal}
                  onChange={(e) => setAmountWithdrawal(e.target.value)}
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
                  value={descWithdrawal}
                  onChange={(e) => setDescWithdrawal(e.target.value)}
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
          {/* <div className="mb-5">
            <h4>Total Saldo : {saldoTotal.account.saldo} </h4>
          </div> */}
          <Form onSubmit={submitTransferHandler} className="mt-3">
            <Form.Group as={Row} controlId="formPlaintextRecepient">
              <Form.Label column sm="2">
                Recepient
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="account"
                  value={accountTransfer}
                  onChange={(e) => setAccountTransfer(e.target.value)}
                  placeholder="Input the Recepient "
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
                  value={amountTransfer}
                  onChange={(e) => setAmountTransfer(e.target.value)}
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
                  value={descTransfer}
                  onChange={(e) => setDescTransfer(e.target.value)}
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
  // return (
  //   <div>

  //   </div>
  // )
}

export default Transactions;
