import React from 'react';
// import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from "../../images/logo1.png";

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const spots = useSelector(state => state.spots);
  // const [curiousState, setCuriousState] = useState();
  // const [pathname, setPathName] = useState();
  
  
  
  // useEffect(() => {
  //   setPathName(window.location.pathname);
  //   console.log(pathname)
    
  //   setCuriousState(pathname);
  // }, [setCuriousState, window.location.pathname]);

  if(!spots){
    return null;
  }


  // let curious;

  // if (curiousState === "/welcome") {
  //   curious = (
  //     <a href="#links" className="curious">Curious?</a>
  //   );
  // }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink to="/" className="listings">Listings</NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login" className="login">Login</NavLink>
        <NavLink to="/signup" className="signup">Sign-up</NavLink>
      </>
    );
  }

  return (
    <div className="nav-container">
      <div className="welcome-link">
        <NavLink exact to="/welcome">
          <img src={logo} alt="greenbnb logo" className="logo"/>
        </NavLink>
      </div>
      
      <div className="session-links">
        {isLoaded && sessionLinks}
        {/* {curious} */}
      </div>
    </div>
  );
}

export default Navigation;