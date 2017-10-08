import React from 'react';

// Components
import { Cover } from './Cover';
import { Steps } from './Steps';
import { Rocket } from './Rocket';
import Confirmed from './Confirmed';


export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.updateUser = this.updateUser.bind(this);

        this.state = {
            step: 0,
            user: {
                mail: '',
                position: '',
                city: '',
                relocate: '',
                salary: '',
                experience: {
                    total: '',
                    last: ''
                },
                work: {
                    type: {
                        employment: false,
                        contractWork: false,
                        contractComission: false,
                        b2b: false,
                    },
                    place: {
                        stacionary: false,
                        remote: false
                    },
                },
                paths: [],
                skills: [],

            }
        };
    }

    nextStep() {
        this.setState({
            step: this.state.step + 1
        });
    }
    prevStep() {
        this.setState({
            step: this.state.step - 1
        });
    }

    updateUser(user) {
        this.setState(() => {
            this.state.user.position = user.position;
            this.state.user.city = user.city;
            this.state.user.mail = user.mail;
            this.state.user.relocate = user.relocate;
            this.state.user.experience = user.experience;
            this.state.user.salary = user.salary;
            this.state.user.work = user.work;
            this.state.user.paths = user.paths;
            this.state.user.skills = user.skills;
        });
    }

    componentWillUpdate() {
        console.log("update board: ", this.state.user);
    }

    render() {
        if(this.state.step !== 5) {
            return(
                <section className="board-section">
                    <div className="board">
                        <Cover user={this.state.user} step={this.state.step} prevStep={this.prevStep}/>
                        <Rocket appState={this.state.step} />
                        <Steps user={this.state.user} userUpdate={this.updateUser} nextStep={this.nextStep} prevStep={this.prevStep} step={this.state.step} />
                    </div>
                </section>
            )
        } else {
            return(
                <section className="board-section">
                    <div className="board">
                        <Confirmed user={this.state.user} />
                    </div>
                </section>
            )
        }
    }
}