import React from 'react';
import classNames from 'classnames';

// Components
import Checkbox from 'material-ui/Checkbox';

export default class CareerPath extends React.Component {
    constructor() {
        super();
        this.state = {
            checked: '',
            class: ''
        };
    }

    componentWillMount() {
        this.setState({
            checked: this.props.isChecked
        });
    }

    handleCheck(e) {
        this.props.onCheck();
        this.setState({
            checked: !this.state.checked
        });
    }

    render() {
        return(
            <div className={classNames('path', { 'path--checked': this.state.checked})} onClick={this.handleCheck}>
                <span className="path__percentage">38%</span>
                <span className="path__title">Front-End Developer</span>
                <Checkbox ref={this.props} onCheck={this.props.onCheck.bind(this)} className="path__checkbox" checked={this.state.checked} />
            </div>
        );
    }
}