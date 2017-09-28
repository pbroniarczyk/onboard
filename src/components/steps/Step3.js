import React from 'react';

// Components
import { BoardHeader } from '../BoardHeader';
import { RangeSlider } from './components/RangeSlider';
import { Input } from './components/Input';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import PathContainer from './components/PathContainer';


export class Step3 extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: false
        };
    }

    render() {
        return(
            <div className="step step3">
                <BoardHeader title={'Ścieżki kariery'} subtitle={'Wybierz stanowisko, na którym chcesz się znaleźć po zdobyciu większego doświadczenia i umiejętności.'} />
                <div className="step-body">
                    <PathContainer />
                </div>
                <div className="btn-group">
                    <FlatButton onClick={this.props.prevStepHandler} className="btn-group__prev-btn" label="poprzedni krok" default={true}/>
                    <RaisedButton onClick={this.props.nextStepHandler} className="btn-group__next-btn" label="następny krok" primary={true} disabled={this.state.disabled}/>
                </div>
            </div>
        )
    }
}