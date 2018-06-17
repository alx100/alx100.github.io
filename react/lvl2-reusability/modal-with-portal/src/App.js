import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Portal from './Portal';
import Modal from './Modal';
import Toggle from './Toggle';
import Draggable from './Draggable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Draggable draggable />
        {/* <Portal>
          <h1>I'm in a portal!</h1>
        </Portal> */}
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              <button onClick={toggle}>Toggle Menu</button>
              <Modal on={on} toggle={toggle}>
                <h1>I'm in a portal!</h1>
              </Modal>
            </Fragment>
          )}
        </Toggle>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
