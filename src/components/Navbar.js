import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  // const changedUrl = useContext(UrlContext);
  // console.log(changedUrl);
  let url;
  const handleClick = (query) => {
    url = `https://newsapi.org/v2/everything?q=${query}&apiKey=fcddded3fc954d08a4f4b585a7278780`;
    props.changeUrl(url);
    console.log(url);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            NewsBar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      aria-current="page"
                      to="/"
                      onClick={() => handleClick("business")}
                    >
                      business
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      aria-current="page"
                      to="/"
                      onClick={() => handleClick("entertainment")}
                    >
                      entertainment
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      aria-current="page"
                      to="/"
                      onClick={() => handleClick("general")}
                    >
                      general
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      aria-current="page"
                      to="/"
                      onClick={() => handleClick("health")}
                    >
                      health
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      aria-current="page"
                      to="/"
                      onClick={() => handleClick("science")}
                    >
                      science
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      aria-current="page"
                      to="/"
                      onClick={() => handleClick("sports")}
                    >
                      sports
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      aria-current="page"
                      to="/"
                      onClick={() => handleClick("technology")}
                    >
                      technology
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
                                <input className="form-control me-2 bg-dark text-light" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
