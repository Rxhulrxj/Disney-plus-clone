import React, { useEffect } from 'react'
import styled from 'styled-components';
import Companies from './Companies';
import Imgsilder from './Imgsilder';
import Movies from './Movies';
import db from '../firebase';
import {useDispatch} from 'react-redux';
import {setMovies} from '../features/movie/movieSlice';
import Header from './Header';

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
            let tempMovies = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data()}
            })
            dispatch(setMovies(tempMovies));
        })
    }, [])

    return (
        
        <Container>
            {/* <Header /> */}
            <Imgsilder />
            <Companies />
            <Movies />
        </Container>
    )
}

export default Home

const Container = styled.main`
     min-height:calc(100vh - 70px);
     padding:0 calc(3.5vw + 5px);
     position: relative;
     overflow-x: hidden;

     &:before {
         background: url("/Assests/images/home-background.png") center center / cover
         no-repeat fixed;
         content: "";
         position: absolute;
         z-index:-1;
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;

     }


`
