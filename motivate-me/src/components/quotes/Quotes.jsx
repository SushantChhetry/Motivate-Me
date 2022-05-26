import axios from "axios";
import React, { useState, useEffect } from "react";

const Quotes = () => {
  const baseURL = "https://type.fit/api/quotes";
  const ranIndex = Math.floor(Math.random() * 99) + 1;

  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setQuotes(response.data);
    });
  }, []);

  if (!quotes) return null;

  console.log(quotes);

  return (
    <div className="Quotes">
      <h1 className="Text">{quotes[ranIndex]["text"]}</h1>
      <p className="Author">{quotes[ranIndex]["author"]}</p>
      <button>Click ME!</button>
    </div>
  );
};

export default Quotes;
