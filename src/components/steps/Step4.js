import React from 'react';

// Components
import { BoardHeader } from '../BoardHeader';
// import { Input } from './components/Input';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';

const skills = ['JavaScript', 'CSS3', 'HTML', 'React', 'Python', 'Sass', 'SQL', 'GraphQL',];

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
            disabled: true,
            inputDisabled: false,
            skillCounter: 0
        };
    }

    checkDisabled() {
        const skillCover = document.querySelector('.skill-cloud');
        if (this.state.skillCounter === 6 && !skillCover.classList.contains('skill-cloud--disabled')) {
            this.setState({
                disabled: false,
                inputDisabled: true
            });
            skillCover.classList.add('skill-cloud--disabled');
        } else if (this.state.skillCounter !== 6 || skillCover.classList.contains('skill-cloud--disabled')) {
            this.setState({
                disabled: true,
                inputDisabled: false
            });
            skillCover.classList.remove('skill-cloud--disabled');
        }
    }

    inputSelectHandler() {
        let skill = document.getElementById('skills').value,
            emptySkill = document.querySelectorAll('.skill--empty');

        this.setState(
            {skillCounter: this.state.skillCounter + 1,},
            () => this.checkDisabled()
        );
        classHandler(emptySkill[0], skill);
        
    }

    selectSkill(event) {
        this.setState(
            {skillCounter: this.state.skillCounter + 1},
            () => this.checkDisabled()
        );

        let skillSelected = event.currentTarget.innerText,
            emptySkill = document.querySelectorAll('.skill--empty');
        classHandler(emptySkill[0], skillSelected);
        event.currentTarget.remove();
    }

    removeSkill(event) {
        this.setState(
            {skillCounter: this.state.skillCounter - 1},
            () => this.checkDisabled()
        );

        let skillFull = event.currentTarget;
        classHandler(skillFull, '');
    }

    componentWillUnmount() {
        const user = {
            position: this.props.user.position,
            city: this.props.user.city,
            relocate: this.props.user.relocate,
            experience: {
                total: this.props.user.experience.total,
                last: this.props.user.experience.last,
            },
            salary: this.props.user.salary,
            work: {
                types: {
                    employment: this.props.user.work.types.employment,
                    contractWork: this.props.user.work.types.contractWork,
                    contractComission: this.props.user.work.types.contractComission,
                    b2b: this.props.user.work.types.b2b,
                },
                place: {
                    stationary: this.props.user.work.place.stationary,
                    remote: this.props.user.work.place.remote,
                }
            },
            paths: this.props.user.paths,
            skills: []
        };
        
        const skillsArray = document.querySelectorAll('.skill--full');
        skillsArray.forEach(function(skill) {
            user.skills.push(skill.innerText);
        }, this);

        this.props.userUpdate(user);
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
                            onClose={this.inputSelectHandler.bind(this)}
                            menuCloseDelay={0}
                            disabled={this.state.inputDisabled}
                        />
                    </div>

                    <div className="skill-cloud">
                        <span className="skill-cloud__item" onClick={this.selectSkill.bind(this)}>JavaScript</span>
                        <span className="skill-cloud__item" onClick={this.selectSkill.bind(this)}>Python</span>
                        <span className="skill-cloud__item" onClick={this.selectSkill.bind(this)}>HTML</span>
                        <span className="skill-cloud__item" onClick={this.selectSkill.bind(this)}>CSS3</span>
                        <span className="skill-cloud__item" onClick={this.selectSkill.bind(this)}>React</span>
                        <span className="skill-cloud__item" onClick={this.selectSkill.bind(this)}>Sass</span>
                        <span className="skill-cloud__item" onClick={this.selectSkill.bind(this)}>JavaScript</span>
                        <span className="skill-cloud__item" onClick={this.selectSkill.bind(this)}>Python</span>
                        <span className="skill-cloud__item" onClick={this.selectSkill.bind(this)}>HTML</span>
                        <span className="skill-cloud__item" onClick={this.selectSkill.bind(this)}>CSS3</span>
                        <span className="skill-cloud__item" onClick={this.selectSkill.bind(this)}>React</span>
                        <span className="skill-cloud__item" onClick={this.selectSkill.bind(this)}>Sass</span>
                    </div>

                    <div className="skill-counter">
                        <p>Twoje umiejętności</p>
                        <p><span className="skill-count">{this.state.skillCounter}</span>/6</p>
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