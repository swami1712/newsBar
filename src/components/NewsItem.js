import React from "react";

function NewsItem(props) {
  return (
    <div className="col-lg-4">
      <div className="card my-3">
        <img className="card-img-top" src={props.urlToImage} alt="ImageNull" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.newsUrl} className="btn btn-primary btn-dark">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
