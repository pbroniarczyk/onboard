import React from 'react';

// Components
import CoverIndex from './cover/CoverIndex';

export class Cover extends React.Component {
    render() {
        return(
            <section id="cover">
                <CoverIndex />
            </section>
        );
    }
}