import React from 'react';

// Components
import BoardHeader from '../board/BoardHeader.jsx';

const Cover2 = (props) => {
    return(
        <div className="cover-wrapper">
            <div className="cover-wrapper__cover2">
                <BoardHeader title={'Podsumowanie'} subtitle={'Twoje doświadczenie i oczekiwania.'} />
                <section className="cover-body">
                    <div className="section">
                        <h1 className="section__title">{props.user.position}</h1>
                        <p className="section__subtitle">{props.user.city}</p>
                        <p className="section__subtitle">1-2 lata doświadczenia</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Cover2