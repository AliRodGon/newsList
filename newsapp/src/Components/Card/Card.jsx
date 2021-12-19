import axios from "axios";
import React, { Component } from "react";

class Card extends Component {
   
      render() {
        return (
          <div>
            <p>{this.props.description}</p>
        
              <button onClick={this.props.delete}>Borrar noticia</button>
          </div>
        );
      }
    }
 

export default Card;
