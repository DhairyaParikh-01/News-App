import React  from 'react'
import loading from './loading.gif'

const spinner = () => {
        return (
            <div className="text-center align-self-center">
                <img src={loading} alt="Loading"/>
                <h4>Loading..</h4>
            </div>
        )
}

export default spinner