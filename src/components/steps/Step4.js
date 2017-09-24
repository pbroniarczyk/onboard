import React from 'react';

// Components
import { BoardHeader } from '../BoardHeader';
import { Input } from './components/Input';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';

const skills = [
  'JavaScript', 'CSS3', 'HTML', 'React', 'Python', 'Sass', 'SQL', 'GraphQL',
];

export class Step4 extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: false
        };
    }

    inputSelectHandler() {
        let skill = document.getElementById('skills').value;
        const emptySkill = document.querySelectorAll('.skill--empty'),
              skillCounter = document.querySelector('.skill-count');

        emptySkill[0].classList.add('skill--full');
        emptySkill[0].classList.remove('skill--empty');
        emptySkill[0].innerText = skill;

        let fullSkill = document.querySelectorAll('.skill--full');
        skillCounter.innerText = fullSkill.length;

        if (fullSkill.length === 6) this.setState({disabled: false});
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
        return(
            <div className="step step4">
                <BoardHeader title={'Umiejętności'} subtitle={'Wyszukaj lub wybierz z listy najpopularniejszych główne umiejętności, które posiadasz.'} />
                <div className="step-body">
                    <div className="step-body__input-wrapper">
                        <AutoComplete
                            id="skills"
                            floatingLabelText="Nazwa umiejętności"
                            filter={AutoComplete.caseInsensitiveFilter}
                            dataSource={skills}
                            onClose={this.inputSelectHandler}
                            menuCloseDelay={0}
                        />
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
                        <span className="skill skill--empty"></span>
                        <span className="skill skill--empty"></span>
                        <span className="skill skill--empty"></span>
                        <span className="skill skill--empty"></span>
                        <span className="skill skill--empty"></span>
                        <span className="skill skill--empty"></span>
                    </div>

                </div>
                <div className="btn-group">
                    <RaisedButton onClick={this.props.prevStepHandler} className="btn-group__prev-btn" label="poprzedni krok" default={true}/>
                    <RaisedButton onClick={this.props.nextStepHandler} className="btn-group__next-btn" label="następny krok" primary={true} disabled={this.state.disabled}/>
                </div>
            </div>
        )
    }
}