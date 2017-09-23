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
            step: 5
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

    render() {
        return(
            <section className="board-section">
                <div className="board">
                    <Cover step={this.state.step} prevStep={this.prevStep}/>
                    <Rocket />
                    <Steps nextStep={this.nextStep} prevStep={this.prevStep} step={this.state.step} />
                </div>
            </section>
        )
    }
}