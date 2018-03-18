import React from 'react';

// Components
import FlatButton from 'material-ui/FlatButton';

export default class Cover5 extends React.Component {
    render() {
        return(
            <div className="cover-wrapper">
                <div className="cover-wrapper__cover5">
                    <h3 className="cover-wrapper__title">Rakieta z Twoimi danymi właśnie dotarła!</h3>
                    <p className="cover-wrapper__text">Uzupełniłeś swój profil zawodowy, dzięki czemu pracodawcy będą sami wysyłać do Ciebie zaproszenia do współpracy na warunek, które podałeś. Aby zapisać wszystkie informacje podaj swój e-mail bądź zaloguj się za pomocą facebooka lub linkedina.</p>
                    <div className="btn-group">
                        <FlatButton onClick={this.props.prevStepHandler} className="btn-group__prev-btn" label="poprzedni krok" default={true}/>
                    </div>
                </div>
            </div>
        )
    }
}