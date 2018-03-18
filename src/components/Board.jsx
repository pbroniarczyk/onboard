import React from 'react';

// Components
import { Cover } from './Cover.jsx';
import { Steps } from './Steps.jsx';
import { Rocket } from './Rocket.jsx';
import Confirmed from './Confirmed.jsx';


export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.userProfileUpdate = this.userProfileUpdate.bind(this);

        this.state = {
            step: 0,
            user: {
                mail: '',
                position: '',
                city: '',
                relocate: '',
                salary: '',
                experience: {
                    total: '',
                    last: ''
                },
                work: {
                    type: {
                        employment: false,
                        contractWork: false,
                        contractComission: false,
                        b2b: false,
                    },
                    place: {
                        stacionary: false,
                        remote: false
                    },
                },
                paths: [],
                skills: [],

            }
        };
    }

    nextStep() {
        this.setState({
            step: this.state.step + 1
        });
    }
    prevStep() {
        this.setState({
            step: this.state.step - 1
        });
    }

    userProfileUpdate(data) {
        let currentState = this.state.user;
        let updatedState = Object.assign(currentState, data)
        this.setState({ user: updatedState })
    }

    render() {
        if(this.state.step !== 5) {
            return(
                <section className="board-section">
                    <div className="board">
                        <Cover user={this.state.user} step={this.state.step} prevStep={this.prevStep}/>
                        <Rocket appState={this.state.step} />
                        <Steps 
                            user={this.state.user}
                            nextStep={this.nextStep} 
                            prevStep={this.prevStep} 
                            step={this.state.step} 
                            userProfileUpdate={this.userProfileUpdate}
                        />
                    </div>
                </section>
            )
        } else {
            return(
                <section className="board-section">
                    <div className="board">
                        <Confirmed user={this.state.user} />
                    </div>
                </section>
            )
        }
    }
}