import './css/main.sass';
import React from 'react';
import { render } from 'react-dom';

// Component
import { Navbar } from './components/Navbar';
import { Board } from './components/Board';

class App extends React.Component {
    render() {
        return(
            <div className="wrapper">
                <Navbar/>
                <Board/>
            </div>
        );
    }
}

render(
    <App/>,
    document.getElementById('app')
); 