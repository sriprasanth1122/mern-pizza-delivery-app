import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          // style={{height:"750px",}} 
          src="./images/Banner1.jpg"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/Banner2.jpg"
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/Banner3.jpg"
          alt="Third slide"
        />

        {/* https://www.pizzaah.com/images/slider-3.jpg */}
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;