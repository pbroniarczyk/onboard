import React from 'react';

// Components
// import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


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
        const user = { mail: document.getElementById('user-mail').value };
        this.props.userProfileUpdate(user)
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