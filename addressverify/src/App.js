import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Submit from './Submit.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'milessobhani@gmail.com'
    }
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Submit/>
      </header>
    </div>
  );        
  }
}

export default App;
