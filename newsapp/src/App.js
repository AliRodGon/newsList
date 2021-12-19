
import './App.css';
import React, { Component } from "react";
import {BrowserRouter} from 'react-router-dom';
import {userContext} from './Context/userContext';
import Head from './Components/Head';
import Main from './Components/Main';
import Footer from './Components/Footer'

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: ''
      };
    }

    componentDidMount() {
      // get and set currently logged in user to state
    }

 login=(name)=>this.setState({ user: name })

logout=()=>this.setState({user:''})

  render() {

    const paquetito = {
      user : this.state.user,
      login: this.login,
      logout: this.logout
    }

    return (
      <div className="App">
        <BrowserRouter>
        <userContext.Provider value={paquetito}>
          <Head/>
          <Main/>
        </userContext.Provider >
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}

export default App;
