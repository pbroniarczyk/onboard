import React from 'react';
import classNames from 'classnames';

// Components
import BoardHeader from '../BoardHeader.jsx';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import paths from '../../data/paths.json';

export class Step3 extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: true,
            checked: [false, false, false, false],
            hovered: [false, false, false, false],
            class: ''
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const checkArray = this.state.checked;
        const index = e.currentTarget.getAttribute('data-index'),
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

    handleMouseOn(index) {
        const array = this.state.hovered;
        array.splice(index, 1, true); 
        this.setState({ hovered: array }) 
    }
    handleMouseOut(index) {
        const array = this.state.hovered;
        array.splice(index, 1, false); 
        this.setState({ hovered: array })
    }

    componentWillUnmount() {
        const user = { paths: [] };
        const pathsArray = document.querySelectorAll('.path--checked .path__title');
        pathsArray.forEach(path => user.paths.push(path.innerText), this);

        this.props.userProfileUpdate(user)
    }

    render() {
        return(
            <div className="step step3">
                <BoardHeader title={'Ścieżki kariery'} subtitle={'Wybierz stanowisko, na którym chcesz się znaleźć po zdobyciu większego doświadczenia i umiejętności.'} />
                <div className="step-body">
                    {this.state.checked.map((e,i) => {
                        return (
                            <div className={classNames('path', { 'path--checked': this.state.checked[i]})} data-index={i} key={i} onClick={this.handleClick}>
                                <span className="path__percentage">{paths[i].percentage + '%'}</span>
                                <span 
                                    onMouseOver={this.handleMouseOn.bind(this, i)} 
                                    onMouseOut={this.handleMouseOut.bind(this, i)} 
                                    className="path__title">
                                    {paths[i].name}
                                    <span className={`title__tooltip ${this.state.hovered[i] ? "title__tooltip--visible" : ""}`}>{paths[i].name}</span>
                                </span>
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