// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar/>
        <div>
            <Switch>
            <Route exact path="/general"><News key="general" pageSize={15} countryCode="in" category="general"/></Route>
            <Route exact path="/business"><News key="business" pageSize={15} countryCode="in" category="business"/></Route>
            <Route exact path="/entertainment"><News key="entertainment" pageSize={15} countryCode="in" category="entertainment"/></Route>
            <Route exact path="/sports"><News key="sports" pageSize={15} countryCode="in" category="sports"/></Route>
            <Route exact path="/science"><News key="science" pageSize={15} countryCode="in" category="science"/></Route>
            <Route exact path="/technology"><News key="technology" pageSize={15} countryCode="in" category="technology"/></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}