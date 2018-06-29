import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './route';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';
import Header from './component/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        { Routes }
        <Header />
      </div>
    );
  }
}

export default App;
