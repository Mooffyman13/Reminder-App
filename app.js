import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home.js';
import Reminderinput from './components/reminderinput';
import Reminderoutput from './components/reminderoutput';
import Error from './components/error';
import Navigation from './components/navigation';
import logo from './logo.svg';
import 'style.css';
import firebase from './firebase.js';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
export default App;
