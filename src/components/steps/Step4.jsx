import React from 'react';

// Components
import BoardHeader from '../board/BoardHeader.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';

const skills = [
    'JavaScript', 'CSS3', 'HTML', 'React', 'Python',
    'Sass', 'SQL', 'GraphQL', 'C++', 'Ruby', 'Redux',
    'Java', 'Bootstrap', 'Foundation', 'Flask',
    'TypeScript', 'Angular', 'Vue', 'NodeJS', 'Git',
    'Webpack', 'Gulp', 'Grunt'
];
const skillCloud = [...skills];

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

class Step4 extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: true,
            inputDisabled: false,
            skillCounter: 0
        };

        this.inputSelectHandler = this.inputSelectHandler.bind(this);
        this.removeSkill = this.removeSkill.bind(this);
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

    selectSkill(element, index) {
        this.setState(
            {skillCounter: this.state.skillCounter + 1},
            () => this.checkDisabled()
        );

        let skillSelected = element,
            emptySkill = document.querySelectorAll('.skill--empty');
        classHandler(emptySkill[0], skillSelected);
        skillCloud.splice(index, 1)
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
        const user = { skills: [] };
        const skillsArray = document.querySelectorAll('.skill--full');
        skillsArray.forEach(skill => user.skills.push(skill.innerText), this);

        this.props.userProfileUpdate(user);
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
                            disabled={this.state.inputDisabled}
                            fullWidth={true}
                        />
                    </div>

                    <div className="skill-cloud">
                        {skillCloud.map((e,i) => <span key={i} className="skill-cloud__item" onClick={this.selectSkill.bind(this, e, i)}>{e}</span>)}
                    </div>

                    <div className="skill-counter">
                        <p>Twoje umiejętności</p>
                        <p><span className="skill-count">{this.state.skillCounter}</span>/6</p>
                    </div>
                    <div className="skill-wrapper">
                        <span className="skill skill--empty" onClick={this.removeSkill}></span>
                        <span className="skill skill--empty" onClick={this.removeSkill}></span>
                        <span className="skill skill--empty" onClick={this.removeSkill}></span>
                        <span className="skill skill--empty" onClick={this.removeSkill}></span>
                        <span className="skill skill--empty" onClick={this.removeSkill}></span>
                        <span className="skill skill--empty" onClick={this.removeSkill}></span>
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
export default Step4;