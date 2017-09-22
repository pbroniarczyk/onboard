import React from 'react';

// Components
import { BoardHeader } from '../BoardHeader';
import { RangeSlider } from './components/RangeSlider';
import { Input } from './components/Input';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';


export class Step1 extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: true
        };
    }

    // validate inputs & allow moving to the nest step
    handleChange(event) {
        let value = event.target.value,
            inputs = document.querySelectorAll('input[type=text]');

        inputs.forEach(input => {
            let inputVal = input.value,
                validate = false;
                
            if (inputVal !== '') {
                validate = true;
                this.setState({disabled: false});
            } else {
                validate = false;
                this.setState({disabled: true});
            }
        }, this);
    }

    // Hide & display sliders on checking propper checkboxex
    handleCheck(event, isInputChecked) {
        const hiddenNode = event.target.parentNode.previousSibling;
        let sliderVal = event.target.parentNode.previousSibling.childNodes[0].childNodes[1].value;

        if (isInputChecked) {
            // When is checked set value of this slider to 0. When is unchecked set back value provided by user
            hiddenNode.classList.add('slider-wrapper--hidden');
            sliderVal = 0; 
            
        } else {
            hiddenNode.classList.remove('slider-wrapper--hidden');
        }
    }

    render() {
        const dataSource = [
            { positions: ['JavaScript Developer', 'Programist', 'Product Manager', 'Python Developer', 'Front-End Developer', 'Project Manager'] },
            { cities: ['Warszawa', 'Wrocław', 'Kraków', 'Poznań'] }
        ];

        return(
            <div className="step step1">
                <BoardHeader title={'Twoje doświadczenie'} subtitle={'Opowiedz, jakie masz doświadczenie i sprawdź swoje możliwości.'} />
                <div className="step-body">
                    <div className="step-body__input-wrapper">
                        <input onChange={this.handleChange.bind(this)} type="text" id="positions" placeholder="Nazwa stanowiska" />
                        <input onChange={this.handleChange.bind(this)} type="text" id="cities" placeholder="Miasto" />
                    </div>

                    <Checkbox className="step-body__checkbox" label="Możliwość relokacji" />

                    <div>
                        <p className="step-body__text">Lata doświadczenie w zawodzie</p>
                        <RangeSlider />
                        <Checkbox className="step-body__checkbox" label="Nie mam doświdczenia" onCheck={this.handleCheck.bind(this)} />
                    </div>
                    <div>
                        <p className="step-body__text">Staż w obecnym miejscu pracy</p>
                        <RangeSlider />
                        <Checkbox className="step-body__checkbox" label="Nie pracuję" onCheck={this.handleCheck.bind(this)} />
                    </div>
                </div>

                <div className="btn-group">
                    <RaisedButton onClick={this.props.nextStepHandler} className="btn-group__next-btn" label="następny krok" primary={true} disabled={this.state.disabled}/>
                </div>
            </div>
        )
    }
}