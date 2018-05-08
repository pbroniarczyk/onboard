import React from 'react';

// Components
import Cover1 from './Cover1.jsx';
import Cover2 from './Cover2.jsx';
import Cover3 from './Cover3.jsx';
import Cover5 from './Cover5.jsx';

// Assets 
import "./cover.css";


class Cover extends React.Component {
    render() {
        switch (this.props.step) {
            case 0:
                return(
                    <section id="cover">
                        <Cover1 />
                    </section>
                );
            case 1:
                return(
                    <section id="cover">
                        <Cover2 user={this.props.user} />
                    </section>
                );
            case 2:
                return(
                    <section id="cover">
                        <Cover3 user={this.props.user} />
                    </section>
                );

            case 3:
                return(
                    <section id="cover">
                        <Cover3 user={this.props.user} />
                    </section>
                );

            case 4:
                return(
                    <section id="cover">
                        <Cover5 prevStepHandler={this.props.prevStep} />
                    </section>
                );
        
            default:
                return(
                    <section id="cover">
                        DEFAULT
                    </section>
                );
        }
    }
}

export default Cover;