'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Repo from './Repo';
import './style.scss';

class App extends React.Component {
  render () {
    return (
      <div>
          <h1 className="title">RNComponents</h1>
          <Repo />
          <footer className="footer">
            <p>Copyright 2015 <a href="https://github.com/RNComponents">RNComponents</a></p>
          </footer>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement('div'))
);
