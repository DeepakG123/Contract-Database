import React, { Component } from 'react'; 

class Display extends Component {

    render() {

        console.log(this.props.contracts)
        return (
            <div> 
           {this.props.contracts.map(contract => 
           <div> 
           <p> {contract[0]} </p>
           <p> {contract[1]} </p>
           <p> {contract[2]} </p>
           </div>)}    
            </div> 
        ); 
    }
}

export default Display; 