import React from 'react';

// Components
import { Input } from './components/Input';

export class Step5 extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: true
        };
    }

    render() {
        return(
            <div className="step step5">
                <div className="step-body">
                    <div className="step-body__input-wrapper">
                        STEP5
                    </div>
                </div>
            </div>
        )
    }
}