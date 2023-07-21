import React from "react";
import { Navbar, Container, Nav, Image, NavDropdown, Button, } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import img from "../logo.png";
import { logoutUser } from "../actions/userAction";

function TopBar() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  return (
    <>
      <Navbar variant="dark" expand="lg" sticky="top" className="navbar">
        <Container>
          <Navbar.Brand>
            <Image src={img} alt="logo" style={{ height: "50px" }} />
          </Navbar.Brand>

          <Navbar.Brand >
            <h3 className="navh3" style={{ color: "rgb(0, 0, 0)" }}>Pizza Hut</h3>
          </Navbar.Brand>

          <Navbar.Toggle className="color-bg" variant="dark" aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse  variant="dark" id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link><span className="navfont">Home</span></Nav.Link>
              </LinkContainer>
              {currentUser ? (
                <>
                
                  <LinkContainer to="/">
                    <span className="nav">

                      <NavDropdown
                        className="navDropDown text-dark"
                        title={currentUser.name}
                        id="basic-nav-dropdown"
                      >
                        <NavDropdown.Item>
                          <Button
                            variant="outline-danger"
                            onClick={() => {
                              dispatch(logoutUser());
                            }}
                          >
                            Logout
                          </Button>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </span>
                  </LinkContainer>
                  {currentUser.isAdmin === false ? (
                    <LinkContainer to="/cart">
                      <Nav.Link>
                        <span className="navfont navfontRed">
                          Cart {cartState.cartItems.length}
                        </span>
                      </Nav.Link>
                    </LinkContainer>

                  ) : (
                    <LinkContainer to="/admin">
                      <Nav.Link><span className="navfont">Admin panel</span></Nav.Link>
                    </LinkContainer>
                  )}
                  <LinkContainer to="/orders">
                    <Nav.Link><span className="navfont">Orders</span></Nav.Link>
                  </LinkContainer>
                </>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link><span className="navfont navfontRed">Login</span></Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link><span className="navfont">Register</span></Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/adminlogin">
                    <Nav.Link><span className="navfont">Admin</span></Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TopBar;
