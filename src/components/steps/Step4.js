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

    selectSkill(event) {
        const skillSelected = event.currentTarget.innerText,
              emptySkill = document.querySelectorAll('.skill--empty'),
              skillCounter = document.querySelector('.skill-count');

        emptySkill[0].classList.add('skill--full');
        emptySkill[0].classList.remove('skill--empty');
        emptySkill[0].innerText = skillSelected;

        let fullSkill = document.querySelectorAll('.skill--full');
        skillCounter.innerText = fullSkill.length;

        event.currentTarget.remove();

        if (fullSkill.length === 6) this.setState({disabled: false});
    }

    render() {
        console.log(this.props)
        return(
            <div className="step step4">
                <BoardHeader title={'Umiejętności'} subtitle={'Wyszukaj lub wybierz z listy najpopularniejszych główne umiejętności, które posiadasz.'} />
                <div className="step-body">
                    <div className="step-body__input-wrapper">
                        <input type="text" id="skills" placeholder="Nazwa umiejętności" />
                    </div>

                    <div className="skill-cloud">
                        <span className="skill-cloud__item" onClick={this.selectSkill.bind(this)}>JavaScript</span>
                        <span className="skill-cloud__item" onClick={this.selectSkill.bind(this)}>Python</span>
                        <span className="skill-cloud__item" onClick={this.selectSkill.bind(this)}>HTML</span>
                        <span className="skill-cloud__item" onClick={this.selectSkill.bind(this)}>CSS3</span>
                        <span className="skill-cloud__item" onClick={this.selectSkill.bind(this)}>React</span>
                        <span className="skill-cloud__item" onClick={this.selectSkill.bind(this)}>Sass</span>
                    </div>

                    <div className="skill-counter">
                        <p>Twoje umiejętności</p>
                        <p><span className="skill-count">0</span>/6</p>
                    </div>
                    <div className="skill-wrapper">
                        <span className="skill skill--empty"><button className="skill__btn" type="button">x</button></span>
                        <span className="skill skill--empty"><button className="skill__btn" type="button">x</button></span>
                        <span className="skill skill--empty"><button className="skill__btn" type="button">x</button></span>
                        <span className="skill skill--empty"><button className="skill__btn" type="button">x</button></span>
                        <span className="skill skill--empty"><button className="skill__btn" type="button">x</button></span>
                        <span className="skill skill--empty"><button className="skill__btn" type="button">x</button></span>
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