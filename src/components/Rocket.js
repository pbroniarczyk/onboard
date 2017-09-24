import React from 'react';

// Assets
import rocket from '../img/rocket.png';
import cloud from '../img/cloud.png';


export class Rocket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: this.props.appState
        };
    }

    componentWillReceiveProps() {
        console.log(this.props.appState);
        let rocketPath = document.getElementsByClassName('track-container__track'),
            rocket = document.getElementById('rocket'),
            currentState = this.props.appState;

        // if (currentState === 5) {
        //     currentState = 4;
        // }
        
        for (let index = 0; index < currentState; index++) {
            let track = rocketPath[index];
                track.classList.add('track-container__track--completed');
        }

        rocket.style = 'transition: 0.3s ease-in-out; transform: translateY(-'+ 113 * currentState +'px)';
    }

    render() {
        return(
            <div className="rocket-container">
                <div className="track-container">
                    <span className="track-container__track"></span>
                    <span className="track-container__track"></span>
                    <span className="track-container__track"></span>
                    <span className="track-container__track"></span>
                </div>
                <span id="rocket">
                    <img className="rocket-container__rocket" src={rocket} alt="rocket" />
                </span>
                <img className="rocket-container__cloud" src={cloud} alt="cloud" />
            </div>
        )
    }
}