import React from 'react';

// Components
import StepHeader from './components/StepHeader';
import { Input } from './components/Input';

export class Step1 extends React.Component {
    render() {

        const dataSource = [
            { positions: ['JavaScript Developer', 'Programist', 'Product Manager'] },
            { cities: ['Warszawa', 'Wrocław', 'Kraków', 'Poznań'] }
        ];

        const inputHint = [
            'Nazwa stanowiska',
            'Miasto'
        ];

        return(
            <div className="step step1">
                <StepHeader />
                <Input dataSource={dataSource[0].positions} hintText={inputHint[0]} />
                <Input dataSource={dataSource[1].cities} hintText={inputHint[1]} />
            </div>
        )
    }
}