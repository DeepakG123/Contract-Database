import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "", 
            company: "", 
            contract: "" 
      }
    }
    handleChange(event) {
        this.setState({
            [event.target.id] : event.target.value
        })
    } 

    render() {
        console.log(this.state); 
      return (
        <div>
        <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="blue">
            Contract Database
          </Typography>
        </Toolbar>
      </AppBar>
      <TextField
          id="name"
          label="Name"
          value={this.state.name}
          onChange= {this.handleChange.bind(this)}
          margin="normal"
        />
        <br/> 
        <TextField
          id="company"
          label="Company"
          value={this.state.company}
          onChange={this.handleChange.bind(this)}
          margin="normal"
        />
        <br/>
        <TextField
          id="contract"
          label="Contract"
          value={this.state.contract}
          onChange={this.handleChange.bind(this)}
          margin="normal"
        />  
        <br/>
        <Button 
        variant="raised" 
        color="primary"
        onClick = {this.props.onClick} 
        >
        Submit
      </Button>
        </div>
      );
    }
  }
  
  export default Form;
  