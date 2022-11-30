import React, { Component } from 'react'
// import PropTypes from 'prop-types's

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
                                <a className="nav-link" href="/General">Home</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/Business">business</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/Entertainment">entertainment</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/Sports">sports</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/Science">science</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/Technology">technology</a>
                            </li>                            
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default navbar
