import React, { Component } from 'react';
import './App.css';
import Form from './Form.js'; 
import Display from './Display.js'; 
import firebase from 'firebase'; 
import Button from '@material-ui/core/Button'; 

let contracts_temp = []; 

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyB-ywU1pkPHmvWC9f_eW6RQjRMCyr-ZoTY",
  authDomain: "contract-database.firebaseapp.com",
  databaseURL: "https://contract-database.firebaseio.com",
  projectId: "contract-database",
  storageBucket: "contract-database.appspot.com",
  messagingSenderId: "205529720817"
};
 firebase.initializeApp(config);

 var database = firebase.database();




class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      contracts: [], 
      refs: []
  }
}

updateField(newValue ) {
  var newContract = firebase.database().ref().push(); 
  newContract.set({
    name: newValue.name, 
    company: newValue.company, 
    contract: newValue.contract 
  }); 
}

componentWillMount(){
  firebase.database().ref().on("value", (snapshot) => {
    let contracts1 = []; 
    let refs1 = []; 
    snapshot.forEach(function(data){
      refs1.push(data.key)
      contracts1.push(data.val()); 
    }); 
    this.setState({
      contracts: contracts1, 
      refs: refs1
    })
})
}


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Form
        updateParent  = {newValue => this.updateField(newValue)}
        /> 
        <br/> 
        <Display
        contracts = {this.state.contracts}
        /> 
      </div>
    );
  }
}

export default App;
