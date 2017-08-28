import React from 'react';

// Components
import StepHeader from './components/StepHeader';
import { Input } from './components/Input';

export class Step1 extends React.Component {
    render() {
        return(
            <div className="step step1">
                <StepHeader />
                <Input />
            </div>
        )
    }
}