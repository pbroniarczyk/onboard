import React from 'react';

// Components
import { BoardHeader } from '../BoardHeader';
import { Input } from './components/Input';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';

const skills = [
  'JavaScript', 'CSS3', 'HTML', 'React', 'Python', 'Sass', 'SQL', 'GraphQL',
];

const classHandler = (element, innerText) => {
    if(element.classList.contains('skill--full')) {
        element.classList.remove('skill--full');
        element.classList.add('skill--empty');
    } else {
        element.classList.add('skill--full');
        element.classList.remove('skill--empty'); 
    }
    element.innerText = innerText;
};

export class Step4 extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: true
        };
    }

    inputSelectHandler() {
        let skill = document.getElementById('skills').value,
            fullSkill = document.querySelectorAll('.skill--full'),
            emptySkill = document.querySelectorAll('.skill--empty'),
            skillCounter = document.querySelector('.skill-count');

        classHandler(emptySkill[0], skill);
        skillCounter.innerText = fullSkill.length + 1;
        if (fullSkill.length === 6) this.setState({disabled: false});
    }

    selectSkill(event) {
        let skillSelected = event.currentTarget.innerText,
            emptySkill = document.querySelectorAll('.skill--empty'),
            skillCounter = document.querySelector('.skill-count'),
            fullSkill = document.querySelectorAll('.skill--full');

        classHandler(emptySkill[0], skillSelected);
        skillCounter.innerText = fullSkill.length + 1;
        event.currentTarget.remove();
        if (fullSkill.length === 6) this.setState({disabled: false});
    }

    removeSkill(event) {
        let skillFull = event.currentTarget,
            fullSkill = document.querySelectorAll('.skill--full'),
            skillCounter = document.querySelector('.skill-count');

        classHandler(skillFull, '');
        skillCounter.innerText = fullSkill.length - 1;
        if (skillFull.length !== 6) this.setState({disabled: true});
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
                        <span className="skill skill--empty" onClick={this.removeSkill.bind(this)}></span>
                        <span className="skill skill--empty" onClick={this.removeSkill.bind(this)}></span>
                        <span className="skill skill--empty" onClick={this.removeSkill.bind(this)}></span>
                        <span className="skill skill--empty" onClick={this.removeSkill.bind(this)}></span>
                        <span className="skill skill--empty" onClick={this.removeSkill.bind(this)}></span>
                        <span className="skill skill--empty" onClick={this.removeSkill.bind(this)}></span>
                    </div>

                </div>
                <div className="btn-group">
                    <FlatButton onClick={this.props.prevStepHandler} className="btn-group__prev-btn" label="poprzedni krok" default={true}/>
                    <RaisedButton onClick={this.props.nextStepHandler} className="btn-group__next-btn" label="następny krok" primary={true} disabled={this.state.disabled}/>
                </div>
            </div>
        )
    }
}