import React from 'react';

// Components
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';

// Assets
import './summary.css';
import Icon from '../../img/icon_envelope.png';

const handleClick = () => window.location.reload();

export default class Summary extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() { this.setState({ open: true });}
    handleClose() { this.setState({ open: false });}

    render() {
        return (
            <div className="summary">
                <div className="summary-wrapper">
                    <img className="summary__icon" src={Icon} alt=""/>
                    <h2>Sprawdź swoją skrzynkę mailową</h2>
                    <p>Na adres <b>{this.props.user.mail}</b> <span>nie</span> została wysłana wiadomość z linkiem rejestracyjnym </p>
                    <div className="summary__btns">
                        <FlatButton onClick={handleClick}>Odświerz</FlatButton>
                        <FlatButton style={{padding: '0 10px'}} onClick={this.handleOpen}>Podsumowanie</FlatButton>
                    </div>
                    <Dialog
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        bodyClassName="summary-wrapper__dialog"
                    >
                        <div className="summary-wrapper__data">
                            <p className="summary-wrapper__label">Stanowisko: <span className="summary-wrapper__item">{this.props.user.position}</span></p>
                            <p className="summary-wrapper__label">E-mail: <span className="summary-wrapper__item">{this.props.user.mail}</span></p>
                            <p className="summary-wrapper__label">Miasto: <span className="summary-wrapper__item">{this.props.user.city}</span></p>
                            <p className="summary-wrapper__label">Relokacja: <span className="summary-wrapper__item">{this.props.user.relocate ? 'Tak' : 'Nie'}</span></p>
                            <p className="summary-wrapper__label">Pensja: <span className="summary-wrapper__item">{this.props.user.salary}</span></p>
                            <p className="summary-wrapper__label">Doświadczenie (ogółem - lat): <span className="summary-wrapper__item">{this.props.user.experience.total}</span></p>
                            <p className="summary-wrapper__label">Doświadczenie (w ostatnim miejscu pracy - lat): <span className="summary-wrapper__item">{this.props.user.experience.last}</span></p>
                            <Divider/>
                            <div className="summary-wrapper__label summary-wrapper__label--column">Rodzaj umowy: 
                                <ul>
                                    {this.props.user.work.type.employment ? <li><span className="summary-wrapper__item">Umowa o pracę </span></li> : false}
                                    {this.props.user.work.type.contractWork ? <li><span className="summary-wrapper__item">Umowa o dzieło </span></li> : false}
                                    {this.props.user.work.type.contractComission ? <li><span className="summary-wrapper__item">Umowa zlecenie </span></li> : false}
                                    {this.props.user.work.type.b2b ? <li><span className="summary-wrapper__item">B2B</span></li> : false}
                                </ul>
                            </div>
                            <Divider/>
                            <p className="summary-wrapper__label">Tryb pracy: 
                                <span className="summary-wrapper__item">{
                                    this.props.user.work.place.stationary && this.props.user.work.place.remote
                                        ? 'Stacjonarnie / zdalnie' 
                                        : this.props.user.work.place.remote
                                            ? 'Stacjonarnie / zdalnie'
                                            : 'Stacjonarnie'
                                }</span>
                            </p>
                        </div>
                        <div className="summary-wrapper__lists">
                            <span className='summary-chips'>
                                <p className="summary-chips__label">Wybrane ścieżki kariery: </p>
                                {this.props.user.paths.map((e,i) => <span key={i} className="summary-wrapper__item"><Chip className="summary-chips__chip">{e}</ Chip></span>)}
                            </span>
                            <span className='summary-chips'>
                                <p className="summary-chips__label">Umiejętności: </p>
                                {this.props.user.skills.map((e,i) => <span key={i} className="summary-wrapper__item"><Chip className="summary-chips__chip">{e}</ Chip></span>)}
                            </span>
                        </div>
                    </Dialog>
                </div>
            </div>
        )
    }
}