import React, { Component, Fragment } from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import About from '../About/About';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Header />
        <About />
      </Fragment>
    );
  }
}

export default App;
