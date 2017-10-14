import React from 'react';

// Components
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// import { Input } from './components/Input';


export class Step5 extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: true
        };
    }

    inputValidate() {
        let mail = document.getElementById('user-mail').value,
            password = document.getElementById('user-password').value;
        
        if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.][a-zA-Z0-9-.]+$/.test(mail) && password.length >= 6) {
            this.setState({
                disabled: false
            });
        } else {
            this.setState({
                disabled: true
            });
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
            paths: this.props.user.paths,
            skills: this.props.user.skills,
            mail: ''
        };

        const mail = document.getElementById('user-mail').value;
        user.mail = mail;
        this.props.userUpdate(user);
    }

    render() {
        const btnStyle = {
            padding: 0,
            borderRadius: '5px'
        };

        return(
            <div className="step step5">
                <div className="step-body">
                    <section className="social">
                        <button className="step-body__btn step-body--facebook" type="button">Facebook</button>
                        <button className="step-body__btn step-body--linkedin" type="button">LinkedIn</button>
                    </section>
                    <span className="separator">lub</span>
                    <section className="input-group">
                        <input onChange={this.inputValidate.bind(this)} type="mail" id="user-mail" placeholder="E-mail" />
                        <input onChange={this.inputValidate.bind(this)} type="password" id="user-password" placeholder="Hasło" />
                    </section>
                    <RaisedButton 
                        className="step-body__btn step-body--signin" 
                        onClick={this.props.nextStepHandler}
                        style={btnStyle} 
                        primary={true} 
                        label="Wchodzę" 
                        disabled={this.state.disabled} />
                </div>
            </div>
        )
    }
}