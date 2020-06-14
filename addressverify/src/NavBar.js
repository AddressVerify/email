import React from 'react';
import Logo from './Logo.png';

export default function NavBar(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleBurger = () => setIsOpen(!isOpen);
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          
          <button className={`anchor navbar-burger burger ${isOpen ? 'is-active':''}`}
            aria-label="menu"
            aria-expanded={isOpen} data-target="navbarBasicExample" onClick={toggleBurger}>
            <span aria-hidden={!isOpen}></span>
            <span aria-hidden={!isOpen}></span>
            <span aria-hidden={!isOpen}></span>
          </button>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${isOpen ? 'is-active':''}`}>
          <div className="navbar-start">
              <img src={Logo} className={"logo navbar-item"} alt="SendMatic Logo">
              </img>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                  {
                    props.user
                    ? ''
                    : <button className="button is-light">
                        <strong>Sign up</strong>
                      </button>
                  }

                <button className="button is-light" onClick={props.signOut}>
                  {
                    props.user
                    ? <strong>Sign Out</strong>
                    : <strong>Login</strong>
                  }
          </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}