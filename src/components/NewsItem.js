import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl } = this.props;
        return (

            <>


                <div className="col-lg-4">
                    <div className="card my-3">
                        <img className="card-img-top" src={imgUrl} alt="ImageNull" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} className="btn btn-primary btn-dark">Read more</a>
                        </div>
                    </div>
                </div>


            </ >
        )
    }
}
