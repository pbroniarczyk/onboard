import React from 'react';
import classNames from 'classnames';

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
        return(
            <div className={classNames('path', { 'path--checked': this.state.checked})} onClick={this.checkHandler.bind(this)}>
                <span className="path__percentage">38%</span>
                <span className="path__title">Front-End Developer</span>
                <Checkbox className="path__checkbox" checked={this.state.checked} />
            </div>
        );
    }
}