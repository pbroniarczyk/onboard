import React from 'react';
import classNames from 'classnames';

// Components
import { BoardHeader } from '../BoardHeader';
import { RangeSlider } from './components/RangeSlider';
import { Input } from './components/Input';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
// import CareerPath from './components/CareerPath';

{/*<CareerPath onCheck={this.handleChange} key={i} isChecked={e} />*/}
export class Step3 extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: true,
            check: [false,false,false,false],
            checked: '',
            class: ''
        };
    }

    handleChange() {
        console.log(this)
    }

    // componentWillMount() {
    //     this.setState({
    //         checked: this.props.isChecked
    //     });
    // }

    componentWillUpdate() {
        // console.log('UPDATEs');
    }

    handleClick(e) {
        console.log(this)
        // this.handleCheck();
        this.setState({
            checked: !this.state.e
        });
    }

    // handleCheck() {
    //     console.log(this);
    // }

    render() {
        return(
            <div className="step step3">
                <BoardHeader title={'Ścieżki kariery'} subtitle={'Wybierz stanowisko, na którym chcesz się znaleźć po zdobyciu większego doświadczenia i umiejętności.'} />
                <div className="step-body">
                    {this.state.check.map((e,i) => {
                        return (
                            <div className={classNames('path', { 'path--checked': this.state.check[i]})} key={i} onClick={this.handleClick.bind(this)}>
                                <span className="path__percentage">38%</span>
                                <span className="path__title">Front-End Developer</span>
                                <Checkbox ref={this.props} ref={i} className="path__checkbox" checked={this.state.e} />
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