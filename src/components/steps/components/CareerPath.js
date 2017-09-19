import React from 'react';

// Components
import Checkbox from 'material-ui/Checkbox';

export default class CareerPath extends React.Component {
    constructor() {
        super();
        this.state = {
            checked: false,
            class: ''
        };
    }

    checkHandler() {
        this.setState({
            checked: !this.state.checked
        });
    }

    render() {
        console.log(this.state.checked);
        return(
            <div className={'path ' + this.state.class} onClick={this.checkHandler.bind(this)}>
                <span className="path__percentage">38%</span>
                <span className="path__title">Front-End Developer</span>
                <Checkbox className="path__checkbox" />
            </div>
        );
    }
}