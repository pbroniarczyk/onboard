import React from 'react';

// Components
import { Cover } from './Cover';
import { Steps } from './Steps';
import { Rocket } from './Rocket';

export class Board extends React.Component {
    render() {
        return(
            <section className="board-section">
                <div className="board">
                    <Cover />
                    <Rocket />
                    <Steps />
                </div>
            </section>
        )
    }
}