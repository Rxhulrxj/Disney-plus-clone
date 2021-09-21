import React from 'react'
import styled from 'styled-components';

function Login() {
    return (
        <Container>
          <CTA>
              <CTAlogo src="https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg"/>
              <Description>
                 <h1>Stream all your favourites and more. </h1>
              </Description>
          </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);

  &:before {
      position:absolute;
      content: "";
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: url("./Assests/images/Hero_LeftCTA_Desktop_SG_Jul21_120721.jpg") center center no-repeat fixed;
      background-position: top;
      background-size: cover;
      z-index: -1;

      @media (max-width: 768px) {
        background: url("./Assests/images/Hero_Mobile_1400x2053_Jul21_080721.jpg") center center no-repeat fixed;
        background-position:-50px 40px;
        background-size: cover;
        position:absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
      }
  }
`
const CTA = styled.div`

margin-left: 30px;

@media (max-width: 768px) {
    margin-left:25%;
    align-item: center;
    justify-content: center;
}
`
const CTAlogo= styled.img`
margin-top:250px;
max-width:150px;

@media (max-width: 768px) {
    margin-top:50%;
}

`
const Description = styled.div`
   font-size:18px;
   font-weight:bold;
   line-height: 1.4;
   padding: 16px 0px;

   @media (max-width: 768px) {
    font-size:10px;
    padding: 2px 0px;
    padding-bottom:32vw;
    margin-left:-55px;
    max-width:300px;
    
    

   }
`