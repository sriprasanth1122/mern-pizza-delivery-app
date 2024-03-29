import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";
import { FaRupeeSign } from "react-icons/fa";
import "../CSS/Pizza.css";
import Swal from 'sweetalert2';

function Pizza({ pizza }) {

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    if (currentUser) {
      dispatch(addToCart(pizza, quantity, varient));
      Toast.fire({ icon: 'success', title: 'This item has been added to cart' })
    } else {
      Toast.fire({ icon: 'warning', title: `Please login to shop pizza!` })
    }
  };


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card
        className="imageupload mb-4 cards design"
        style={{
          width: "19rem",
          marginTop: "30px",
          // marginLeft:"30px",
          objectFit: "cover",
          borderRadius: "15px",
          // boxShadow: "rgba(255, 0, 0, 0.8) 12px 8px 12px",
          // backgroundColor: "rgb(172, 0, 29)",
          backgroundColor: "#fff",
          // border: "1px solid rgb(172, 0, 29)",


        }}
      >
        <Card.Img
          variant="top"
          src={pizza.image}
          style={{ height: "18rem", cursor: "pointer", borderRadius: "15px", padding: "5px" }}
          onClick={handleShow}
        />

        <Card.Body>
          <Card.Title className=" text-center cardName">{pizza.name}</Card.Title>
          {/* <hr className="text-white" /> */}
          <Card.Text>
            <Row>
              <Col md={6}>
                <p className="text-dark cardVarientQuantity">Varients</p>
                <select className="text-secondary rounded bg-transparent cardSelect"
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}
                >
                  {pizza.varients.map((varient) => (
                    <option className="text-success">{varient}</option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <p className="text-dark cardVarientQuantity">Quantity</p>
                <select className="text-secondary rounded bg-transparent cardSelect"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((v, i) => (
                    <option value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>

          
          <Row>
            <Col md={6} className="cardPrice ">
              Price: <FaRupeeSign className="rupee" />{pizza.prices[0][varient] * quantity}
            </Col>
            <Col md={6}>
              <Button onClick={addToCartHandler} variant="success">
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* modal */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img
              variant="top"
              src={pizza.image}
              style={{ height: "270px", borderRadius: "5px" }}
            />
          </div>
          <div>
            <h5>Description</h5>
            <p>{pizza.description}</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Pizza;
