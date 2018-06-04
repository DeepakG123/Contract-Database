import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "", 
        company: "", 
        contract: "" 
  }
}

onClick() {
  this.setState({
    [event.target.id] : event.target.value
})
}

  render() {
    return (
      <div className="App">
        <Form
        onClick = {this.onClick}
        /> 
      </div>
    );
  }
}

export default App;
