import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    const capitalizeFirstChar = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalArticles, setTotalArticles] = useState(0);
    const [page, setPage] = useState(1)

    // constructor(props) {
    //     super(props);
    //     // document.title = `NewsBuddy | ${this.capitalizeFirstChar(props.category)} news`;
    // }

    const updateNews = async () =>{
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.countryCode}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        data = await data.json();
        setArticles(data.articles)
        setTotalArticles(data.totalResults)
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `NewsBuddy | ${capitalizeFirstChar(props.category)} news`;
        updateNews();
    }, [])          



    // async componentDidMount() { }

const fetchMoreData = async () => {
        setPage(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.countryCode}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        data  = await data.json();
        setArticles(articles.concat(data.articles))
        setTotalArticles(data.totalResults)
      };

const handleNextClick = async () => {
        setPage(page = 1)
        updateNews();
    }

const handlePreviousClick = async () => {
        setPage(page - 1)
        updateNews();
    }

        return (
            <>
                <h2 className="text-center" style={{margin: '90px 0px'}}>Top Headlines: {capitalizeFirstChar(props.category)} News</h2>
                {loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalArticles}
                    loader={<Spinner/>}>

                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : "<Title>"} description={element.description ? element.description : "<Description>"} displayurl={element.urlToImage} url={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} />
                            </div>
                         })}
                     </div>

               </div>
                    </InfiniteScroll>
                    {/* <div className="container d-flex justify-content-between my-2" >
                        <button type="button" disabled={page <= 1} className="btn btn-outline-dark align-center" onClick={this.handlePreviousClick}> ← Previous</button>
                        <button type="button" disabled={page + 1 > Math.ceil(totalArticles / props.pageSize)} className="btn btn-outline-dark align-middle" onClick={this.handleNextClick}> Next →</button>
                    </div> */}
            </>
        )
}

News.defaultProps = {
    countryCode: "in",
    pageSize: 6,
    category: "general"
}

export default News