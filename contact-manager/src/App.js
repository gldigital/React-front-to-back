import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="Greg" email="greg@gmail.com" phone="555-333-2222" />
        <Contact name="John" email="john@gmail.com" phone="555-333-1111" />
      </div>
    );
  }
}

export default App;
