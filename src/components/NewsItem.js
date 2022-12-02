import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let  {title, description, displayurl, url, author, date} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={displayurl?displayurl:"https://jkfenner.com/wp-content/uploads/2019/11/default.jpg"}  alt="loading failed"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted"> -By {author} on {new Date(date).toGMTString()}</small></p>
                            <a href={url} target="_blank" className="btn btn-outline-info">Read More..</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
