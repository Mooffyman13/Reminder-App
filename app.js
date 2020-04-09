import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import home from './components/home.js';
import reminderinput from './components/reminderinput.js';
import stuff from './components/stuff.js';
import error from './components/error.js';
import Navigation from './components/navigation.js';
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
             <Route path="/" component={home} exact/>
             <Route path="/reminderinput" component={reminderinput}/>
             <Route path="/stuff" component={stuff}/>
            <Route component={error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
export default App;
