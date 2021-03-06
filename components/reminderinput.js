import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import 'style.css';
import firebase from './firebase.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      date:'',
      time:'',
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      time: this.state.time

    }
    itemsRef.push(item);
    this.setState({
      title: '',
      description: '',
      date: '',
      time: ''
    });
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          description: items[item].description,
          date: items[item].date,
          time: items[item].time
        });
      }
      this.setState({
        items: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }
  render() {
    return (
      <div className='app'>
        <header>
            <div className="wrapper">
              <h1>Reminder App</h1>
                             
            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
                <form onSubmit={this.handleSubmit}>
                  <p>Enter your reminders below </p>
                  Title:
                  <input type="text" name="title" onChange={this.handleChange} value={this.state.username} />
                  Description:
                  <input type="text" name="description" onChange={this.handleChange} value={this.state.description} />
                  Date:
                  <input type="Date" name="date"  onChange={this.handleChange} value={this.state.date} />
                  Time:
                  <input type="Time" name="time"  onChange={this.handleChange} value={this.state.time} />
                  <button>Add Reminder</button>
                </form>
          </section>
          <section className='display-item'>
              <div className="wrapper">
                <ul>
                  {this.state.items.map((item) => {
                    return (
                      <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.description}<br/>
                        {item.date}<br/>
                        {item.time}<br/>
                          <button onClick={() => this.removeItem(item.id)}>Remove Reminder</button>
                        </p>
                      </li>
                    )
                  })}
                </ul>
              </div>
          </section>
        </div>
      </div>
    );
  }
}
export default App;