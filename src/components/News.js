import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
      
    constructor(props){
        super();
        this.state = {
            articles : [] ,
             page : 1
        }
    }

    async  componentDidMount(){
        // console.log("This is componentDidMont() method");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1dacf441fd604630af77146d67276363&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        data  = await data.json();
        this.setState({articles : data.articles, totalArticles : data.totalResults})
    }

    handleNextClick =  async () =>{
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1dacf441fd604630af77146d67276363&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            data  = await data.json();
            this.setState({
                page : this.state.page + 1,
                articles : data.articles
            })
    }

    handlePreviousClick = async () =>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1dacf441fd604630af77146d67276363&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        data  = await data.json();
        this.setState({
            page : this.state.page - 1,
            articles : data.articles
        })
        // console.log("Previous button is clicked");
    }

    render() {
        return (
            <div className="container my-3">
                <h2>News Buddy-Top Headlines:</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                   return <div className="col-md-4" key={element.url}>
                        <NewsItem  title={element.title?element.title.slice(0,45):"<Title>"} description={element.description?element.description.slice(0,40):"<Description>"} displayurl={element.urlToImage} url={element.url}/>
                    </div>
                    })}
                    <div className="container d-flex justify-content-between my-2" >
                    <button type="button" disabled={this.state.page <=1} className="btn btn-outline-dark" onClick={this.handlePreviousClick}> ← Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles/this.props.pageSize)} className="btn btn-outline-dark" onClick={this.handleNextClick}> Next →</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News