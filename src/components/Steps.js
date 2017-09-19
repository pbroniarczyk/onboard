import React from 'react';

// Component
import { Step1 } from './steps/step1';
import { Step2 } from './steps/step2';

export class Steps extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: true
        };
    }

    render() {
        switch (this.props.step) {
            case 1:
                return(
                    <section id="steps-wrapper">
                        <Step1 nextStepHandler={this.props.nextStep} />
                    </section>
                )
                break;

            case 2:
                return(
                    <section id="steps-wrapper">
                        <Step2 nextStepHandler={this.props.nextStep} prevStepHandler={this.props.prevStep}/>
                    </section>
                )
                break;
        
            default:
                break;
        }
    }
}