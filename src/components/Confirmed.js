import React from 'react';

// Components
import FlatButton from 'material-ui/FlatButton';

// Assets
import Icon from '../img/icon_envelope.png';

const handleClick = () => location.reload();

export default class Confirmed extends React.Component {
    render() {
        return(
            <div className="confirmed">
                <div className="confirmed-wrapper">
                    <img className="confirmed__icon" src={Icon} />
                    <h2>Sprawdź swoją skrzynkę mailową</h2>
                    <p>Na adres <b>{this.props.user.mail}</b> <span>nie</span> została wysłana wiadomość z linkiem rejestracyjnym </p>
                    <FlatButton onClick={handleClick}>Odświerz</FlatButton>
                </div>
            </div>
        )
    }
}