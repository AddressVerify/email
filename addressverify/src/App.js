import React from 'react';
import './App.css';
import './App.sass';
// import withFirebaseAuth from 'react-with-firebase-auth'
// import * as firebase from 'firebase/app';
import 'firebase/auth';
// import firebaseConfig from './firebaseConfig';
import Dashboard from './Dashboard';
import SignUp from './SignUp';


// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const firebaseAppAuth = firebaseApp.auth();
// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
// };

export default class App extends React.Component {
  // Legacy Sign in
  // const {
  //   user,
  //   signOut,
  //   signInWithGoogle,
  // } = this.props;
  


  render() {
    this.props = {
      user:'Miles',
      signOut:'N/A'
    }
    return (
      <>

        <Dashboard user={this.props.user} signOut={this.props.signOut}/>


        {/* {
          this.props.user
            ? <Dashboard user={user} signOut={signOut}/>
            :
              <SignUp signInWithGoogle={signInWithGoogle}/>
        } */}
      </>
    );
  }
}

