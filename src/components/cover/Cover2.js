import React from 'react';

// Components
import { BoardHeader } from '../BoardHeader';

export class Cover2 extends React.Component {
    render() {
        return(
            <div className="cover-wrapper">
                <div className="cover-wrapper__cover2">
                    <BoardHeader title={'Podsumowanie'} subtitle={'Twoje doświadczenie i oczekiwania.'} />
                    <section className="cover-body">
                        <div className="section">
                            <h1 className="section__title">{this.props.user.position}</h1>
                            <p className="section__subtitle">{this.props.user.city}</p>
                            <p className="section__subtitle">1-2 lata doświadczenia</p>
                        </div>
                        {/*<div className="section">
                            <h1 className="section__title">5600zł - 9300zł</h1>
                            <p className="section__subtitle">Rekomendowany przedział zarobków</p>
                        </div>*/}
                    </section>
                </div>
            </div>
        )
    }
}