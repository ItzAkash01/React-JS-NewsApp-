
import './App.css';

import React, { Component } from 'react'
import Navbar from './compnents/Navbar';
import News from './compnents/News';


export default class App extends Component {

  render() {
    return (
      <div>
      <Navbar/>
      <News mx-2/>
      </div>
    )
  }
}


