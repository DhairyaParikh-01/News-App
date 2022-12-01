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
        <div>
          <NavBar/>
            <Switch>
            <Route exact path="/general"><News key="general" pageSize={6} countryCode="in" category="general"/></Route>
            <Route exact path="/business"><News key="business" pageSize={6} countryCode="in" category="business"/></Route>
            <Route exact path="/entertainment"><News key="entertainment" pageSize={6} countryCode="in" category="entertainment"/></Route>
            <Route exact path="/sports"><News key="sports" pageSize={6} countryCode="in" category="sports"/></Route>
            <Route exact path="/science"><News key="science" pageSize={6} countryCode="in" category="science"/></Route>
            <Route exact path="/technology"><News key="technology" pageSize={6} countryCode="in" category="technology"/></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}