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
                <img src="./Assests/images/slider-badging.jpg"/>
            </Wrap>
            <Wrap>
                <img src="./Assests/images/slider-badag.jpg"/>
            </Wrap>
            <Wrap>
                <img src="./Assests/images/slider-scale.jpg"/>
            </Wrap>
        </Carousel>
    )
}

export default Imgsilder


const Carousel = styled(Slider)`
   marigin-top: 20px;

   .slick-list {
       overflow: visible;
   }
   button {
     z-index: 1;
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