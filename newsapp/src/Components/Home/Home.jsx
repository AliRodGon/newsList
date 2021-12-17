import React, { Component } from "react";

import FormLogin from "../FormLogin/FormLogin";

class Home extends Component {
  

  render() {
    return (
      <div>
        <p>Soy home, registrate</p>

        <FormLogin/>
      </div>
    );
  }
}

export default Home;
