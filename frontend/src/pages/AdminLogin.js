import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { adminUser } from "../actions/userAction";

import Loader from "../Components/Loader";
import Success from "../Components/Success";
import Error from "../Components/Error";
import '../CSS/login.css';

function AdminLogin() {

  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("12345");
  const dispatch = useDispatch();

  const adminState = useSelector(state => state.adminUserReducer)
  const { loading, success, error } = adminState

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/admin";
    }
  }, []);

  function handleLogin() {
    const user = { email, password };
    dispatch(adminUser(user));

  }
  return (
    <>
      <Container className="adminLoginContainer">
        <Row>

          <Col md={2}>

          </Col>

          <Col
            xs={12} sm={12} md={8}
            className="d-flex align-items-center justify-content-center"
          >
            <Form className="form adminlogin mt-2">
              <h1 className="text-center">Admin Login</h1>
              {loading && <Loader />}
              {success && <Success success="Admin Registered Successfully" />}

              <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleLogin} style={{ marginBottom: "30px", }}>
                Admin Login
              </Button>
              {error && <Error error="email or password incorrect" />}

              <div className="text-center mb-5">
                <p className="">
                  <strong>Test Account</strong> : admin@gmail.com <br />
                  <strong>Password</strong> : 12345
                </p>

              </div>

            </Form>
          </Col>

          <Col md={2}>

          </Col>

        </Row>

      </Container>
    </>
  );
}

export default AdminLogin;





