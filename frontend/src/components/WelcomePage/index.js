import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css'

function WelcomePage() {

    return(
        <div className="welcome-wrapper">  
            <div className="forest-div">
                <div className="welcome-message">
                    Reconnect with nature through hospitality that's friendly to you and the planet
                </div>
                <div className="get-started">
                    <i className="fas fa-angle-right"></i>
                    <Link className="get-started-link" to="/signup"> Your Adventure Starts Here</Link>
                </div>
            </div>
            <div className="description-div">
                <div className="globe">
                    <i className="fa fa-globe" aria-hidden="true"></i>
                </div>
                <div className="description-message">
                    Tourism is responsible for 8% of global carbon emissions. We're here to provide the best options for you and the planet
                </div>
                <div className="paper-plane">
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </div>
            </div>
            <div className="features-div">
                <div className="message-1">Offset Your Carbon!</div>
                <div className="message-2">
                    Check Out My Work!
                    <i className="fab fa-github" aria-hidden="true"></i>
                </div>
                <div className="message-3">Find a National Park!</div>

                <div className="feature-1">
                    <a href="https://www.terrapass.com/product/flight-carbon-offset" target="_blank" rel="noreferrer">
                        <div className="offset-div">
                        </div>
                    </a>
                </div>
                <div className="feature-2">
                    <a href="https://github.com/ssmall1/green_bnb" target="_blank" rel="noreferrer">
                        <div className="schu-div">
                        </div>
                    </a>
                </div>
                <div className="feature-3">
                    <a href="https://www.nps.gov/findapark/index.htm" target="_blank" rel="noreferrer">
                        <div className="park-div">
                        </div>
                    </a>

                </div>


            </div>

        </div>
    )
}


export default WelcomePage;