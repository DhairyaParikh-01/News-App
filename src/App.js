// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,Route,Switch} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state = {
    progress : 0
  }

  setProgress = (prog)=>{
    this.setState({
      progress : prog
    })
  }
  render() {
    return (
      <Router>
        <LoadingBar
        color='#f71946'
        progress={this.state.progress}
        />
        <NavBar/>
        <div>
            <Switch>
            <Route exact path="/general"><News setProgress={this.setProgress} key="general" pageSize={15} countryCode="in" category="general"/></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} key="business" pageSize={15} countryCode="in" category="business"/></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" pageSize={15} countryCode="in" category="entertainment"/></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} key="sports" pageSize={15} countryCode="in" category="sports"/></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} key="science" pageSize={15} countryCode="in" category="science"/></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" pageSize={15} countryCode="in" category="technology"/></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}