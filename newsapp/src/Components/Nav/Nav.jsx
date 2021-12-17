import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/form">Introduce una noticia nueva</Link></li>
      <li><Link to="/list">Lista de noticias</Link></li>
    </ul>
  </nav>
  }
}

export default Nav;
