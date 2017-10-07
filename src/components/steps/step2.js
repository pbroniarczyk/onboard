import React from 'react';

// Components
import { BoardHeader } from '../BoardHeader';
import { Input } from './components/Input';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export class Step2 extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: false,
            value: '',
            error: ''
        };
    }

    handleChange(event) {
        this.setState(
            {value: event.target.value}, () => {
            if (this.state.value < 1000 || this.state.value > 99999) {
                this.setState({
                    error: 'Wprowadź poprawną kwotę',
                    disabled: true
                });
            } else {
                this.setState({
                    error: '',
                    disabled: false
                });
            }
            }
        );
    }

    render() {
        return(
            <div className="step step2">
                <BoardHeader title={'Warunki współpracy'} subtitle={'Zdecyduj, ile chcesz zarabiasz i określ warunki swojego zatrudnienia.'} />
                <div className="step-body">
                    <div className="step-body__input-wrapper">
                        <TextField
                            onChange={this.handleChange.bind(this)} 
                            value={this.state.value} 
                            type="number" 
                            name="minSalary" 
                            hintText="Minimalne oczekiwania finansowe (netto)" 
                            step="100"
                            errorText={this.state.error}
                        />
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
                    <FlatButton onClick={this.props.prevStepHandler} className="btn-group__prev-btn" label="poprzedni krok" default={true}/>
                    <RaisedButton onClick={this.props.nextStepHandler} className="btn-group__next-btn" label="następny krok" primary={true} disabled={this.state.disabled}/>
                </div>
            </div>
        )
    }
}