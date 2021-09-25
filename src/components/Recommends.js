import React from 'react'
import styled from 'styled-components';
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import {selectRecommend} from '../features/movie/movieSlice'
import {useSelector} from 'react-redux';

function Recommends(props) {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const movies = useSelector(selectRecommend);
    return (
        <Container>
            <h2>Recommended For You</h2><br/>
            <Content {...settings}>
              {movies &&
                  movies.map((movie) => (
                   <Wrap key={movie.id}>
                     <Link to={`/detail/${movie.id}`}>
                      <img src={movie.cardImg} alt={movie.title}/>
                      </Link>
                   </Wrap>
                ))
              }
            </Content>
        </Container>
    )
}

export default Recommends;

const Container = styled.div`
`
const Content = styled(Slider)`
   display: grid;
   grid-gap: 80px;
   grid-template-columns: repeat(4, minmax(0,1fr))
   @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
const Wrap = styled.div`
  border-radius:10px;
  overflow:hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    
  img{
    width:100%;
    height: 100%;
    object-fit: cover;
   }

   &:hover {
       transform: scale(1.05);
       border-color: rgba(249, 249, 249, 0.8);
       box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
       rgb(0 0 0 / 72%) 0px 30px 22px -10px;
   }
`