import React, { Component } from "react";
import {userContext} from '../../Context/userContext'


class FormLogin extends Component {

  static contextType = userContext

  constructor(props) {
    super(props)
    this.name = React.createRef(); // crear la referencia
    this.state = {
    }
  }

handleSubmit = event => {
  event.preventDefault();
  const name = this.name.current.value   
  const { user, login } = this.context
  login(name);
console.log(this.context.user)
};

  render() {
    return <div>
                  <h2>Hola {this.context.user}</h2>
                  <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Nombre:  </label>
                    <input type="text" id="name" name="name" ref={this.name}/>
                    <input type="submit"></input>
                  </form>
              </div>
  }
}

export default FormLogin;
