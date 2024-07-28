import React, { useState, useEffect } from 'react';
import RandomQuote from './RandomQuote';
import './Countdown.css';

function Countdown() {
  const targetDate = new Date("2024-10-16T00:00:00+05:30").getTime(); // IST timezone
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    const difference = targetDate - new Date(now).getTime();

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <div className="countdown-container">
      {/* <h2>Countdown to 16th September 2024</h2> */}
      <div className="countdown-values">
        <div className="countdown-value">{timeRemaining.days} <span>Days</span></div>
        <div className="countdown-value">{timeRemaining.hours} <span>Hours</span></div>
        <div className="countdown-value">{timeRemaining.minutes} <span>Mins</span></div>
        <div className="countdown-value">{timeRemaining.seconds} <span>Secs</span></div>
      </div>
      <div className="name-container">
        <div className="name-box">AKRAM</div>
        <div className="vs-text">VS</div>
        <div className="name-box">PRAJWAL</div>
      </div>
      <div className='random-quote'>
        <RandomQuote />
      </div>
    </div>
  );
}

export default Countdown;
