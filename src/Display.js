import React, { Component } from 'react'; 
import firebase from 'firebase'; 
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { common } from '@material-ui/core/colors';

 // Initialize Firebase

class Display extends Component {


    render() {
        console.log(this.props.contracts)
        return (
            <div> 
             <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Contract</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.props.contracts.map(contract => {
            return (
              <TableRow>
                <TableCell>{contract.name}</TableCell>
                <TableCell>{contract.company}</TableCell>
                <TableCell>{contract.contract}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
            </div> 
        ); 
    }
}

export default Display; 