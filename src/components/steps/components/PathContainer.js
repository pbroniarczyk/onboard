import React from 'react';

// Components
import CareerPath from './CareerPath';

export default class PathContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    render() {
        return(
            <div>
                <CareerPath isChecked={this.state} />
                <CareerPath isChecked={this.state} />
                <CareerPath isChecked={this.state} />
                <CareerPath isChecked={this.state} />
                <span className="careerPath-desc">% osób wybiera tę ścieżkę</span>
            </div>
        );
    }
}