import './css/main.sass';
import React from 'react';

// Material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlue700 } from 'material-ui/styles/colors.js';


// Component
import Navbar from './components/Navbar.jsx';
import { Board } from './components/Board.jsx';

const theme = getMuiTheme({
    palette: {
        primary1Color: lightBlue700,
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

export default App;