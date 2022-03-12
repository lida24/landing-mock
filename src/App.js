import React from 'react';

import logo from './logo.svg';
import './App.css';
import styles from './App.module.scss';


function App() {
  return (
      <div className='App'>
          <header className='App-header'>
              <img src={logo} className='App-logo' alt='logo' />
              <p>
                  Edit <code>App.js</code> and save to reload.
              </p>
              <a
                  className={styles.AppLink}
                  href='https://reactjs.org'
                  target='_blank'
                  rel='noopener noreferrer'
              >
                  Learn React
              </a>
          </header>
      </div>
  );
}

export default App;
