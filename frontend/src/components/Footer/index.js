import React from 'react'
import icon from "../../images/icon.png";
import './Footer.css';

function Footer () { 
    return(
        <>
            <div className="footer-container">
                <div className="quote">
                    "The clearest way into the Universe is through a forest wilderness."
                    <a href="https://github.com/ssmall1/green_bnb" target="_blank" rel="noreferrer">
                        <i className="fab fa-github" aria-hidden="true"></i>
                    </a>
                    </div>
                <div className="copyright">© 2021 GreenBnB</div> 
                <img src={icon} alt="greenbnb icon" id="icon"/>
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/schuler-small/" target="_blank" rel="noreferrer">
                        <div className="connect">
                             Connect with the creator, Schuler Small
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer;