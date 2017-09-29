import React from 'react';

// Components
import { BoardHeader } from '../BoardHeader';
import { RangeSlider } from './components/RangeSlider';
import { Input } from './components/Input';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import CareerPath from './components/CareerPath';
// import PathContainer from './components/PathContainer';


export class Step3 extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: true,
            check: [false,false,true,false]
        };
    }

    handleCheck(event) {
        console.log(this);
    }

    render() {
        return(
            <div className="step step3">
                <BoardHeader title={'Ścieżki kariery'} subtitle={'Wybierz stanowisko, na którym chcesz się znaleźć po zdobyciu większego doświadczenia i umiejętności.'} />
                <div className="step-body">
                    {this.state.check.map((e,i) => <CareerPath key={i} onCheck={this.handleCheck} isChecked={e} />)}
                    <span className="careerPath-desc">% osób wybiera tę ścieżkę</span>
                </div>
                <div className="btn-group">
                    <FlatButton onClick={this.props.prevStepHandler} className="btn-group__prev-btn" label="poprzedni krok" default={true}/>
                    <RaisedButton onClick={this.props.nextStepHandler} className="btn-group__next-btn" label="następny krok" primary={true} disabled={this.state.disabled}/>
                </div>
            </div>
        )
    }
}