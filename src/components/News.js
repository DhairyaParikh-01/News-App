import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {


    static defaultProps = {
        countryCode: "in",
        pageSize: 6,
        category: "general"
    }

    capitalizeFirstChar = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            totalArticles : 0,
            page: 1
        }
        document.title = `NewsBuddy | ${this.capitalizeFirstChar(this.props.category)} news`;
    }

    // async updateNews(pg){
    //     this.setState({
    //         loading : true
    //     })
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryCode}&category=${this.props.category}&apiKey=f0f7f1a246dc40aa8e98fdc000e9b540&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //     let data = await fetch(url);
    //     data  = await data.json();
    //     this.setState({
    //             articles : data.articles,
    //             page : this.state.page + pg,
    //             loading : false
    //         })
    // }

    async componentDidMount() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryCode}&category=${this.props.category}&apiKey=f0f7f1a246dc40aa8e98fdc000e9b540&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        data = await data.json();
        this.setState({
            articles: data.articles,
            totalArticles: data.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }

    fetchMoreData = async () => {
        this.setState({
            page : this.state.page + 1
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryCode}&category=${this.props.category}&apiKey=f0f7f1a246dc40aa8e98fdc000e9b540&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        data  = await data.json();
        await this.setState({
                articles : this.state.articles.concat(data.articles),
                totalArticles: data.totalResults
            })
      };

    handleNextClick = async () => {
        this.setState({
            loading: true
        })
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryCode}&category=${this.props.category}&apiKey=f0f7f1a246dc40aa8e98fdc000e9b540&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        data = await data.json();
        this.setState({
            articles: data.articles,
            page: this.state.page + 1,
            totalArticles : data.totalResults,
            loading: false
        })
        // await this.setState({ page : this.state.page + 1});
        //  this.updateNews(1);
    }

    handlePreviousClick = async () => {
        this.setState({
            loading: true
        })
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryCode}&category=${this.props.category}&apiKey=f0f7f1a246dc40aa8e98fdc000e9b540&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        data = await data.json();
        this.setState({
            articles: data.articles,
            page: this.state.page - 1,
            totalArticles : data.totalResults,
            loading: false
        })
        // await  this.setState({page : this.state.page - 1});
        // this.updateNews(-1);
    }

    render() {
        return (
            <>
                <h2 className="text-center" style={{margin: '35px 0px'}}>Top Headlines: {this.capitalizeFirstChar(this.props.category)} News</h2>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalArticles}
                    loader={<Spinner/>}>

                <div className="container">
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : "<Title>"} description={element.description ? element.description : "<Description>"} displayurl={element.urlToImage} url={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} />
                            </div>
                         })}
                     </div>

               </div>
                    </InfiniteScroll>
                    {/* <div className="container d-flex justify-content-between my-2" >
                        <button type="button" disabled={this.state.page <= 1} className="btn btn-outline-dark align-center" onClick={this.handlePreviousClick}> ← Previous</button>
                        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} className="btn btn-outline-dark align-middle" onClick={this.handleNextClick}> Next →</button>
                    </div> */}
            </>
        )
    }
}

export default News