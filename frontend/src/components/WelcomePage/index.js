import React from 'react';
import forestGif from '../../images/landscape-forest.gif';
import './Welcome.css'

function WelcomePage() {

    return(
        <div className="welcome-wrapper">  
            <div className="forest-div">
                <img src={forestGif}/>
            </div>
            <div className="description-div">
                Reconnect with the restorative power of nature through ecologically-conscious hospitality 
            </div>
            
            <div className="features-div">
                <div className="feature-1">

                </div>
                <div className="feature-2">

                </div>
                <div className="feature-3">

                </div>


            </div>

        </div>
    )
}


export default WelcomePage;