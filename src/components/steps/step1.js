import React from 'react';

// Components
import { StepHeader } from './components/StepHeader';
import { RangeSlider } from './components/RangeSlider';
import { Input } from './components/Input';
import Checkbox from 'material-ui/Checkbox';

export class Step1 extends React.Component {
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
                <Input dataSource={dataSource[0].positions} hintText={inputHint[0]} />
                <Input dataSource={dataSource[1].cities} hintText={inputHint[1]} />
                <Checkbox label="Możliwość relokacji" />
                <RangeSlider />
                <RangeSlider />
            </div>
        )
    }
}