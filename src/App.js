import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import TourList from './components/TourList/Index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <TourList/>
      </div>
    );
  }
}

export default App;

