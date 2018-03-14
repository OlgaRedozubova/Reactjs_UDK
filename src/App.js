import React, { Component } from 'react';
//import {BrowserRouter as Router, Route} from 'react-router-dom';
import './assets/styles/App.css';
import Header from './components/blocks/Header/';
import Home from "./containers/Home/";
//import Products from "./containers/Products/";
//import Contacts from "./containers/Contacts/";
//import { navList } from './constants/Constants.js';
import GazbetonUDK from "./containers/GazbetonUDK/index";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <Home/>
          <GazbetonUDK/>
        </div>
    );
  }
}

export default App;
