import './css/main.sass';
import React from 'react';
import { render } from 'react-dom';

// Material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { red600 } from 'material-ui/styles/colors.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Component
import Navbar from './components/Navbar';
import { Board } from './components/Board';

injectTapEventPlugin();

const theme = getMuiTheme({
    palette: {
        primary1Color: red600,
    }
});

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