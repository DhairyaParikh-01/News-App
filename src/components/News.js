import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        countryCode : "in",
        pageSize : 5,
        category : "general"
    }

    // static propTypes = {
    //     countryCode : this.PropTypes.String,
    //     pageSize : this.PropTypes.number,
    //     category : this.PropTypes.String
    // }
      
    constructor(){
        super();
        this.state = {
            articles : [] ,
            loading : true,
             page : 1
        }
    }

    async  componentDidMount(){
        // console.log("This is componentDidMont() method");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryCode}&category=${this.props.category}&apiKey=1dacf441fd604630af77146d67276363&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        data  = await data.json();
        this.setState({articles : data.articles, totalArticles : data.totalResults, loading : false})
    }

    handleNextClick =  async () =>{
            this.setState({
                loading : true
            })
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryCode}&category=${this.props.category}&apiKey=1dacf441fd604630af77146d67276363&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            data  = await data.json();
            this.setState({
                page : this.state.page + 1,
                articles : data.articles,
                loading : false
            })
    }

    handlePreviousClick = async () =>{
        this.setState({
            loading : true
        })
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryCode}&category=${this.props.category}&apiKey=1dacf441fd604630af77146d67276363&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        data  = await data.json();
        this.setState({
            page : this.state.page - 1,
            articles : data.articles,
            loading : false
        })
        // console.log("Previous button is clicked");
    }

    render() {
        return (
            <div className="container my-3">
                <h2>News Buddy-Top Headlines:</h2>
                {this.state.loading && <Spinner/>}
                {
                    !this.state.loading &&
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem  title={element.title?element.title:"<Title>"} description={element.description?element.description:"<Description>"} displayurl={element.urlToImage} url={element.url}/>
                    </div>
                    })}
                    <div className="container d-flex justify-content-between my-2" >
                    <button type="button" disabled={this.state.page <=1} className="btn btn-outline-dark align-center" onClick={this.handlePreviousClick}> ← Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles/this.props.pageSize)} className="btn btn-outline-dark align-middle" onClick={this.handleNextClick}> Next →</button>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default News