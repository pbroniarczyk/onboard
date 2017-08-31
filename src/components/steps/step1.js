import React from 'react';

// Components
import { StepHeader } from './components/StepHeader';
import { RangeSlider } from './components/RangeSlider';
import { Input } from './components/Input';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';


const validateStep = () => console.log(this.state);


export class Step1 extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: false
        };
    }

    render() {
        const dataSource = [
            { positions: ['JavaScript Developer', 'Programist', 'Product Manager', 'Python Developer', 'Front-End Developer', 'Project Manager'] },
            { cities: ['Warszawa', 'Wrocław', 'Kraków', 'Poznań'] }
        ];

        const inputHint = [
            'Nazwa stanowiska',
            'Miasto'
        ];

        const title = [
            { title: 'Twoje doświadczenie' },
            { subtitle: 'Opowiedz, jakie masz doświadczenie i sprawdź swoje możliwości.' }
        ]

        return(
            <div className="step step1">
                <StepHeader title={title[0].title} subtitle={title[1].subtitle} />
                <div className="step-body">
                    <div className="input-wrapper">
                        <Input id="positions" dataSource={dataSource[0].positions} hintText={inputHint[0]} />
                        <Input id="cities" dataSource={dataSource[1].cities} hintText={inputHint[1]} />                        
                    </div>

                    <Checkbox className="step-body__checkbox" label="Możliwość relokacji" />

                    <div>
                        <p className="step-body__text">Lata doświadczenie w zawodzie</p>
                        <RangeSlider />
                        <Checkbox className="step-body__checkbox" label="Nie mam doświdczenia" />
                    </div>
                    <div>
                        <p className="step-body__text">Staż w obecnym miejscu pracy</p>
                        <RangeSlider />
                        <Checkbox className="step-body__checkbox" label="Nie pracuję" />
                    </div>
                </div>

                <div className="btn-group">
                    <RaisedButton className="btn-group__next-btn" label="następny krok" secondary={true} disabled={this.state.disabled}/>
                </div>
            </div>
        )
    }
}