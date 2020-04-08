import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import home from './components/home';
import reminderinput from './components/reminderinput';
import reminderoutput from './components/reminderoutput';
import error from './components/error';
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
             <Route path="/" component={home} exact/>
             <Route path="/reminderinput" component={reminderinput}/>
             <Route path="/reminderoutput" component={reminderoutput}/>
            <Route component={error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
export default App;
