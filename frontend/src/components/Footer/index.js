import React from 'react';
import './Footer.css';

function Footer () { 
    return(
        <>
            <div className="footer-container">
                <div className="quote">"The clearest way into the Universe is through a forest wilderness."</div>
                <div className="copyright">© 2021 GreenBnB</div>
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