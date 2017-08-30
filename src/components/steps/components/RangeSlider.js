import React, {Component} from 'react';
import Slider from 'material-ui/Slider';


export class RangeSlider extends Component {
    constructor() {
        super();
        this.state = {rangeValue : 0};
    }

    handleChange() {
        console.log(value)
        this.setState({
            rangeValue: value
        })
    }

    render() {
        return (
            <div>
                <Slider
                    min={0}
                    max={20}
                    step={1}
                    value={this.state.rangeValue}
                    onChange={this.handleChange}
                />
                <span>{this.state.rangeValue}</span>
            </div>
        );
    }
}