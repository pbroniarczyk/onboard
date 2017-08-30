import React from 'react';

// Assets
import '../img/rocket.png';
import '../img/cloud.png';

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
                <img className="rocket-container__rocket" src="../img/rocket.png" alt="rocket" />
                <img className="rocket-container__cloud" src="../img/cloud.png" alt="cloud" />
            </div>
        )
    }
}