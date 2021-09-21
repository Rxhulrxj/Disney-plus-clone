import React from 'react'
import styled from 'styled-components';


function Details() {
    return (
        <Container>
            <Background>
                <img src="./Assests/images/scale.jpg" alt="bg" />
            </Background>
            <Imagetitle>
                <img src="./Assests/images/scale.png" alt="title" />
            </Imagetitle>
            <Controls>
                <PlayButton>
                     <img src="./Assests/images/play-icon-black.png" alt="play"/>
                     <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                      <img src="./Assests/images/play-icon-white.png" alt="trailerplay"/>
                      <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                       <span>+</span>
                </AddButton>
                <GroupButton>
                      <img src="./Assests/images/group-icon.png" alt="group"/>
                </GroupButton>            
            </Controls>
            <Subtitle>
                2018 • 7m • Family, Fantasy, Kids, Animation
            </Subtitle>
            <Description>
            A Chinese mom who’s sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
            </Description>

        </Container>
    )
}

export default Details
 
const Container = styled.div`
    min-height: calc(100vh - 250px);
    padding: 0 calc(3.5vw + 5px);
    overflow-x: hidden;
    display:block;
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100vw;
        height: 100vh;
        
        @media (max-width: 768px) {
            width: initial;
        }
    }
`
const Imagetitle = styled.div`
     height: 30vh;
     min-height: 170px;
     min-width:200px;
     width: 100%;
     align-items: flex-end;
     display: flex;
     -webkit-box-pack: start;
     justify-content: flex-start;
     margin: 0px auto;
     padding-bottom:24px;
     
     img{
         max-width: 600px;
         max-height: 200px;
         width: 35vw;
     }
`

const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;

    
`
const PlayButton = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0,0,0,0.3);
    color: rgb(249,249,249);
    border:1px solid rgb(249,249,249);
    text-transform: uppercase;
`
const AddButton = styled.button`
    margin-right: 16px;
    width:44px;
    height:44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:50%;
    border: 2px solid white;
    background-color: rgba(0,0,0,0.6);
    cursor: pointer;

    span{
        font-size:30px;
        color:white;
    }

`
const GroupButton = styled(AddButton)`
    background: rgb(0,0,0);

`
const Subtitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    
    @media (max-width: 768px){
        font-size: 12px;
    }
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    color: rgb(249,249,249);

    @media (max-width: 768px) {
        font-size: 14px;
    }
`