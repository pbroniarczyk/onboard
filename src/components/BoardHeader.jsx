import React from 'react';

const BoardHeader = (props) => {
    return(
        <div className="header">
            <h2 className="header__title">{props.title}</h2>
            <p className="header__subtitle">{props.subtitle}</p>
        </div>
    )
};

export default BoardHeader
