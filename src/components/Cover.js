import React from 'react';

// Components
import Cover1 from './cover/Cover1';
import { Cover2 } from './cover/Cover2';
import { Cover3 } from './cover/Cover3';
import Cover5 from './cover/Cover5';

export class Cover extends React.Component {
    render() {
        switch (this.props.step) {
            case 0:
                return(
                    <section id="cover">
                        <Cover1 />
                    </section>
                );
                break;
            case 1:
                return(
                    <section id="cover">
                        <Cover2 />
                    </section>
                );
                break;
            case 2:
                return(
                    <section id="cover">
                        <Cover3 />
                    </section>
                );
                break;

            case 3:
                return(
                    <section id="cover">
                        <Cover3 />
                    </section>
                );
                break;

            case 4:
                return(
                    <section id="cover">
                        <Cover5 prevStepHandler={this.props.prevStep} />
                    </section>
                );
                break;
        
            default:
                return(
                    <section id="cover">
                        DEFAULT
                    </section>
                );
                break;
        }
    }
}