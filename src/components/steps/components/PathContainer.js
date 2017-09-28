import React from 'react';

// Components
import CareerPath from './CareerPath';

export default class PathContainer extends React.Component {
    render() {
        console.log(this.props);
        return(
            <div>
                <CareerPath onCheck={this.props.onCheck} isChecked={this.props.path1} />
                <CareerPath onCheck={this.props.onCheck} isChecked={this.props.path2} />
                <CareerPath onCheck={this.props.onCheck} isChecked={this.props.path3} />
                <CareerPath onCheck={this.props.onCheck} isChecked={this.props.path4} />
                <span className="careerPath-desc">% osób wybiera tę ścieżkę</span>
            </div>
        );
    }
}