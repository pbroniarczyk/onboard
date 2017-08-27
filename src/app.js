import './css/main.sass';
import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render() {
    return(
      <div className="container-fluid">
        <ul className="list">
          <li className="list__item">item 1</li>
          <li className="list__item">item 2</li>
          <li className="list__item list__item--last">item 3</li>
        </ul>
      </div>
    );
  }
}

render(
  <App/>,
  document.getElementById('app')
); 