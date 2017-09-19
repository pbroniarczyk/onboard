import React from 'react';

// Components
import { Cover } from './Cover';
import { Steps } from './Steps';
import { Rocket } from './Rocket';

export class Board extends React.Component {
    constructor(props) {
        super(props);

        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);

        this.state = {
            step: 3
        };
    }

    nextStep() {
        this.setState({
            step: 2
        });
    }
    prevStep() {
        this.setState({
            step: 1
        });
    }

    render() {
        return(
            <section className="board-section">
                <div className="board">
                    <Cover step={this.state.step} />
                    <Rocket />
                    <Steps nextStep={this.nextStep} prevStep={this.prevStep} step={this.state.step} />
                </div>
            </section>
        )
    }
}