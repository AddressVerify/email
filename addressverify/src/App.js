import React from 'react';
import './App.css';
import './App.sass';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import logo from './Logo.png'
import Dashboard from './Dashboard';
import SignUp from './SignUp';


const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class App extends React.Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
    return (
      <>
        {
          this.props.user
            ? <Dashboard user={this.props.user} signOut={this.props.signOut}/>
            :
              <SignUp signInWithGoogle={this.props.signInWithGoogle}/>
        }
      </>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
