import React from 'react';

// Components
import Cover1 from './cover/Cover1';
import { Cover2 } from './cover/Cover2';

export class Cover extends React.Component {
    render() {
        return(
            <section id="cover">
                
                <Cover2 />
            </section>
        );
    }
}