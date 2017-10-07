import React, {Component} from 'react';
import Slider from 'material-ui/Slider';


export class RangeSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rangeValue: 0,
        };
    }

    handleChange(event, value) {
        this.setState({rangeValue: value});
    }

    render() {
        return (
            <div className="slider-wrapper">
                <Slider
                    className="slider-wrapper__slider"
                    min={0}
                    max={20}
                    step={1}
                    value={this.state.rangeValue}
                    onChange={this.handleChange.bind(this)}
                />
                <span className="slider-wrapper__bubble" >{this.state.rangeValue}</span>
            </div>
        );
    }
}