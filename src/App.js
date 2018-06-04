import React, { Component } from 'react';
import './App.css';
import Form from './Form.js'; 
import Display from './Display.js'; 

let contracts_temp = []; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contracts: [] 
  }
}

updateField(newValue ) {
  contracts_temp.push([newValue.name,newValue.company, newValue.contract ])
  console.log(contracts_temp)
  this.setState({
      contracts: contracts_temp
  }
  )
}

  render() {
    console.log(this.state.contracts)
    return (
      <div className="App">
        <Form
        updateParent  = {newValue => this.updateField(newValue)}
        /> 
        <Display
        contracts = {this.state.contracts}
        /> 
      </div>
    );
  }
}

export default App;
