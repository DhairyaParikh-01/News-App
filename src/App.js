// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {

const apiKey = process.env.REACT_APP_NEWS_API_4;
const [progress, setProgress] = useState(0)

const setProg = (prog)=>{
  setProgress(prog);
  }

    return (
      <Router>
        <LoadingBar
        color='#f71946'
        progress={progress}
        />
        <NavBar/>
        <div>
            <Switch>
            <Route exact path="/general"><News setProgress={setProg} apiKey={apiKey} key="general" pageSize={15} countryCode="in" category="general"/></Route>
            <Route exact path="/business"><News setProgress={setProg} apiKey={apiKey} key="business" pageSize={15} countryCode="in" category="business"/></Route>
            <Route exact path="/entertainment"><News setProgress={setProg} apiKey={apiKey} key="entertainment" pageSize={15} countryCode="in" category="entertainment"/></Route>
            <Route exact path="/sports"><News setProgress={setProg} apiKey={apiKey} key="sports" pageSize={15} countryCode="in" category="sports"/></Route>
            <Route exact path="/science"><News setProgress={setProg} apiKey={apiKey} key="science" pageSize={15} countryCode="in" category="science"/></Route>
            <Route exact path="/technology"><News setProgress={setProg} apiKey={apiKey} key="technology" pageSize={15} countryCode="in" category="technology"/></Route>
          </Switch>
        </div>
      </Router>
    )
}

export default App