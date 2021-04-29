import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageNotFound.css';
import bug from "../../images/bug.png";

function PageNotFound() {
    return(
        <div className="no-wrapper">
            <div className="no-go">
            <img src={bug} alt="bug" className="bug"/>
            </div>
            <div className="no-go-message">
                Looks like you've strayed off the path...
                <div>
                    <NavLink to="/" className="home">Back to Home</NavLink>
                </div>
            </div>
        </div>
    )
}


export default PageNotFound;