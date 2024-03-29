import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userAction";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";
import Success from "../Components/Success";
import Error from "../Components/Error";
import '../CSS/login.css';

function Login() {
  const [email, setEmail] = useState("user@123");
  const [password, setPassword] = useState("12345");
  const dispatch = useDispatch();

  const loginState = useSelector(state => state.loginUserReducer)
  const { loading, success, error } = loginState

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function handleLogin() {
    const user = { email, password };
    dispatch(loginUser(user));
  }

  return (
    <>
      <Container className="loginContainer">
        <Row>
          
          <Col md={2}>
          </Col>

          <Col
            xs={12} sm={12} md={8}
            style={{marginBottom:"25px",}}
            className="d-flex align-items-center justify-content-center"
          >

            <Form className="form loginform">
              <h1 className="text-center mb-4" style={{ color: "black" }}>Login</h1>
              {loading && <Loader />}
              {success && <Success success="User logged in" />}

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-center" style={{ color: "black" }}>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="" style={{ color: "black" }}>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="danger" onClick={handleLogin}>
                Login
              </Button>

              <span className="text-danger">
                {error && <Error error="Email or Password incorrect" />}
              </span>

              <div className="py-4 text-center">
                <p className="">
                  Don't have an account? <Link to="/register"> Register</Link>
                </p>

              </div>
              <div className="text-center">
                <p className="">
                  <strong>Test Account</strong> : user@123 <br />
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

export default Login;
