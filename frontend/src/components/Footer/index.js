import React from 'react';
import './Footer.css';

function Footer () { 
    return(
        <>
            <div className="footer-container">
                <div className="copyright">© 2021 GreenBnB</div>
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/schuler-small/" target="_blank">
                        <div className="connect">
                            <i class="fab fa-linkedin-in"></i>
                             ~Connect with me
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer;