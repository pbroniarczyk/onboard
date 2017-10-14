import React from 'react';

// Assets
import rocket from '../img/rocket.png';
import cloud from '../img/cloud.png';


export class Rocket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: this.props.appState,
            currentTrack: 0
        };
    }

    componentDidUpdate() {
        const rocket = document.getElementById('rocket');
        const pathArray = [];
        let pathTrack = document.querySelectorAll('.track-container__track--empty');

        pathTrack.forEach(function(element) {
            pathArray.push(element);
        }, this);

        let emptyTrack = pathArray.reverse().slice(this.props.appState);
        emptyTrack.forEach(function(element) {
            element.classList.add('track-container__track--completed');
        }, this);

        rocket.style = `transform: translateY(-${113 * this.props.appState}px)`;
    }

    render() {
        return(
            <div className="rocket-container">
                <div className="track-container">
                    <span className="track-container__track track-container__track--empty"></span>
                    <span className="track-container__track track-container__track--empty"></span>
                    <span className="track-container__track track-container__track--empty"></span>
                    <span className="track-container__track track-container__track--empty"></span>
                </div>
                <span id="rocket" className="rocket">
                    <img className="rocket-container__rocket" src={rocket} alt="rocket" />
                </span>
                <img className="rocket-container__cloud" src={cloud} alt="cloud" />
            </div>
        )
    }
}