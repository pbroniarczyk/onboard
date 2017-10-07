import React from 'react';

// Components
import { BoardHeader } from '../BoardHeader';
import { RangeSlider } from './components/RangeSlider';
import { Input } from './components/Input';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';


export class Step1 extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: false
        };
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

    // componentDidMount() {
    //     const user = {
    //         position: '',
    //         city: ''
    //     };
    //     let position = this.refs.acomp1.requestsList[0].text,
    //         city = this.refs.acomp2.requestsList[0].text;
    //     user.position = position;
    //     user.city = city;

    //     console.log(user);
    // }

    componentWillUnmount() {
        const user = {
            position: '',
            city: ''
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
                            dataSource={dataSource[0].positions}
                            onClose={this.handleChange.bind(this)}
                        />
                        <AutoComplete
                            ref="acomp2"
                            id="cities"
                            hintText="Miasto"
                            dataSource={dataSource[1].cities}
                            onClose={this.handleChange.bind(this)}
                        />
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