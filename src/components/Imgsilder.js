import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Imgsilder() {

    let settings = {
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        pauseOnHover: true
    }
    return (
        <Carousel  {...settings}>
            <Wrap>
                <img src="./Assests/images/de467fd7-4f10-42f3-b9ab-57e5a91e0f47-LucaHero.png"/>
            </Wrap>
            <Wrap>
                <img src="./Assests/images/cruella.png"/>
            </Wrap>
            <Wrap>
                <img src="./Assests/images/slider-scale.jpg"/>
            </Wrap>
            <Wrap>
                <img src="./Assests/images/Black-Widow.png"/>
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

   .slick-list {
       overflow: visible;
   }

   .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`
const Wrap = styled.div`
   img {
       border: 4px solid transparent;
       border-radius:5px;
       width: 100%;
       height: 100%;
       box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
       rgb(0 0 0 / 73%) 0px 16px 10px -10px;
       transition-duration: 300ms;

       &:hover {
           border: 4px solid rgba(249,249,249,0.8);
       }
   }
`