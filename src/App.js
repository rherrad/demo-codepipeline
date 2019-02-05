import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to {process.env.REACT_APP_STAGE} !
          </p>
          <p>
            Built from commit:<br />
            <a
              className="App-link"
              href={`https://github.com/sysless/demo-codepipeline/commit/${process.env.REACT_APP_RELEASE}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {process.env.REACT_APP_RELEASE.substring(0, 8)}
            </a>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
