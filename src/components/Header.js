import React, {useEffect} from 'react';
import styled from 'styled-components';
import {auth, provider} from '../firebase'
import { useHistory } from "react-router-dom";
import {selectUserName, selectUserPhoto, setUserLogin, setSignOut} from '../features/user/userSlice';
import {useSelector, useDispatch} from 'react-redux';

function Header (){
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
  
    useEffect(() => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          setUser(user);
          history.push("/home");
        }
      });
    }, [userName]);
  
    const handleAuth = () => {
      if (!userName) {
        auth
          .signInWithPopup(provider)
          .then((result) => {
            setUser(result.user);
          })
          .catch((error) => {
            alert(error.message);
          });
      } else if (userName) {
        auth
          .signOut()
          .then(() => {
            dispatch(setSignOut());
            history.push("/login");
          })
          .catch((err) => alert(err.message));
      }
    };
  
    const setUser = (user) => {
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
    };
  
    return (
        <Nav>
            <Logo src= "Assests/images/logo.svg" />
            {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
         ) : (
          <React.Fragment>
            <NavMenu>
                <a>
                    <img src="Assests/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="Assests/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="Assests/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="Assests/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="Assests/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="Assests/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
          </React.Fragment>
      )}
        </Nav>
    )
}
  export default Header;
  const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`
  
  const Logo = styled.img`
   width: 80px;
  `
  const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a {
        display: flex; 
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0; 
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }

     @media (max-width: 768px) {
      display: none;
    }
`;
  
  const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
     &:hover {
      background-color: #f9f9f9;
      color: #000;
      border-color: transparent;
    }
  `;
  
  const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 768px) and (min-width: 300px) {
    justify-content: flex-end;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    margin-left: 170px;
  }

  @media (max-width: 295px) {
    margin-left: 90px;
  }
  `;
  
  const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    background: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;
  `;
  
  const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    ${UserImg} {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
    &:hover {
      ${DropDown} {
        opacity: 1;
        transition-duration: 1s;
      }
    }
  `;
  