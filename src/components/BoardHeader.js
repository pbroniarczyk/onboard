import React from 'react';

export class BoardHeader extends React.Component {
    render() {
        return(
            <div className="header">
                <h2 className="header__title">{this.props.title}</h2>
                <p className="header__subtitle">{this.props.subtitle}</p>
            </div>
        )
    }

}
