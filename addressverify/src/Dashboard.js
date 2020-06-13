import React, { Component } from 'react';
import Collections from './Collections.js';
import Axios from "axios";
import Footer from './Footer.js'
import NavBar from './NavBar.js'

class Dashboard extends Component {
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
              jobResults: [['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],]
            },
            {
              jobName: 'job 2',
              time: '12:35 sunday',
              verifiedTotal: 125,
              verifiedValid: 89,
              jobResults: [['filleremail@something.com',true, 'email valid'],
            ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
            ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
            ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
            ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
            ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
            ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
            ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
            ['filleremail@wrong.com,', false, 'failure message'],]
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
              jobResults: [['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],]
            },
            {
              jobName: 'job 2',
              time: '12:35 sunday',
              verifiedTotal: 125,
              verifiedValid: 89,
              jobResults: [['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],['filleremail@something.com',true, 'email valid'],
              ['filleremail@wrong.com,', false, 'failure message'],]
            }
          ]
        }
      ],
    }
    this.handleNew = this.handleNew.bind(this);
    this.saveJob = this.saveJob.bind(this);
  }

  saveJob(data, coll, name) {
    let temp = this.state.collections;
    let newJob = {
      jobName: name,
      time: Date(),
      verifiedTotal: data.length,
      verifiedValid:
        data.reduce((a, c) => {
          return a + c[1]
        }, 0),
      jobResults:data
    }
    temp[coll].collTotal += newJob.verifiedTotal;
    temp[coll].collValid += newJob.verifiedValid;
    temp[coll].jobs.push(newJob)
    this.setState({
      collections: temp
    })
  }

  handleNew(e) {
    //Currently using local data, no DB yet
    //production
    // Axios.post('http://sendmatic.com/app/collection', {
    //dev
    Axios.post('/collection', {
      data: e,
    })
      .then((res) => {
        let temp = this.state.collections;
        let newCollData =
        {
          name: res.data,
          collTotal: 0,
          collValid: 0,
          jobs: []
        };
        temp.push(newCollData);
        this.setState({
          collections: temp
        })
      })
      .catch((err) => {console.log(err)})
  }

  render() {
    return (
      <>
        <section className="hero is-medium is-primary">
          <div className="hero-body">
          <NavBar user={this.props.user} signOut={this.props.signOut}/>
            <div className="container">
              <h1 className="title">
                SendMatic
              </h1>
              <h2 className="subtitle">
                Welcome, {this.props.user.displayName}!
              </h2>
            </div>
          </div>
        </section>
        <>
          <Collections newJob={this.saveJob} new={this.handleNew} 
            collections={this.state.collections} />
        </>
        <Footer/>
      </>
    );
  }
}

export default Dashboard;