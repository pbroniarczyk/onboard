import React from 'react';

// Component
import Step1 from './Step1.jsx';
import Step2 from './Step2.jsx';
import Step3 from './Step3.jsx';
import Step4 from './Step4.jsx';
import Step5 from './Step5.jsx';

// Assets
import './steps.css';


class Steps extends React.Component {
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
                        <Step1
                            userProfileUpdate={this.props.userProfileUpdate}
                            nextStepHandler={this.props.nextStep}
                        />
                    </section>
                )

            case 1:
                return(
                    <section id="steps-wrapper">
                        <Step2
                            user={this.props.user}
                            userProfileUpdate={this.props.userProfileUpdate}
                            nextStepHandler={this.props.nextStep}
                            prevStepHandler={this.props.prevStep}
                        />
                    </section>
                )

            case 2:
                return(
                    <section id="steps-wrapper">
                        <Step3
                            user={this.props.user}
                            userProfileUpdate={this.props.userProfileUpdate}
                            nextStepHandler={this.props.nextStep}
                            prevStepHandler={this.props.prevStep}
                        />
                    </section>
                )

            case 3:
                return(
                    <section id="steps-wrapper">
                        <Step4
                            user={this.props.user}
                            userProfileUpdate={this.props.userProfileUpdate}
                            nextStepHandler={this.props.nextStep}
                            prevStepHandler={this.props.prevStep}
                        />
                    </section>
                )

            case 4:
                return(
                    <section id="steps-wrapper">
                        <Step5
                            user={this.props.user}
                            userProfileUpdate={this.props.userProfileUpdate}
                            nextStepHandler={this.props.nextStep}
                            prevStepHandler={this.props.prevStep}
                        />
                    </section>
                )
        
            default:
                break;
        }
    }
}

export default Steps;