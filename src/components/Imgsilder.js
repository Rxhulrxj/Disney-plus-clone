import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Imgsilder() {

    let settings = {
      className: "",
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    }
    return (
        <Carousel  {...settings}>
            <Wrap>
                <a>
                <img src="./Assests/images/de467fd7-4f10-42f3-b9ab-57e5a91e0f47-LucaHero.png" alt="img"/>
                </a>
            </Wrap>
            <Wrap>
            <a>
                <img src="./Assests/images/cruella.png" alt="img"/>
            </a>
            </Wrap>
            <Wrap>
            <a>
                <img src="./Assests/images/slider-scale.jpg" alt="img"/>
            </a>
            </Wrap>
            <Wrap>
                <a>
                <img src="./Assests/images/Black-Widow.png" alt="img"/>
                </a>
            </Wrap>
        </Carousel>
    )
}

export default Imgsilder


const Carousel = styled(Slider)`
   marigin-top: 20px;

   & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
   ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }

   .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }

  @media (max-width:768px) {
    margin-top: 85px;
  }
`
const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }

`