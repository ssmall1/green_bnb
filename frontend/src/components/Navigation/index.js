import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
// import logo from "../../images/logo.png";
import logo from "../../images/logo1.png";

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
        <NavLink to="/">Listings</NavLink>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login" className="login">Login</NavLink>
        <NavLink to="/signup" className="signup">Sign-up</NavLink>
        <a href="#links" className="curious">Curious?</a>
      </>
    );
  }

  return (
    <div className="nav-container">
      <div className="welcome-link">
        <NavLink exact to="/welcome">
          <img src={logo} className="logo"/>
        </NavLink>
      </div>
      
      <div className="session-links">
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;