import React, { Component } from 'react'
// import PropTypes from 'prop-types's
import {Link} from "react-router-dom";

export class navbar extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">News Buddy</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <Link className="nav-link" to="/general">Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/business">business</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/entertainment">entertainment</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/sports">sports</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/science">science</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/technology">technology</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default navbar
