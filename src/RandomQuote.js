import React, { useState, useEffect } from 'react';
import quotesData from './quotes.json';

function RandomQuote() {
  const [currentQuote, setCurrentQuote] = useState({});

  useEffect(() => {
    getRandomQuote();
  }, []);

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setCurrentQuote(quotesData[randomIndex]);
  }

  return (
    <div onClick={getRandomQuote}>
      <p>"{currentQuote.quote}"</p>
      <p>- {currentQuote.author}</p>
    </div>
  );
}

export default RandomQuote;
