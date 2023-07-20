import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Pizza from "../Components/Pizza";
import ControlledCarousel from "../Components/ControlledCarousel";
import { getAllPizzas } from "../actions/pizzaAction";
import Loader from "../Components/Loader";
import Error from "../Components/Error"

import '../CSS/Pizza.css';

function HomePage() {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  const pizzass = [
    {
      name: "Margherita",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 99,
          medium: 199,
          large: 399,
        },
      ],
      category: "veg",
      image: "/images/img8.jpg",
      description: "Classic delight with 100% real mozzarella cheese",
    },
    {
      name: "Farmhouse",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 229,
          medium: 399,
          large: 599,
        },
      ],
      category: "veg",
      image: "/images/img7.jpg",
      description:
        "Delightful combination of onion, capsicum, tomato & grilled mushroom",
    },
    {
      name: "Veggie Paradise",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 180,
          medium: 290,
          large: 460,
        },
      ],
      category: "veg",
      description:
        "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
      image: "/images/img3.png",
    },
    {
      name: "Golden Delight",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 249,
          medium: 349,
          large: 599,
        },
      ],
      category: "nonveg",
      image: "/images/img4.png",
      description:
        "Double pepper barbecue chicken, golden corn and extra cheese, true delight",
    },
    {
      name: "Chicken Pepperoni",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 320,
          medium: 580,
          large: 800,
        },
      ],
      category: "nonveg",
      image: "/images/img5.png",
      description:
        "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
    },
    {
      name: "Veggie Feast",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 250,
          medium: 380,
          large: 500,
        },
      ],
      category: "nonveg",
      image: "/images/img6.png",
      description:
        "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
    },
    {
      name: "Tikka Supreme",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 250,
          medium: 380,
          large: 500,
        },
      ],
      category: "nonveg",
      image: "/images/img2.png",
      description:
        "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
    },
    {
      name: "Mexican Fiesta",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 250,
          medium: 380,
          large: 500,
        },
      ],
      category: "nonveg",
      image: "/images/img1.png",
      description:
        "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
    },
    {
      name: "Dhabe Da Keema",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 250,
          medium: 380,
          large: 500,
        },
      ],
      category: "nonveg",
      image: "/images/img9.jpg",
      description:
        "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
    },
    {
      name: "Veggie Supreme",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 250,
          medium: 380,
          large: 500,
        },
      ],
      category: "nonveg",
      image: "/images/img10.png",
      description:
        "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
    },
  
  ];

  return (
    <>
    <ControlledCarousel />
      <Container className="" xs={12} sm={12} md={6}>
     
        {loading ? (
          <span className="d-flex align-items-center justify-content-center"><Loader/></span>
        ) : error ? (
          <Error>Error while fetching pizza datas{error}</Error>
        ) : (
          <Row classname="homepage">
            {pizzass.map((pizza) => (
              <Col md={3} key={pizza.name}>
                <Pizza pizza={pizza} />
              </Col>
            ))}
            {pizzas.map((pizza) => (
              <Col md={4} key={pizza.name}>
                <Pizza pizza={pizza} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}

export default HomePage;
