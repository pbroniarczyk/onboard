import React from 'react';

// Component
import { Step1 } from './steps/step1';

export class Steps extends React.Component {
    render() {
        return(
            <section id="steps-wrapper">
                <Step1 />
            </section>
        )
    }
}