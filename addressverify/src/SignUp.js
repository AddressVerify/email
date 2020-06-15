import React from 'react';
import google from './google.png'

export default function SignUp(props) {
  return (
  <div className="card card-sizer">
  <header className="card-header">
    <p className="card-header-title">
      Sign Up
    </p>
  </header>
  <div className="card-content">
    <div className="content">
    <div className="container fluid">
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input" />
        </div>
      </div>

      <div className="field">
        <label className="label">Username</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" type="text" placeholder="Text input" />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
        <p className="help is-success"></p>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-danger" type="email" placeholder="Email input"/>
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p className="help is-danger"></p>
      </div>
    </div>
    </div>
  </div>
  <footer className="card-footer">
      <div className="field is-grouped">
        <div className="control">
          <button className="button">Submit</button>
        </div>
        <div className="control">
          <button className="button is-light">Cancel</button>
        </div>
      </div>
      <div className="field">
      <button onClick={props.signInWithGoogle} className={'image-medium anchor'}>
        <img src={google} alt="Sign in with Google"></img>
      </button>
      </div>
  </footer>
</div>



  );
}