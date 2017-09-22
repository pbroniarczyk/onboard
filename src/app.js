import './css/main.sass';
import React from 'react';
import { render } from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import blue500 from 'material-ui/styles/colors.js';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const theme = getMuiTheme({
    palette: {
        primary1Color: blue500,
    }
});

// Component
import Navbar from './components/Navbar';
import { Board } from './components/Board';

class App extends React.Component {
    render() {
        return(
            <MuiThemeProvider muiTheme={theme}>
                <div className="wrapper">
                    <Navbar/>
                    <Board/>
                </div>
            </MuiThemeProvider>
        );
    }
}

render(
    <App/>,
    document.getElementById('app')
); 