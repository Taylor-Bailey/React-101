import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';


class App extends Component {
  render() {
    return ( 
      <div className="App">
      {/*This is a comment */}
      <Header title ="Wecome to Heck"/>
      <Header title ="Give your soul to Gosh" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
    {/*Parentheses allow multiple lines in return */}
  }
}

export default App;
