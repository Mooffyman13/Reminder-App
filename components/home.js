import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import 'style.css';
import firebase from './firebase.js';

class App extends Component {
  constructor()
    render(){
      return(
          <div class="container">
            <div class="item">
            <button>Add Reminder</button>
            <button>Add Reminder</button>
        </div>
    </div>
      )
    }
}

export default App;