import React from 'react';

// Components
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';

// Assets
import Icon from '../img/icon_envelope.png';

const handleClick = () => location.reload();

export default class Confirmed extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
        };
    }

    handleOpen() { this.setState({ open: true });}
    handleClose() { this.setState({ open: false });}

    render() {
        console.log(this.props.user);
        return (
            <div className="confirmed">
                <div className="confirmed-wrapper">
                    <img className="confirmed__icon" src={Icon} />
                    <h2>Sprawdź swoją skrzynkę mailową</h2>
                    <p>Na adres <b>{this.props.user.mail}</b> <span>nie</span> została wysłana wiadomość z linkiem rejestracyjnym </p>
                    <FlatButton onClick={handleClick}>Odświerz</FlatButton>
                    <FlatButton onClick={this.handleOpen.bind(this)}>Podsumowanie</FlatButton>
                    <Dialog
                        title="Podsumowanie"
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        <p className="confirmed-wrapper__label">Stanowisko: <span className="confirmed-wrapper__item">{this.props.user.position}</span></p>
                        <p className="confirmed-wrapper__label">E-mail: <span className="confirmed-wrapper__item">{this.props.user.mail}</span></p>
                        <p className="confirmed-wrapper__label">Miasto: <span className="confirmed-wrapper__item">{this.props.user.city}</span></p>
                        <p className="confirmed-wrapper__label"><span className="confirmed-wrapper__item">{this.props.user.relocate ? 'Relokacja: TAK' : false}</span></p>
                        <p className="confirmed-wrapper__label">Pensja: <span className="confirmed-wrapper__item">{this.props.user.salary}</span></p>
                        <p className="confirmed-wrapper__label">Doświadczenie (ogółem): <span className="confirmed-wrapper__item">{this.props.user.experience.total}</span></p>
                        <p className="confirmed-wrapper__label">Doświadczenie (w ostatnim miejscu pracy): <span className="confirmed-wrapper__item">{this.props.user.experience.last}</span></p>
                        <Divider/>
                        <p className="confirmed-wrapper__label">
                            Rodzaj umowy: 
                            {this.props.user.work.type.employment ? <span className="confirmed-wrapper__item">Umowa o pracę </span> : false}
                            {this.props.user.work.type.contractWork ? <span className="confirmed-wrapper__item">Umowa o dzieło </span> : false}
                            {this.props.user.work.type.contractComission ? <span className="confirmed-wrapper__item">Umowa zlecenie </span> : false}
                            {this.props.user.work.type.b2b ? <span className="confirmed-wrapper__item">B2B</span> : false}
                        </p>
                        <Divider/>
                        <p className="confirmed-wrapper__label"><span className="confirmed-wrapper__item">{this.props.user.work.place.stationary ? 'Praca na miejscu: TAK' : false}</span></p>
                        <p className="confirmed-wrapper__label"><span className="confirmed-wrapper__item">{this.props.user.work.place.remote ? 'Praca zdalna: TAK' : false}</span></p>
                        <Divider/>
                        <span className='confirmed-chips'>
                            Wybrane ścieżki kariery: {this.props.user.paths.map((e,i) => <span key={i} className="confirmed-wrapper__item"><Chip className="confirmed-chips__chip">{e}</ Chip></span>)}
                        </span>
                        <span className='confirmed-chips'>
                            Umiejętności: {this.props.user.skills.map((e,i) => <span key={i} className="confirmed-wrapper__item"><Chip className="confirmed-chips__chip">{e}</ Chip></span>)}
                        </span>
                    </Dialog>
                </div>
            </div>
        )
    }
}