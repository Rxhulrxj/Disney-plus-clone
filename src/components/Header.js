import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Nav>
            <Logo  src="/Assests/images/logo.svg" alt="Disney+" />
            <Navmenu>
                <a>
                    <img src="/Assests/images/home-icon.svg" alt="Home"/>
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/Assests/images/search-icon.svg" alt="Home"/>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/Assests/images/watchlist-icon.svg" alt="Home"/>
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/Assests/images/original-icon.svg" alt="Home"/>
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/Assests/images/movie-icon.svg" alt="Home"/>
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/Assests/images/series-icon.svg" alt="Home"/>
                    <span>SERIES</span>
                </a>
            </Navmenu>
            <Userimg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsteamuserimages-a.akamaihd.net%2Fugc%2F872998386575036955%2F8E005F4483B95746436CE0D1DC44124F4FB819C6%2F&f=1&nofb=1"/>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height :70px;
    background : #090b13;
    display :flex;
    align-items : center;
    padding : 0 36px;

`
const Logo = styled.img`
    width : 80px;
`
const Navmenu = styled.div`
    display : flex;
    flex :1;
    margin-left : 25px;
    cursor : pointer;
    align-items : center;
    a{
        display : flex;
        align-items : center;
        padding : 0 12px;

        img{
            height :20px;
        }
        span{
            font-size :13px;
            letter-spacing: 1.42px;
            position :relative;

            &:after {
                content :"";
                height :2px;
                background: white;
                position :absolute;
                left: 0;
                right:0;
                bottom: -6px;
                opacity :0;
                transform-origin: left center;
                transition: all 300ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform : scaleX(1);
                opacity: 1;
            }
        }
    }
`
const Userimg = styled.img`
width: 48px;
height: 48px;
border-radius :50%;
cursor : pointer;
`