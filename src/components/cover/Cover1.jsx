import React from 'react';

import '../../img/astro.png';

const CoverIndex = () => {
    return(
        <div className="cover-wrapper">
            <div className="cover-wrapper__index">
                <img className="cover-wrapper__astro" src="../../img/astro.png" alt="Astronaut" />
                <h3 className="cover-wrapper__title">Witaj<br/>w BlueDot!</h3>
                <p className="cover-wrapper__text">Aby otrzymać spersonalizowane zaproszenia od pracodawców oraz statystyki dotyczące twojej pozycji na rynku uzupełnij brakujące rubryki</p>
            </div>
        </div>
    )
}

export default CoverIndex