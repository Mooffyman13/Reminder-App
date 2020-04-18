import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import 'style.css';
import firebase from './firebase.js';

class App extends Component {
  constructor()
    render() {
    return (
      <div className='app'>
        <header>
            <div className="wrapper">
              <h1>Reminder App</h1>
                             
            </div>
        </header>
        <div className='container'>
          <section className='textbox'>
                <form onSubmit={this.handleSubmit}>
                  Here is my reminder app that doesn't actually remind you of anything. Created using Fiebase and React.js on stackblitz.com. `
                </form>
          </section>
        </div>
      </div>
    );
  }
}

export default App;