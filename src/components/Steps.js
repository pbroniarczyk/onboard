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
        return(
            <section id="steps-wrapper">
                
                <Step2 />
            </section>
        )
    }
}