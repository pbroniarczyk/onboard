import React from 'react';
import classNames from 'classnames';

// Components
import { BoardHeader } from '../BoardHeader';
// import { RangeSlider } from './components/RangeSlider';
// import { Input } from './components/Input';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';


export class Step3 extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: true,
            checked: [false, false, false, false],
            class: ''
        };
    }

    handleClick(e) {
        const index = e.currentTarget.getAttribute('data-index'),
              checkArray = this.state.checked,
              start_index = index,
              remove = 1,
              removed_elements = checkArray.splice(start_index, remove, !checkArray[index]);

        this.setState({
            checked: checkArray
        });

        for (let i = 0; i < checkArray.length; i++) {
            let element = checkArray[i];
            if (element) {
                return this.setState({disabled: false});
            } else {
                this.setState({disabled: true});
            }
            
        }
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
                type: {
                    employment: this.props.user.work.type.employment,
                    contractWork: this.props.user.work.type.contractWork,
                    contractComission: this.props.user.work.type.contractComission,
                    b2b: this.props.user.work.type.b2b,
                },
                place: {
                    stationary: this.props.user.work.place.stationary,
                    remote: this.props.user.work.place.remote,
                }
            },
            paths: []
        };
        
        const pathsArray = document.querySelectorAll('.path--checked .path__title');
        pathsArray.forEach(function(path) {
            user.paths.push(path.innerText);
        }, this);

        this.props.userUpdate(user);
    }

    render() {
        return(
            <div className="step step3">
                <BoardHeader title={'Ścieżki kariery'} subtitle={'Wybierz stanowisko, na którym chcesz się znaleźć po zdobyciu większego doświadczenia i umiejętności.'} />
                <div className="step-body">
                    {this.state.checked.map((e,i) => {
                        return (
                            <div className={classNames('path', { 'path--checked': this.state.checked[i]})} data-index={i} key={i} onClick={this.handleClick.bind(this)}>
                                <span className="path__percentage">38%</span>
                                <span className="path__title">Front-End Developer</span>
                                <Checkbox ref={'checkbox'+i} className="path__checkbox" checked={this.state.checked[i]} />
                            </div>
                        )
                    })}
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