import React, { Component } from 'react'
import loading from './loading.gif'

export class spinner extends Component {
    render() {
        return (
            <div className="text-center align-self-center">
                <img src={loading} alt="Loading"/>
                <h4>Loading..</h4>
            </div>
        )
    }
}

export default spinner
