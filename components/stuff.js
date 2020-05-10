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
                  Wireframe:<br/>
	                Usability:<br/>
	                The website is designed to be as usable as possible. The create a reminder page only contains what is absolutely necessary. This creates a simple space for people to input their reminders without distracting from its purpose.<br/>
                  Aesthetics:<br/>
	                The website has a neutral colour palette to simplify the process of creating reminders. This means that the user isn't distracted from the process and only sees what the page is designed  for.<br/>
	                Social: (wide range of users)<br/>
	                The website design fits a range of users as the design is simple and easy to follow which makes it easy for people of all ages to access.  This means that the website could be shown to someone with little online experience and they would be able to understand.<br/>
	                Error Prevention:<br/>
	                As shown in my input testing, the input system corrects the user when they input an invalid date. The time input system has a built in function that stops users from inputting incorrect times. This means that when someone tries to type in 12:65 for example it will go straight to the am/pm selection and have the time as 12:06. Although the date input does not have this function, it will warn a user before they submit the reminder that the date is incorrect. If the user tries to input the date as February 31st, an alert box will show up warning the user that their date is either incorrect or incomplete.<br/><br/>
                  Font Choice:<br/>
	                Aesthetics:<br/>
	                I have chosen 'Andale mono' which is a monospace font. This is an easy to read font that suits the style and function of the website. A cursive or sans font wouldn't have fitted the website better so this was my final decision.<br/>
	                Usability:<br/>
	                The font is easy to read which helps the user navigate the website with ease. If you were visually impaired, the font has a high contrast and large spacing to help you read what is on the page. This is what makes the site accessible for everyone.<br/>
	                Accessibility:<br/>
	                As the website is accessible on both desktop and mobile devices it is easy and convenient for people to use the website. It is accessible to anyone who has access to an internet browser<br/><br/>
	                Intellectual Property: <br/>
                  Data:<br/>
	                Is it private?<br/>
                  As this is only a test platform it is hard to explain the privacy nature of the website as it is not fully functional. As the data would only be held against each person it would be as secure as it could be. This alongside the security of Firebase's database would make the data very private.<br/>

                </form>
          </section>
        </div>
      </div>
    );
  }
}

export default App;