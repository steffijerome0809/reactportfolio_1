import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Background from '../../assets/img/carousal/Background.webp';
import ScrollDown from '../scroll-down/scroll-down.component';
import './my-carousal.styles.css';

const MyCarousal = () => {
  return (
    <div id='home'>
      <Carousel
        controls={false}
        indicators
        interval={2500}
        pauseOnHover={false}
      >
        <Carousel.Item>
          <img
            className='d-block w-100 custom-img'
            src={Background}
            alt='First slide'
          />
        </Carousel.Item>
        {/* <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide1} alt="Third slide" />
        </Carousel.Item> */}
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default MyCarousal;
