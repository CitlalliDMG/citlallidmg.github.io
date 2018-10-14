import React, { Component, Fragment } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Header />
      </Fragment>
    );
  }
}

export default App;
