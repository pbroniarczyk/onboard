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

    componentDidUpdate() {
        let rocketPath = document.getElementsByClassName('track-container__track'),
            rocket = document.getElementById('rocket');
        console.log(this.refs)
        for (let index = 0; index < rocketPath.length; index++) {
            let track = rocketPath[index];
            // let i = rocketPath.find(track);
            
            // console.log(i)
                track.classList.add('track-container__track--completed');
            if(index > this.props.appState) track.classList.remove('track-container__track--completed');
        }

        rocket.style = `transform: translateY(-${113 * this.props.appState}px)`;
    }

    render() {
        return(
            <div className="rocket-container">
                <div className="track-container">
                    <span ref="item1" className="track-container__track"></span>
                    <span ref="item2" className="track-container__track"></span>
                    <span ref="item3" className="track-container__track"></span>
                    <span ref="item4" className="track-container__track"></span>
                </div>
                <span id="rocket" className="rocket">
                    <img className="rocket-container__rocket" src={rocket} alt="rocket" />
                </span>
                <img className="rocket-container__cloud" src={cloud} alt="cloud" />
            </div>
        )
    }
}