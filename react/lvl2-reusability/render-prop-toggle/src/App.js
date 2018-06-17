import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleChildrenProp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <Toggle /> */}
        {/* <Toggle
          render={({ on, toggle }) => (
            <Fragment>
              {on && <h1>Show and hide me</h1>}
              <button onClick={toggle}>Toggle</button>
            </Fragment>
          )}
        /> */}
        {/* <Toggle
          children={({ on, toggle }) => (
            <Fragment>
              {on && <h1>Show and hide me</h1>}
              <button onClick={toggle}>Toggle</button>
            </Fragment>
          )}
        /> */}
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              {on && <h1>Show and hide me</h1>}
              <button onClick={toggle}>Toggle</button>
            </Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
