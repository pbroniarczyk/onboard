import React from 'react';

// Components
import { BoardHeader } from '../BoardHeader';
// import { RangeSlider } from './components/RangeSlider';
// import { Input } from './components/Input';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import AutoComplete from 'material-ui/AutoComplete';


export class Step1 extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: true,
            rangeValue1: 0,
            rangeValue2: 0,
        };

        this.slider = new Map([
            [0, '< 1 roku'],
            [1, '1 rok'],
            [2, '2 lata'],
            [3, '3 lata'],
            [4, '4 lata'],
            [5, '> 5 lat']
        ]);
    }

    handleChange(event) {
        const valArray = [];
        const refs = this.refs;

        for (let key in refs) {
            if (refs.hasOwnProperty(key)) {
                let value = refs[key].requestsList[0].text;
                valArray.push(value);
            }
            if (valArray.length === 2) {
                this.setState({disabled: false});
            }
        }
    }

    handleSlider1Change(event, value) {
        this.setState({rangeValue1: this.slider.get(value)});
    }
    handleSlider2Change(event, value) {
        this.setState({rangeValue2: this.slider.get(value)});
    }

    handleCheck(event, isInputChecked) {
        const hiddenNode = event.target.parentNode.previousSibling;
        let sliderVal = event.target.parentNode.previousSibling.childNodes[0].childNodes[1].value;

        if (isInputChecked) {
            hiddenNode.classList.add('slider-wrapper--hidden');
            sliderVal = 0; 
            
        } else {
            hiddenNode.classList.remove('slider-wrapper--hidden');
        }
    }

    componentWillUnmount() {
        const user = {
            position: '',
            city: '',
            relocate: this.refs.relocate.state.switched,
            experience: {
                total: this.refs.expTotal.state.value,
                last: this.refs.expLast.state.value,
            }
        };
        let position = this.refs.acomp1.requestsList[0].text,
            city = this.refs.acomp2.requestsList[0].text;

        user.position = position;
        user.city = city;
        this.props.userUpdate(user);
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
                        <AutoComplete
                            ref="acomp1"
                            id="positions"
                            hintText="Nazwa stanowiska"
                            filter={AutoComplete.caseInsensitiveFilter}
                            dataSource={dataSource[0].positions}
                            onClose={this.handleChange.bind(this)}
                        />
                        <AutoComplete
                            ref="acomp2"
                            id="cities"
                            hintText="Miasto"
                            filter={AutoComplete.caseInsensitiveFilter}
                            dataSource={dataSource[1].cities}
                            onClose={this.handleChange.bind(this)}
                        />
                    </div>

                    <Checkbox ref="relocate" className="step-body__checkbox" label="Możliwość relokacji" />

                    <div>
                        <p className="step-body__text">Lata doświadczenie w zawodzie</p>
                        <div className="slider-wrapper">
                            <Slider
                                className="slider-wrapper__slider"
                                min={0}
                                max={5}
                                step={1}
                                onChange={this.handleSlider1Change.bind(this)}
                                ref="expTotal"
                            />
                            <span className="slider-wrapper__bubble" >{this.state.rangeValue1}</span>
                        </div>
                        <Checkbox className="step-body__checkbox" label="Nie mam doświdczenia" onCheck={this.handleCheck.bind(this)} />
                    </div>
                    <div>
                        <p className="step-body__text">Staż w obecnym miejscu pracy</p>
                        <div className="slider-wrapper">
                            <Slider
                                className="slider-wrapper__slider"
                                min={0}
                                max={5}
                                step={1}
                                onChange={this.handleSlider2Change.bind(this)}
                                ref="expLast"
                            />
                            <span className="slider-wrapper__bubble" >{this.state.rangeValue2}</span>
                        </div>
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