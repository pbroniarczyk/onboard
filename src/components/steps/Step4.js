import React from 'react';

// Components
import { BoardHeader } from '../BoardHeader';
import { Input } from './components/Input';
import RaisedButton from 'material-ui/RaisedButton';


export class Step4 extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: true
        };
    }

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

    render() {
        return(
            <div className="step step4">
                <BoardHeader title={'Umiejętności'} subtitle={'Wyszukaj lub wybierz z listy najpopularniejszych główne umiejętności, które posiadasz.'} />
                <div className="step-body">
                    <div className="step-body__input-wrapper">
                        <input onChange={this.handleChange.bind(this)} type="text" id="skills" placeholder="Nazwa umiejętności" />
                    </div>

                    <div className="skill-cloud">
                        <span className="skill-cloud__item">JavaScript</span>
                        <span className="skill-cloud__item">JavaScript</span>
                        <span className="skill-cloud__item">JavaScript</span>
                        <span className="skill-cloud__item">JavaScript</span>
                        <span className="skill-cloud__item">JavaScript</span>
                    </div>

                    <p>Twoje umiejętności</p>
                    <div className="skill-wrapper">
                        <span className="skill skill--full"></span>
                        <span className="skill skill--epty"></span>
                        <span className="skill skill--epty"></span>
                        <span className="skill skill--epty"></span>
                        <span className="skill skill--epty"></span>
                        <span className="skill skill--epty"></span>
                    </div>

                </div>
                <div className="btn-group">
                    <RaisedButton onClick={this.props.prevStepHandler} className="btn-group__prev-btn" label="poprzedni krok" default={true}/>
                    <RaisedButton className="btn-group__next-btn" label="następny krok" primary={true} disabled={this.state.disabled}/>
                </div>
            </div>
        )
    }
}