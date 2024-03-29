import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userAction";
import Loader from "../Components/Loader";
import Success from "../Components/Success";
import Error from "../Components/Error";
import '../CSS/login.css';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, success, loading } = registerState;

  const dispatch = useDispatch();

  function handleSignup() {

    if (name === "" && email === "" && password === "" && confirmPassword === "") {
      alert("please fill the input field");
    } else if (password !== confirmPassword) {
      alert("password do not match")
    } else if (name === "") {
      alert("please fill the name")
    } else if (email === "") {
      alert("please fill the email")
    }
    else {
      const user = { name, email, password, confirmPassword };
      dispatch(registerUser(user));

    }
  }
  return (
    <>
      <Container className="registerContainer">
        <Row >
          <Col md={3}>
            {/* <Image src="https://images.all-free-download.com/images/graphicwebp/pizza_background_6821430.webp" alt="logo" style={{ width: "100%", height: "60%", marginTop: "200px",  borderRadius: "10px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",}} /> */}
          </Col>
          <Col
            xs={12} sm={12} md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <Form className="signupform" style={{color:"black",}}>
              <h1 style={{marginBottom:"20px",}}>Create your account</h1>
              {loading && <Loader />}

              <Form.Group className="mb-3 " controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="danger" onClick={handleSignup} style={{marginTop:"10px",}}>
                {/* disabled={isLoading} */}
                Register
              </Button>
              {success && <Success success="User Registered Successfully" />}
              {error && <Error error="Something went wrong" />}
              <div className="py-4 text-center">
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </Form>
          </Col>
          <Col md={3}>
            {/* <Image src="https://images.all-free-download.com/images/graphicwebp/fast_food_advertisement_pizza_hotdog_sandwich_icons_decoration_6828082.webp" alt="logo" style={{ width: "100%", height: "40%", marginTop: "250px",  borderRadius: "10px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",}} /> */}

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Register;
