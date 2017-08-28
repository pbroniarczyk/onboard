import React from 'react';

export class Input extends React.Component {
    render() {
        return(
            <div className="input">
                <input type="text" name="position" placeholder="Nazwa stanowiska" />
            </div>
        )
    }
}