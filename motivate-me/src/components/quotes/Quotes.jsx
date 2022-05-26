import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Quotes.css";

const Quotes = () => {
  const baseURL = "https://type.fit/api/quotes";
  const ranIndex = Math.floor(Math.random() * 99) + 1;

  const [quotes, setQuotes] = useState(null);
  const [button, setButton] = useState(false);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setQuotes(response.data);
    });
  }, [button]);

  if (!quotes) return null;

  console.log(quotes);

  return (
    <div className="quotes">
      <h1 className="text">" {quotes[ranIndex]["text"]} "</h1>
      <p className="author">-{quotes[ranIndex]["author"]}</p>
      <button
        className="button"
        onClick={() => {
          setButton(!button);
        }}
      >
        MOTIVATE ME!
      </button>
    </div>
  );
};

export default Quotes;
