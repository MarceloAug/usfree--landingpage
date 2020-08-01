import React, { Component } from 'react';



export default class Text extends Component {
  
    

    render(){
       
        return(
            <div>
                <p className={this.props.class}>{this.props.text}</p>
            </div>
        );
    }
}