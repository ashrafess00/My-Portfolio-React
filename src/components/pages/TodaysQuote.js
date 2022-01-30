import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const TodaysQuote = () => {
  const [quoteInfo, setQuoteInfo] = useState(null);
  const getQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");

      const data = await response.json();
      const { content, author } = data;
      setQuoteInfo({ content, author });
    } catch (error) {
      setQuoteInfo("failed");
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="quoteCon">
      {!quoteInfo ? (
        <Loading />
      ) : quoteInfo === "failed" ? (
        <FailedFetching getQuote={getQuote} setQuoteInfo={setQuoteInfo} />
      ) : (
        <>
          <FontAwesomeIcon icon={faQuoteLeft} color="red"></FontAwesomeIcon>
          <q className="quote">{quoteInfo.content}</q>
          <br />
          <p className="author">{quoteInfo.author}</p>
        </>
      )}
    </div>
  );
};

const Loading = () => {
  return (
    <div className="loading">
      <div>Loading</div>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

const FailedFetching = (props) => {
  return (
    <button
      className="btn"
      onClick={() => {
        props.getQuote();
        props.setQuoteInfo(null);
      }}
    >
      please try again
    </button>
  );
};

export default TodaysQuote;
