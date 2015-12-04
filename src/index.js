'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Repo from './Repo';

class App extends React.Component {
  render () {
    return (
      <div>
          <h1>RNComponents</h1>
          <Repo />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement('div'))
);
