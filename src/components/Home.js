import React, { useEffect } from 'react'
import styled from 'styled-components';
import Companies from './Companies';
import Imgsilder from './Imgsilder';
import Movies from './Movies';
import db from '../firebase';
import {useDispatch} from 'react-redux';
import {setMovies} from '../features/movie/movieSlice';
import Recommends from './Recommends';
import Trending from './Trending'
import NewDisney from './newDisney'

function Home() {
    const dispatch = useDispatch();
    let recommends = [];
    let originals = [];
    let trending = [];
    let newDisneys = [];
    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    switch (doc.data().type) { 
                        case "recommend" :
                            recommends = [...recommends,{id: doc.id, ...doc.data()}];
                            break;
                        case "original" :
                            originals = [...originals,{id: doc.id, ...doc.data()}];
                            break;
                        case "trending" :
                            trending = [...trending,{id: doc.id, ...doc.data()}];
                            break;
                        case "new":
                            newDisneys = [...newDisneys,{id: doc.id, ...doc.data()}];
                            break;
                
            }
            });
        
            dispatch(
                setMovies({
                    recommend: recommends,
                    original: originals,
                    trending: trending,
                    newDisney: newDisneys,
                })
                );
            });
    }, [])

    return (
        
        <Container>
            <Imgsilder />
            <Companies />
            <Trending />
            <Recommends />
            <NewDisney />
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
