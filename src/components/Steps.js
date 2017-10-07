import React from 'react';

// Component
import { Step1 } from './steps/Step1';
import { Step2 } from './steps/Step2';
import { Step3 } from './steps/Step3';
import { Step4 } from './steps/Step4';
import { Step5 } from './steps/Step5';

export class Steps extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: true
        };
    }

    render() {
        switch (this.props.step) {
            case 0:
                return(
                    <section id="steps-wrapper">
                        <Step1 userUpdate={this.props.userUpdate} nextStepHandler={this.props.nextStep} />
                    </section>
                )
                break;

            case 1:
                return(
                    <section id="steps-wrapper">
                        <Step2 user={this.props.user} userUpdate={this.props.userUpdate} nextStepHandler={this.props.nextStep} prevStepHandler={this.props.prevStep}/>
                    </section>
                )
                break;

            case 2:
                return(
                    <section id="steps-wrapper">
                        <Step3 user={this.props.user} nextStepHandler={this.props.nextStep} prevStepHandler={this.props.prevStep}/>
                    </section>
                )
                break;

            case 3:
                return(
                    <section id="steps-wrapper">
                        <Step4 user={this.props.user} nextStepHandler={this.props.nextStep} prevStepHandler={this.props.prevStep}/>
                    </section>
                )
                break;

            case 4:
                return(
                    <section id="steps-wrapper">
                        <Step5 nextStepHandler={this.props.nextStep} prevStepHandler={this.props.prevStep}/>
                    </section>
                )
                break;

            case 5:
                return(
                    <section id="steps-wrapper">
                        <Step6 />
                    </section>
                )
                break;
        
            default:
                break;
        }
    }
}