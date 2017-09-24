import React from 'react';

// Assets
import rocket from '../img/rocket.png';
import cloud from '../img/cloud.png';

export class Rocket extends React.Component {
    render() {
        return(
            <div className="rocket-container">
            <div className="track-container">
                <span className="track-container__track"></span>
                <span className="track-container__track"></span>
                <span className="track-container__track"></span>
                <span className="track-container__track"></span>
                <span className="track-container__track"></span>
            </div>
                <img className="rocket-container__rocket" src={rocket} alt="rocket" />
                <img className="rocket-container__cloud" src={cloud} alt="cloud" />
            </div>
        )
    }
}