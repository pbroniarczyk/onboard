import React from 'react';

// Components
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Input } from './components/Input';


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
        
        if (mail && password) {
            console.log('NOT DISABLED')
            console.log(password.length)
            this.setState({
                disabled: !this.state.disabled
            });
        }
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
                        <TextField
                        hintText="E-mail"
                        fullWidth={true}
                        />
                        <TextField
                        hintText="Hasło"
                        fullWidth={true}
                        />

                        <input onChange={this.inputValidate.bind(this)} type="text" id="user-mail" placeholder="E-mail" />
                        <input onChange={this.inputValidate.bind(this)} type="text" id="user-password" placeholder="Hasło" />
                    </section>
                    <RaisedButton className="step-body__btn step-body--signin" style={btnStyle} primary={true} label="Wchodzę" disabled={this.state.disabled} />
                </div>
            </div>
        )
    }
}