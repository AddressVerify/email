import React, { Component } from 'react';
import './App.css';
import Submit from './Submit.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      //user data will be imported here upon login
      email:'milessobhani@gmail.com'
    }
  }
  render(){
    return (
      <div className="App">
          <h1>
            SendMatic
          </h1>
          <div className="Main">
            <Submit/>
          </div>
      </div>
    );        
  }
}

export default App;
