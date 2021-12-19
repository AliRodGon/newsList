import React, { Component } from "react";
import Nav from "../Nav/Nav";
import {userContext} from '../../Context/userContext'

class Head extends Component {

  static contextType = userContext
  
  render() {
    return (
      <>
       <Nav />
       
          <h2>Hola {this.context.user}</h2>
        
      </>
    );
  }
}

export default Head;
