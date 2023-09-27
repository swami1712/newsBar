import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";

export default function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  let pageSize = 5; // pageSize is constant

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fcddded3fc954d08a4f4b585a7278780&page=${page}&pageSize=${pageSize}`;
      const response = await fetch(url);
      const data = await response.json();
      setTotalResults(data.totalResults);
      setArticles(data.articles);
      setLoading(false);
    }

    fetchNews();
  }, [page]);

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = async () => {
    if (page * pageSize < totalResults) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <div className="container my-4">
        <h2>NewsBar-Top headlines!</h2>
        {loading && <Loading />}
        <div className="row">
          {articles.map((element) => (
            <NewsItem
              key={element.title}
              title={element.title}
              description={element.description}
              imgUrl={
                element.urlToImage
                  ? element.urlToImage
                  : "https://imgs.search.brave.com/UA-pyyM6Wp945k41Uv6YAUpAWJY7SVpL_1zpT278B_g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/MTcwNTg2NC9waG90/by90aGUtd29yZHMt/YnJlYWtpbmctbmV3/cy1vbi1hbi1hYnN0/cmFjdC1iYWNrZ3Jv/dW5kLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1ydDVWb3Rx/LUlyM2pzVG5fb2JJ/SDdUREs1N0g5MmJ3/UzN6dWlNQnI1ZHNZ/PQ"
              }
              newsUrl={element.url}
              dateOfPublish={element.publishedAt}
            />
          ))}
        </div>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-dark"
            disabled={page <= 1}
            onClick={handlePrev}
          >
            Previous
          </button>
          <button
            className="btn btn-dark"
            disabled={page * pageSize >= articles.totalResults}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
