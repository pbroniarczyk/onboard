import React from 'react';

// Components
import RaisedButton from 'material-ui/RaisedButton';

// Assets
import Icon from '../img/icon_envelope.png';

const handleClick = () => location.reload();

const Confirmed = () => {
    return(
        <div className="confirmed">
            <div className="confirmed-wrapper">
                <img className="confirmed__icon" src={Icon} />
                <h2>Sprawdź swoją skrzynkę mailową</h2>
                <p>Na adres <b>example@emplocity.pl</b> <span>nie</span> została wysłana wiadomość z linkiem rejestracyjnym </p>
                <RaisedButton onClick={handleClick} >Odświerz</RaisedButton>
            </div>
        </div>
    )
}

export default Confirmed