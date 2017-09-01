import React from 'react';

// Components
import { BoardHeader } from '../BoardHeader';
import { Input } from './components/Input';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

export class Step2 extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: true
        };
    }

    render() {
        return(
            <div className="step step2">
                <BoardHeader title={'Warunki współpracy'} subtitle={'Zdecyduj, ile chcesz zarabiasz i określ warunki swojego zatrudnienia.'} />
                <div className="step-body">
                    <div className="step-body__input-wrapper">
                        <input type="number" name="minSalary" placeholder="Minimalne oczekiwania finansowe (netto)" step="100" />
                    </div>

                    <section className="section-wrapper">
                        <p className="section-wrapper__title">Forma zatrudnienia</p>
                        <div className="contract-types">
                            <Checkbox className="contract-types__checkbox" label="Umowa o pracę" />
                            <Checkbox className="contract-types__checkbox" label="Umowa o dzieło" />
                            <Checkbox className="contract-types__checkbox" label="Umowa zlecenia" />
                            <Checkbox className="contract-types__checkbox" label="Umowa B2B" />
                        </div>
                    </section>

                    <section className="section-wrapper">
                        <p className="section-wrapper__title">Miejsce pracy</p>
                        <div className="job-location">
                            <Checkbox className="job-location__checkbox" label="Stacjonarnie" />
                            <Checkbox className="job-location__checkbox" label="Zdalnie" />
                        </div>
                    </section>
                </div>

                <div className="btn-group">
                    <RaisedButton className="btn-group__prev-btn" label="poprzedni krok" default={true}/>
                    <RaisedButton className="btn-group__next-btn" label="następny krok" secondary={true} disabled={this.state.disabled}/>
                </div>
            </div>
        )
    }
}