import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './App';

// Assets
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
injectTapEventPlugin();
