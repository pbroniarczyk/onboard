import React from 'react';

export class StepHeader extends React.Component {
    render() {
        return(
            <div className="step-header">
                <h2 className="step-header__title">{this.props.title}</h2>
                <p className="step-header__subtitle">{this.props.subtitle}</p>
            </div>
        )
    }

}
