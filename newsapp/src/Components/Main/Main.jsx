import React, { Component } from "react";
import {Route, Routes} from 'react-router-dom';
import Home from '../Home/Home';
import FormNews from '../FormNews/FormNews';
import List from '../List/List';


class Main extends Component {
  render() {
    return <main>
      <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/form" element={<FormNews/>} />
          <Route path="/list" element={<List/>} />
      </Routes>
</main>;
  }
}

export default Main;
