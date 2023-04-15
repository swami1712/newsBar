import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';

export default class News extends Component {
    articles = []
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            pageSize: 20        // page: this.page
        }
    }

    async componentDidMount() {

        let url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=fcddded3fc954d08a4f4b585a7278780&page=1&pageSize=20"

        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }
    handlePrev = async () => {
        let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=fcddded3fc954d08a4f4b585a7278780&page${this.state.page - 1}&pageSize=20`
        this.setState({
            loading: true
        })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles })


        this.setState({
            page: this.state.page - 1,
            loading: false
        })
    }
    handleNext = async () => {

        let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=fcddded3fc954d08a4f4b585a7278780&page=${this.state.page + 1}&pageSize=20`;
        this.setState({
            loading: true
        })
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(this.state.totalResults)
        // if (Math.ceil(this.state.totalResults / this.state.pageSize) > 1) {

        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1,
            loading: false
        })
        // }


    }
    render() {

        return (


            < div >

                <div div className="container my-4" >
                    <h2>NewsBar-Top headlines!</h2>
                    {this.state.loading && [<Loading />]}
                    <div className="row">

                        {
                            this.state.articles.map((element) => {
                                // console.log(element)
                                return < NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} />
                            })
                        }
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-dark" disabled={this.state.page <= 1} onClick={this.handlePrev}>Previous</button>
                        <button className="btn btn-dark" disabled={Math.ceil(this.state.page + 1 >= this.state.totalResults / this.state.pageSize)} onClick={this.handleNext}>Next</button>
                    </div>
                </div>
            </div >
        )
    }
}
