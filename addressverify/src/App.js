import React, { Component } from 'react';
import './App.css';
import Submit from './Submit.js';
import Collections from './Collections.js';
import './App.sass';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //user data will be imported here upon login
      email: 'milessobhani@gmail.com',
      userName: 'Craig',
      collections: [
        {
          name: 'Important Company 1',
          collTotal: 150,
          collValid: 100,
          collResults: 'www.appdownload.com',
          jobs: [
            {
              jobName: 'job 1',
              time: '3:35 wednesday',
              verifiedTotal: 25,
              verifiedValid: 21,
              jobResults: 'www.jobdownload.com/1'
            },
            {
              jobName: 'job 2',
              time: '12:35 sunday',
              verifiedTotal: 125,
              verifiedValid: 89,
              jobResults: 'www.jobdownload.com/2'
            }
          ]
        },
        {
          name: 'Important Company 2',
          collTotal: 150,
          collValid: 100,
          collResults: 'www.appdownload.com',
          jobs: [
            {
              jobName: 'job 1',
              time: '3:35 wednesday',
              verifiedTotal: 25,
              verifiedValid: 21,
              jobResults: 'www.jobdownload.com/1'
            },
            {
              jobName: 'job 2',
              time: '12:35 sunday',
              verifiedTotal: 125,
              verifiedValid: 89,
              jobResults: 'www.jobdownload.com/2'
            }
          ]
        }
      ]
    }
  }
  render() {
    return (
      <>
        <section class="hero is-medium is-primary is-bold">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                SendMatic
              </h1>
              <h2 class="subtitle">
                Welcome, {this.state.userName}!
              </h2>
            </div>
          </div>
        </section>
        <>
          <Collections collections={this.state.collections} />
        </>
        <div className="Main">
          <Submit />
        </div>
      </>
    );
  }
}

export default App;
