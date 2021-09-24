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
              <Buttons>
              <SignButton>
               <span>Sign Up Now</span>
              </SignButton>
              <Line1>
                <span></span>
              </Line1>
              <LogButton>
                <span>Login Now</span>
              </LogButton>
              </Buttons>
              <Info>
                <h5>Subscription required for both monthly and yearly plans. *Savings compared to 12 months of the monthly subscription price.</h5>
              </Info>
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
        background-position:-50px 50px;
        background-size: cover;
        position:absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        width: 100vw;
      }
  }
`
const CTA = styled.div`

margin-left: 30px;

@media (max-width: 768px) {
    margin-left:25%;
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
    line-height: 1.4;
    text-align: center;
    
    

   }
`
const Buttons = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: grid;
    grid-gap: 50px;
  }
`
const SignButton = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 80px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  border: none;
  color: white ;
  background: #0063e5;
  opacity:0.9;
  &:hover {
    opacity:2;
  }
  @media (max-width: 768px) {
  font-size: 15px;
  margin: -100px 22px 0px -70px;
  padding: 0px 100px;
  height: 56px;
  letf: 0;
  right:0;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 1.4px;
  text-align: center;
  text-transform: uppercase;
  border: none;
  color: white ;
  background: #0063e5;
  &:hover {
    opacity:2;
  } 
  }
`
const Line1 = styled.span`
  @media (max-width: 768px){
  margin: -150px 20px 0px -75px;
  padding: -90px; 
  border-bottom: 2px solid hsla(0,0%,100%,.2);
  height:80px;
}
`
const LogButton = styled.button`
font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 80px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  border: none;
  color: white ;
  background: #0063e5;
  opacity:0.9;
  &:hover {
    opacity:2;
  }
  @media (max-width: 768px) {
    font-size: 15px;
    margin: -70px 22px 0px -70px;
    padding: 0px 100px;
    height: 56px;
    letf: 0;
    right:0;
    border-radius: 4px;
    cursor: pointer;
    letter-spacing: 1.4px;
    text-align: center;
    text-transform: uppercase;
    border: none;
    color: white ;
    background: #0063e5;
    &:hover {
      opacity:2;
    } 
    }
`
const Info = styled.div`
 margin-top:20px;
 opacity:0.8;
 letter-spacing: 1.8px;
 font-size:12px;

 @media (max-width: 768px) {
   letter-spacing: 1px;
   text-align:center;
   opacity:0.8;
   font-size:10px;
   padding-right:10px;
   padding-left:0px;
   margin-left:-80px;
 }
`