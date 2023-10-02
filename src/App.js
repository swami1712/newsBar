import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useContext, createContext } from "react";

function App() {
  const [url, setUrl] = useState(
    "https://newsapi.org/v2/everything?q=general&apiKey=fcddded3fc954d08a4f4b585a7278780"
  );
  // const UrlContext = createContext(null);
  const changeUrl = (changedUrl) => {
    setUrl(changedUrl);
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar changeUrl={changeUrl} url={url} />
        <News changeUrl={changeUrl} url={url} />
      </BrowserRouter>
    </div>
  );
}

export default App;
